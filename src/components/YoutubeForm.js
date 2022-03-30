import React from 'react';
import { useFormik } from 'formik'

const YoutubeForm = () => {

  const formik = useFormik({})

  return (
    <div>
      <form>

        <label htmlFor="name"> Name </label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email"> E-mail </label>
        <input type="email" id="email" name="email" />

        <label htmlFor="chanel"> Chanel </label>
        <input type="text" id="chanel" name="chanel" />

        <button>submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

