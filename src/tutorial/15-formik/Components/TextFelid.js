import React from "react";
import { ErrorMessage, useField } from "formik";
const TextFelid = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="text-start w-50 m-auto">
      <label className="text-dark fw-bold" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="mb-3 text-danger fw-bold"
        name={field.name}
      />
    </div>
  );
};

export default TextFelid;
