"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function SignUpForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("../../api/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.ok) {
      redirect("/auth/sign-in");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center p-8">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Welcome to Listlify</CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <form onSubmit={handleSubmit}>
            <div className="p-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input name="name" placeholder="Name" />
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input name="email" placeholder="example@example.com" />
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input name="password" placeholder="********" />
              </div>
            </div>

            <div className="flex p-5 justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
