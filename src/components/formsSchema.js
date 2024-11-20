import * as Yup from "yup";

const phoneRegExp = /^\d{3}-\d{3}-\d{4}$/;

export const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Number is required")
      .matches(phoneRegExp, "Number format is XXX-XXX-XXXX"),
  });

  export const registrationFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Max 20 characters ")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  
  export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });