"use client";

import { usePathname } from "next/navigation";
import { IoMail, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  const pathName = usePathname();

  return pathName === "/login" || pathName.startsWith("/register") ? null : (
    <footer className="bg-[#094063] p-10 text-white bottom-0">
      <div className="text-2xl flex justify-center items-center gap-2 pb-4">
        <IoLogoFacebook className="hover:scale-105 duration-200" />
        <IoLogoLinkedin className="hover:scale-105 duration-200" />
        <a href="mailto:Support@freelancerhub.org" target="_blank">
          <IoMail className="hover:scale-105 duration-200" />
        </a>
      </div>
      <div className="text-center text-sm">
        Copyright &copy; 2024 freelancerhub.org
      </div>
    </footer>
  );
}
