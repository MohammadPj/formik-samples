import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required !"),
    comment: Yup.string().required("Required !"),
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
          <button type={"submit"}>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
