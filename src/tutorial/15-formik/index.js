import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextFelid from "./Components/TextFelid";

const SingUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required"),
    lastName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required"),
    email: Yup.string().email("email is not valid").required("required"),
    password: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div>
        <h1>Sign Up</h1>
        <Form>
          <TextFelid type="text" name="firstName" label="First Name" />
          <TextFelid type="text" name="lastName" label="Last Name" />
          <TextFelid type="email" name="email" label="Email" />
          <TextFelid type="password" name="password" label="Password" />
          <TextFelid
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
          <button type="submit" className=" btn-dark btn mt-0 text-start">
            Submit
          </button>
          <button type="reset" className=" btn-danger btn mt-0 ms-2 text-start">
            Reset
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SingUp;
