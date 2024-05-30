import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <Image src="/QPMatrix-logo.svg" alt="404" width={300} height={200} />
      <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
      <div className="flex flex-row mx-5 space-x-4 mt-10">
        <Link href="/">
          <Button className="h-10 p-4">
            <p>Go Home</p>
          </Button>
        </Link>
        <Link href="/projects">
          <Button className="h-10 p-4">
            <p>Back to Projects</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
