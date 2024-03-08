"use client"

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname()

  return (
    pathName==="/login" || pathName.startsWith('/register') ? null :
    <footer className="bg-[#2B3247] p-10 text-white bottom-0">
      <div className="text-center text-sm">
      Copyright &copy; 2024 freelancerhub.org 
      </div>
    </footer>
  );
}
