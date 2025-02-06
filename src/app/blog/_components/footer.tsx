import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import EmailInput, { EmailDialogInput } from "./email-input";
export default function Footer() {
  return (
    <div className="mt-8 space-y-2 bottom-0 ">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
        {/* <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          />
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div> */}
        <EmailInput />
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yagyaraj234"
          className="text-gray-600 hover:text-gray-900"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub size={16} className="mt-3 cursor-pointer" />
        </a>
        <a
          href="mailto:hey@yagyaraj.com"
          className="text-gray-600 hover:text-gray-900"
        >
          <span className="sr-only">Mail</span>
          <IoMdMail size={16} className="mt-3 cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/in/yagyaraj234"
          className="text-gray-600 hover:text-gray-900"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin size={16} className="mt-3 cursor-pointer" />
        </a>
      </div>
      <EmailDialogInput />

      <div className="text-center text-sm">
        <p>© 2025 Yagyaraj. All rights reserved.</p>
      </div>
    </div>
  );
}
