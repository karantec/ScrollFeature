import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";

const AuthPage = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input {...register("email")} type="email" placeholder="Email" className="border p-2 w-full mb-2" required />
        <input {...register("password")} type="password" placeholder="Password" className="border p-2 w-full mb-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default AuthPage;
