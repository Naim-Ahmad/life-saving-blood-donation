import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Box from "@/components/shared/gradientBox/Box";

export const metadata = {
  title: "Registration | life saving blood donation",
};

const Register = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto lg:grid place-content-center lg:grid-cols-2 my-5 p-5">
        {/* left side  */}
        <Box />

        {/* right side  */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
