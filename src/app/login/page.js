import LoginForm from "@/components/LoginForm/LoginForm";
import Box from "@/components/shared/gradientBox/Box";

const Login = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto  lg:flex items-center justify-between shadow-md my-5 p-5">
        {/* left side  */}
        <Box />

        {/* right side  */}
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
