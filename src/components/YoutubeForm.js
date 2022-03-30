import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  phoneNumbers: ['', '']
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
          <label htmlFor={"primaryPh"}>Primary phone number</label>
          <Field type={"text"} id={"primaryPh"} name={"phoneNumbers[0]"} />
        </div>

        <div className="form-control">
          <label htmlFor={"secondaryPhone"}>Secondary phone number</label>
          <Field type={"text"} id={"secondaryPhone"} name={"phoneNumbers[1]"} />
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
