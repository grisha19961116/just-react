import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import List from '../List/List';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function MoviesPage() {
  const [saveValue, setSaveValue] = useState('');

  useEffect(() => {
    const getQuery = localStorage.getItem('query');
    if (getQuery === null) {
      return;
    }
    setSaveValue(getQuery);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
     const query = values.firstName.toLowerCase().trim();
     localStorage.setItem('query', query);
     setSaveValue(query);
    },

  });

  return (
    <>
  <header className={s.Searchbar}>
  <form  className={s.SearchForm} onSubmit={formik.handleSubmit}>

     <label className={s.Searchbar__lable}  htmlFor="firstName">Input </label>
 <input
     className={s.SearchForm__input}
     id="firstName"
     name="firstName"
     type="text"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.firstName}
     placeholder='search query'
  /> 

  {formik.touched.firstName && formik.errors.firstName ? (
  <div>{formik.errors.firstName}</div>
) : null}

<button type="submit" className={s.SearchForm__button}>
  <span className="s.SearchForm-button-label"></span>
  </button>
</form>
</header>

      <List query={saveValue !== '' && saveValue} flagTrend={false} />
    </>
  );
}
export default MoviesPage;
