import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(formData);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-between p-10 text-center md:text-left relative">
        {/* Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvR4I9d0d2aYoIyywOqTGLGc-aRn8z2eqsA&s"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <div className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
            
          </div>
          <div className="text-sm italic mt-6">
            
            <br />
            
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Sign In</h2>
            <p className="text-gray-500 text-center">
              Enter your credentials to access your account
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="SecurePassword123"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="w-full bg-black text-white"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
