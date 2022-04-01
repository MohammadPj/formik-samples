import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  age: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
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
  //  اگه از Field عادی استفاده بشه با آپدیت هر Field تمام Field ها Rerender میشن اما با FastField این اتفاق دیگه نمی افته
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
          <label htmlFor="age"> Age </label>
          <FastField type="text" id="age" name="age" />
        </div>

        <div className="form-control">
          <label htmlFor="email"> E-mail </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name={"email"}>
            {(errorMessage) => <div className={"error"}>{errorMessage}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel"> channel </label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Youtube channel name"
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
            placeholder="Type your comments"
          />
          <ErrorMessage name={"comments"} />
        </div>

        <div className="form-control">
          <label htmlFor="address"> Address </label>
          <Field name="address">
            {(props) => {
              // console.log("render props", props)
              const { field, form, meta } = props;
              return (
                <div>
                  <input type={"text"} id="address" {...field} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor={"facebook"}>Facebook profile</label>
          <Field type={"text"} id={"facebook"} name={"social.facebook"} />
        </div>

        <div className="form-control">
          <label htmlFor={"twitter"}>Twitter profile</label>
          <Field type={"text"} id={"twitter"} name={"social.twitter"} />
        </div>

        <div className="form-control">
          <label htmlFor={"primaryPh"}>Primary phone number</label>
          <Field type={"text"} id={"primaryPh"} name={"phoneNumbers[0]"} />
        </div>

        <div className="form-control">
          <label htmlFor={"secondaryPhone"}>Secondary phone number</label>
          <Field type={"text"} id={"secondaryPhone"} name={"phoneNumbers[1]"} />
        </div>

        <div className="form-control">
          <label>list of the phone numbers</label>
          <FieldArray name={"phNumbers"}>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;

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
