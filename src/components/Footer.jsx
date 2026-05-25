import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white ">
      {/* Top Footer */}
      <div className="w-10/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">IdeaVault</h2>
          <p className="text-gray-400">
            A collaborative platform where innovators share startup ideas,
            discover trends, and grow through community feedback.
          </p>

          <div className="flex items-center gap-4 text-2xl">
            <Link href="#">
              <FaFacebook className="hover:text-blue-500 transition" />
            </Link>

            <Link href="#">
              <FaTwitter className="hover:text-sky-400 transition" />
            </Link>

            <Link href="#">
              <FaInstagram className="hover:text-pink-500 transition" />
            </Link>

            <Link href="#">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </Link>

            <Link href="#">
              <FaGithub className="hover:text-gray-400 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link href="/" className="hover:skew-x-12 transition">
              Home
            </Link>
            <Link href="/ideas" className="hover:skew-x-12 transition">
              Explore Ideas
            </Link>
            <Link href="/trending" className="hover:skew-x-12 transition">
              Trending
            </Link>
            <Link href="/about" className="hover:skew-x-12 transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:skew-x-12 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Resources</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link className="hover:underline " href="#">
              Community
            </Link>
            <Link className="hover:underline " href="#">
              Blog
            </Link>
            <Link className="hover:underline " href="#">
              Startup Guides
            </Link>
            <Link className="hover:underline " href="#">
              Support
            </Link>
            <Link className="hover:underline " href="#">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-3 text-gray-400">
            <p>Email: support@ideavault.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="w-11/12 mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} IdeaVault. All rights reserved.</p>

        <div className="flex gap-5">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
