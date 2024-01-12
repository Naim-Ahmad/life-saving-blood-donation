import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Box from "@/components/shared/gradientBox/Box";

const Register = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto grid place-content-center lg:grid-cols-2 shadow-md my-5 p-5">
        {/* left side  */}
        <Box />

        {/* right side  */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
