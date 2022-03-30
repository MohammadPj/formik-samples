import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  social: {
    facebook: "",
    twitter: ""
  }
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name"> Name </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name={"name"} component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor={"facebook"}>Facebook profile</label>
          <Field type={"text"} id={"facebook"} name={"social.facebook"} />
        </div>

        <div className="form-control">
          <label htmlFor={"twitter"}>Twitter profile</label>
          <Field type={"text"} id={"twitter"} name={"social.twitter"} />
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
