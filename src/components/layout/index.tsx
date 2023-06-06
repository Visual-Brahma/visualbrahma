import { FC, useState, useEffect } from "react";
import { CustomComponentProps } from "@/types";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

const Layout: FC<CustomComponentProps> = ({ children }) => {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dark:bg-black">
      <Head>
        <title>Visual Brahma</title>
        <meta
          name="description"
          content="Visual Brahma - Stealth Mode. We are building something great for you. Till then try our existing services - Trackit attendance tracker and Arjun WhatsApp chatbot."
        />
        <meta property="og:title" content="Visual Brahma" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.visualbrahma.tech" />
        <meta property="og:description" content="Visual Brahma - Stealth Mode. We are building something great for you. Till then try our existing services - Trackit attendance tracker and Arjun WhatsApp chatbot." />
        <meta name="theme-color" content="#6B13FA" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://www.visualbrahma.tech" />
      </Head>
      <div
        className={`fixed top-0 w-full ${isScrolled
          ? "border-b border-black-100 bg-white/50 backdrop-blur-xl dark:bg-black/50"
          : "bg-white/0"} z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link className="flex items-center font-display text-2xl" href="/">
            <Image
              title="VisualBrahma logo"
              alt="Visual Brahma logo"
              src="/logo.png"
              className="mr-2 rounded-lg"
              height={45}
              width={45}
              style={{ color: "transparent" }}
            />
            <p className="font-display text-2xl font-bold drop-shadow-sm md:text-3xl text-black dark:text-white">
              Visual Brahma
            </p>
          </Link>

          <div className="flex items-center justify-center">
            <button
              aria-label="change-theme"
              className="px-2 py-2 rounded-md hover:text-gray-500 sm:ml-4 focus:outline-none ring-2 ring-deep-purple"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === undefined
                ? <FaDesktop />
                : theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-5 text-center self-end">
        {children}
      </div>
      <div className="w-full border-t border-gray-200 dark:border-white-200 py-5 text-center self-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <p className="text-sm dark:text-white">
              &copy; 2023 Visual Brahma. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 sm:flex-row">
            <a
              href="https://github.com/Visual-Brahma/trackit"
              className="text-gray-800 hover:text-gray-400 ml-4 dark:text-white"
            >
              Contribute
            </a>
            <a
              href="mailto:shubham@visualbrahma.tech"
              className="text-gray-800 hover:text-gray-400 ml-4 dark:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
