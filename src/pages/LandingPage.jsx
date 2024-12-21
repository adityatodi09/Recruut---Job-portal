import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Land Your Dream Job{" "}
          <span className="flex items-center leading-relaxed gap-2 sm:gap-6">
            with{" "}
            <img
              src="/Recruut Logo2.png"
              alt="Recruut logo"
              className="h-14 sm:h-14 lg:h-24"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate 
        </p>
      </section>
      <div>
        <Link to="/jobs">
          <Button>Find Jobs</Button>
        </Link>
        <Link to="/post-jobs">
          <Button>Post Jobs</Button>
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
