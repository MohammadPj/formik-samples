import React from 'react';
import Input from "./Input";

const FormikControl = ({control, ...rest}) => {
  switch (control) {
    case 'input': return <Input {...rest} />
    case 'textarea':
    case 'select':
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
