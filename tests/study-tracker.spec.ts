import { expect, test } from "@playwright/test"

test("restores saved progress and preserves it when another task changes", async ({
  page,
}) => {
  const errors: string[] = []
  page.on("pageerror", (error) => errors.push(error.message))
  page.on("console", (message) => {
    if (/hydrat|didn't match|server rendered HTML/i.test(message.text())) {
      errors.push(message.text())
    }
  })

  await page.goto("/rr")
  await page.evaluate(() => {
    localStorage.setItem("study_tracker_4w", JSON.stringify({ "0_0_0": true }))
    localStorage.setItem(
      "study_tracker_4w_exp",
      JSON.stringify({ e_0_0_0: true })
    )
  })
  await page.reload()

  const savedTask = page.getByRole("button", {
    name: "Mark Execution context, call stack & hoisting incomplete",
    exact: true,
  })
  const savedDetails = page.locator("button[aria-expanded]").filter({
    hasText: "Execution context, call stack & hoisting",
  })
  await expect(savedTask).toHaveAttribute("aria-pressed", "true")
  await expect(savedDetails).toHaveAttribute("aria-expanded", "true")

  await page
    .getByRole("button", {
      name: "Mark Clone Vercel landing page layout complete",
      exact: true,
    })
    .click()
  await page.reload()

  await expect(savedTask).toHaveAttribute("aria-pressed", "true")
  await expect(savedDetails).toHaveAttribute("aria-expanded", "true")
  await expect(
    page.getByRole("button", {
      name: "Mark Clone Vercel landing page layout incomplete",
      exact: true,
    })
  ).toHaveAttribute("aria-pressed", "true")
  await expect
    .poll(() =>
      page.evaluate(() =>
        JSON.parse(localStorage.getItem("study_tracker_4w") ?? "{}")
      )
    )
    .toEqual({ "0_0_0": true, "0_0_1": true })
  expect(errors).toEqual([])
})
