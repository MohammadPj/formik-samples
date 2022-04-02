import React from 'react';
import {Field, ErrorMessage} from 'formik'
import TextError from "../TextError";

const TextArea = ({label, name, ...rest}) => {
  return (
    <div className={"form-control"}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} as={"textarea"} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
