import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  phNumbers: [""],
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
          <label>list of the phone numbers</label>
          <FieldArray name={"phNumbers"}>
            {(fieldArrayProps) => {
              console.log("props", fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;

              return <div>
                <button type={"button"} onClick={() => push()}> + </button>
                {phNumbers.map((number, i) => (
                  <div key={i}>
                    <Field name={`phNumbers[${i}]`} />
                    <button type={"button"} onClick={() => remove(i)}> - </button>
                    <button type={"button"} onClick={() => push()}> + </button>
                  </div>
                ))}
              </div>;
            }}
          </FieldArray>
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
