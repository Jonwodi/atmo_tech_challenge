import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const routes = [
    { name: "Form", link: "/" },
    { name: "Sensors", link: "/sensors" },
  ]; // navigation tab link settings

  return (
    <div className="flex flex-row flex-wrap sm:justify-start smUp:justify-center gap-10 pt-5 sm:pl-20 smUp:pl-0">
      {routes.map((route) => (
        <Link href={route.link}>
          <a
            className={`text-xl ${
              router.pathname == `${route.link}`
                ? "text-[#1A75BC]"
                : "text-black"
            }`}>
            {route.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
