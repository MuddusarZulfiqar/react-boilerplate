import * as yup from "yup";
import { globalRegex, globalValidation } from "./globalValidation";
/*
  Validation Schemas  
*/
const FirstFromValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name Should be minimum 3 character")
    .max(30, "Name Should be maximum 30 character")
    .required("Required !"),

  email: yup.string().email("Enter a Vaid Email").required("Email is Required"),

  password: yup
    .string()
    .required("Enter Your Password")
    .matches(globalRegex.password, "Uppercase Lowercase Special char Required")
    .min(8, "Password Should be minimum 8 character")
    .max(50, "Too long"),

  phoneNumber: yup
    .string()
    .matches(globalRegex.phoneNumber, "Invalid Phone Number")
    .max(11, "Invalid Phone Number")
    .required("Required !"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not matched")
    .required("Confirm Password is Required"),

  image: yup
    .mixed()
    .required("File is Required")
    .test(
      "fileSize",
      "File more than 0.5 MB not Allowed",
      (value) => value && value.size <= globalValidation.fileSize
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && globalValidation.filesFormat.includes(value.type)
    ),

  sports: yup
    .array()
    .min(1, "Select at least 1 option")
    .max(2, "Select only 2 options")
    .required("Required"),
  gender: yup.string().required("Select a Option"),
  // website: yup.string().url().required("Website is Required"),

  select: yup.string().required("Select a Option"),
});

export { FirstFromValidation };
