import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  age: "",
  comments: "",
};

const savedValues = {
  name: "mohammad",
  age: "25",
  comments: "Good job",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  const {setSubmitting} = onSubmitProps

  setSubmitting(false)

};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  age: Yup.string().required("Required!"),
});

const validateComments = (value) => {
  let error = "";
  if (!value) {
    error = "Required !";
  }
  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
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
              <label htmlFor="age"> Age </label>
              <Field
                type="text"
                id="age"
                name="age"
                validate={validateComments}
              />
              <ErrorMessage name={"age"} component={TextError} />
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

            <button type={"button"} onClick={() => setFormValues(savedValues)}>load saved data</button>
            <button type={"submit"} disabled={!formik.isValid || formik.isSubmitting}>submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
