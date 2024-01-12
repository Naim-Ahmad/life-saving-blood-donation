
import { string, object,ref } from "yup";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export let userSchema = object({
  email: string().email().required(),
  firstName: string().required(),
  lastName: string().required(),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~]/,
      getCharacterValidationError("special")
    ),
  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
});
