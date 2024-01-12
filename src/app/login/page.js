import LoginForm from "@/components/LoginForm/LoginForm";
import Box from "@/components/shared/gradientBox/Box";

export const metadata = {
  title: "Login | life saving blood donation",
};

const Login = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto  lg:flex items-center justify-evenly my-5 p-5">
        {/* left side  */}
        <Box />

        {/* right side  */}
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
