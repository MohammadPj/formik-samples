import React from 'react';
import Input from "./formik-controls/Input";
import TextArea from "./formik-controls/TextArea";
import Select from "./formik-controls/Select";

const FormikControl = ({control, ...rest}) => {
  switch (control) {
    case 'input': return <Input {...rest} />
    case 'textarea': return <TextArea {...rest} />
    case 'select': return <Select {...rest} />
    case 'radio':
    case 'checkbox':
    case 'date':
    default: return null
  }
  return (
    <div>
      
    </div>
  );
};

export default FormikControl;
