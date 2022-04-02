import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    comment: "",
    rate: ""
  };

  const options = [
    {value: '', key: "Select an option"},
    {value: 1, key: "Rate 1"},
    {value: 2, key: "Rate 2"},
    {value: 3, key: "Rate 3"},
  ]

  const validationSchema = Yup.object({
    email: Yup.string().required("Required !"),
    comment: Yup.string().required("Required !"),
    rate: Yup.string().required("Required !"),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control={"input"}
            type={"email"}
            label={"Email"}
            name={"email"}
          />
          <FormikControl
            control={"textarea"}
            name={"comment"}
            label={"Comment"}
            style={{background: "aqua"}}
          />
          <FormikControl control={"select"} name={"rate"} options={options} label={"Rate"} />
          <button type={"submit"}>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
