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