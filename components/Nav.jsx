"use client";

import Link from "@node_modules/next/link";
import Image from "@node_modules/next/image";
import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
} from "@node_modules/next-auth/react";
import { set } from "mongoose";

const Nav = () => {
  const isUserLoggedIn = false;
  const [providers,setProviders]=useState(null);

  useEffect(()=>{
    const setProviders=async()=>{
        const response=await getProviders();
        setProviders(response);
    }
    setProviders();
  },[])

  return (
    <nav className="felx-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p className="logo_text">Promptopia</p>
      </Link>

      {/*  Desktop Navigation  */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
            <Image src="/assets/images/logo.svg"
            alt="Profile"
            width={37}
            height={37}
            className="rounded-full"></Image></Link>
          </div>
        ) : (
          <> </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
