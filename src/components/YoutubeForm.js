import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  //  values.name values.email values.channel
  //  errors.name errors.email errors.channel
  //  should have same values and errors keys
  //  errors.name = 'this field is required'
  const errors = {};

  console.log("values", values);
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visited fields", formik.touched);

  const handleCancelForm = () => {
    console.log("formik", formik);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && <div className={"error"}>{formik.errors.name}</div>}
        </div>

        <div className="form-control">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && <div className={"error"}>{formik.errors.email}</div>}
        </div>

        <div className="form-control">
          <label htmlFor="channel"> channel </label>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel && <div className={"error"}>{formik.errors.channel}</div>}
        </div>

        <button type={"submit"}>submit</button>
        <button type={"button"} onClick={handleCancelForm}>
          cancel
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
