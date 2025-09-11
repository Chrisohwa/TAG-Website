import * as Yup from "yup";

export const messageValue1 = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  company: "",
  message: "",
};

export const messValue = {
  firstName: "",
  email: "",
  message: "",
  acceptTerms: false,
};

export const messSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters"),
  acceptTerms: Yup.boolean()
    .oneOf([true], "You must accept the T&C")
    .required("You must accept the T&C"),
});

export const messageSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: Yup.string().matches(
    /^[0-9]{10,15}$/,
    "Phone number must be 10–15 digits"
  ),

  company: Yup.string().min(2, "Company name must be at least 2 characters"),

  message: Yup.string().min(10, "Message must be at least 10 characters"),
});
