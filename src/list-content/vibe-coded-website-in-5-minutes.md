<!-- list:metadata
{
  "title": "I vibe-coded an animated landing page in minutes. Here is how I did it.",
  "description": "Step-by-step guide to vibe-code an animated landing page with Pinterest inspiration, Gemini-generated motion, OpenCode, and a cursor-scrubbed hero video.",
  "date": "2026-06-07",
  "linkedinUrl": "",
  "videoUrl": "/list/vibe-coding.mp4",
  "ogImage": "/list/vibe-coded-landing-og.jpeg",
  "tags": ["vibe-coding", "landing-page", "animation", "gemini", "opencode"]
}
-->

## Steps

1. Go to Pinterest and select an image reference you like.
2. Send the image to Gemini and ask it to create another version for you.
3. Ask Gemini to create a portrait image of a person rotated at `80deg`.
4. Ask Gemini to create another portrait image of the same person rotated at `250deg`.
5. Take all three images and send them to Gemini.
6. Ask Gemini to create a slow-motion video rotating the image from `80deg` to `270deg`.
7. Select the video output.
8. Open your IDE or agent setup. I used OpenCode with Kimi K2.6.
9. Attach the video and paste this prompt:

```txt
Build a landing page for company "xyz".

Use a 60/40 split layout.
Left section: add the company tagline and CTA.
Right section: use the attached video.

Video requirements:
- muted
- preload="auto"
- no autoplay

The video should scrub forward and backward based on horizontal cursor movement.
Sensitivity should feel around 0.30 to 0.40.

Add an onMouseMove event on window.
Track prevX.
Compute:

delta = currentX - prevX
timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration

Use:
SENSITIVITY = 0.8

Clamp targetTime between 0 and video.duration.
Set video.currentTime to seek.

Use an onSeeked handler to queue the next seek if targetTime changed.
Do not flood seeks.
```

10. Open the page on desktop and mobile.
11. Check that the video scrubs smoothly with cursor movement.
12. Fix spacing, text overflow, CTA placement, and mobile layout.
