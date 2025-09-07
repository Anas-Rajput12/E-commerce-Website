"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Form, Input, Button, message } from "antd";

// ✅ Define a type for login form values
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (values: LoginFormValues) => {
    setLoading(true);

    // Hardcoded email and password for admin
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    const { email, password } = values;

    if (email === adminEmail && password === adminPassword) {
      message.success("Login successful!");
      router.push("/admin/analytics"); // ✅ redirect works properly in App Router
    } else {
      message.error("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        <Form<LoginFormValues> // ✅ tell Form about the type
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
