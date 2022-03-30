import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

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
          <ErrorMessage name={"name"} component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email"> E-mail </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name={"email"} >
            {
              (errorMessage) => <div className={"error"}>{errorMessage}</div>
            }
          </ErrorMessage>
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

        <div className="form-control">
          <label htmlFor="address"> Address </label>
          <Field name="address">
            {
              (props) => {
                console.log("render props", props)
                const {field, form, meta} = props
                return (
                  <div>
                    <input type={"text"} id="address" {...field}  />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )
              }
            }
          </Field>
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
