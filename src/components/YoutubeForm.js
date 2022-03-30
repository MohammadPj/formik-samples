import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
  comments: Yup.string(),
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
          <ErrorMessage name={"name"} />
        </div>

        <div className="form-control">
          <label htmlFor="email"> E-mail </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name={"email"} />
        </div>

        <div className="form-control">
          <label htmlFor="channel"> channel </label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeHolder="Youtube channel name"
          />
          <ErrorMessage name={"channel"} />
        </div>

        <div className="form-control">
          <label htmlFor="comments"> Comments </label>
          <Field
            as="textarea"
            type="text"
            id="comments"
            name="comments"
            placeHolder="Type your comments"
          />
          <ErrorMessage name={"comments"} />
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
