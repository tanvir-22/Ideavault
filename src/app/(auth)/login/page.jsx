"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../../../lib/auth-client";
import { FaGoogle } from "react-icons/fa";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
    });
    if (data) {
      redirect("/");
    } else {
      console.log(error);
    }
  };

  const googleLoginHandler = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="bg-[#0F172A] h-[91vh]  flex flex-col justify-center  items-center">
      <h1 className="text-3xl font-bold text-white py-2">Welcome Back</h1>
      <Form
        onSubmit={loginHandler}
        className="flex w-120 p-18  flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg "
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-white">Email</Label>
          <Input
            className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-white">Password</Label>
          <Input
            className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
            placeholder="Enter your password"
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-2">
          <Button className="w-full bg-[#7357F5]" type="submit">
            <Check />
            Login
          </Button>
          <Button onClick={googleLoginHandler} className="w-full bg-[#7357F5]">
            <FaGoogle />
            Login with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
