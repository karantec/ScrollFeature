import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";



const SignIn = () => {
  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-between p-10">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl">⌘</span> Acme Inc
        </div>
        <div className="text-sm italic">
          “This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.”
          <br />
          <span className="font-bold">Sofia Davis</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Create an account</h2>
            <p className="text-gray-500 text-center">
              Enter your email below to create your account
            </p>

            <Input
              type="email"
              placeholder="name@example.com"
              className="w-full"
            />
            <Button className="w-full bg-black text-white">Sign In with Email</Button>

            <div className="relative text-center">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full border-t"></span>
              <span className="bg-white px-2 relative z-10 text-gray-500 text-sm">
                OR CONTINUE WITH
              </span>
            </div>

            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span>⚫</span> GitHub
            </Button>

            <p className="text-sm text-gray-500 text-center">
              By clicking continue, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
