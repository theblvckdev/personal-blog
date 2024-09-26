"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <>
      <form className="flex flex-col space-y-4">
        <div>
          <Label htmlFor="email" className="text-gray-900 text-sm font-medium">
            Email address
          </Label>
          <Input
            required
            type="eamil"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-200 focus-visible:ring-0 focus:border-blue-500 duration-300 ease-in focus-visible:ring-offset-0 w-full outline-none shadow-sm rounded-md"
          />
        </div>

        <div>
          <Label
            htmlFor="password"
            className="text-gray-900 text-sm font-medium"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-200 focus-visible:ring-0 focus:border-blue-500 duration-300 ease-in focus-visible:ring-offset-0 w-full outline-none shadow-sm rounded-md pr-10"
            />

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-[50%] mr-2 cursor-pointer -translate-y-[50%] bottom-0"
            >
              {showPassword ? (
                <EyeOff strokeWidth={1} size={20} />
              ) : (
                <Eye strokeWidth={1} size={20} />
              )}
            </div>
          </div>
          <small>
            <Link
              href={"/forgot-password"}
              className="text-blue-500 underline outline-none"
            >
              Forgot Password?
            </Link>
          </small>
        </div>

        <div>
          <Button className="bg-blue-500 w-full hover:bg-blue-600 duration-300 ease-in">
            Sign in
          </Button>
          <small className="text-gray-400">
            Don&apos;t have an account? {""}
            <Link
              href={"/sign-up"}
              className="text-blue-500 underline outline-none"
            >
              Sign Up
            </Link>
          </small>
        </div>
      </form>

      <div className="relative flex my-5 items-center justify-center">
        <div className="w-full border-b border-b-gray-200"></div>
        <p className="text-gray-400 bg-white py-1 px-1.5 absolute left-[50%] -translate-x-[50%] text-sm">
          Or
        </p>
      </div>

      <div>
        <Button className="bg-white w-full text-gray-400 hover:bg-gray-50 ring-1 ring-gray-300 duration-300 ease-in flex items-center gap-2">
          <Image
            src={"/svg/google-logo.svg"}
            alt="google svg logo"
            className="w-5 h-5"
            width={100}
            height={100}
          />
          <div>Continue with Google</div>
        </Button>
      </div>
    </>
  );
};

export default Login;
