import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  comments: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
});

const validateComments = (value) => {
  let error = "";
  if (!value) {
    error = "Required !";
  }
  return error;
};

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(formik) => {
        console.log("formik", formik)
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name"> Name </label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name={"name"} component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="comments"> Comments </label>
              <Field
                type="text"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name={"comments"} component={TextError} />
            </div>

            <button type={"submit"} disabled={!formik.isValid}>submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
