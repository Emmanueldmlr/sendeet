import { passwordRegEx } from '@/app/Data/RegexData';
import * as Yup from 'yup';

export const signInFormValidationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid email format")
      .required("Email Address is required"),
    password: Yup.string()
      .matches(
        passwordRegEx,
        "Password must be at least 8 characters, contain one uppercase letter, and one special character."
      )
      .required("Password is required")
  });