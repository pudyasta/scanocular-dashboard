import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { sideContext } from "../dashboard/components/DashboardLayout";

const LinkItem = ({ children, href, onClick, query, text }) => {
  const router = useRouter().query.slug;
  const isOpen = useContext(sideContext);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <Link
      onClick={onClick}
      href={href}
      className={`flex ${
        router == query ? "text-white" : "text-white/50"
      } items-center text-lg active:text-white`}
    >
      {children}
      <span
        className={`title-wrapper transition-all overflow-hidden ${
          isOpen ? "w-52 ml-3" : "w-0"
        } `}
      >
        {text}
      </span>
    </Link>
  );
};

export default LinkItem;
