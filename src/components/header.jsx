import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img
            src="/Recruut Logo1.png"
            alt="Recruut logo"
            className="h-24 px-4"
          />
        </Link>
        <Button variant="outline"> Login </Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
