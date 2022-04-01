import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  social: Yup.object({
    facebook: Yup.string().required("Required!"),
    twitter: Yup.string().required("Required!"),
  })

});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
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
          <ErrorMessage name={"social.facebook"} component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor={"twitter"}>Twitter profile</label>
          <Field type={"text"} id={"twitter"} name={"social.twitter"} />
          <ErrorMessage name={"social.twitter"} component={TextError} />
        </div>

        <div className="form-control">
          <label>list of the phone numbers</label>
          <FieldArray name={"phNumbers"}>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;

              console.log("form errors", form.errors)
              return (
                <div>
                  <button type={"button"} onClick={() => push()}>
                    {" + "}
                  </button>
                  {phNumbers.map((number, i) => (
                    <div key={i}>
                      <Field name={`phNumbers[${i}]`} />
                      <button type={"button"} onClick={() => remove(i)}>
                        {" - "}
                      </button>
                      <button type={"button"} onClick={() => push()}>
                        {" + "}
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type={"submit"}>submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
