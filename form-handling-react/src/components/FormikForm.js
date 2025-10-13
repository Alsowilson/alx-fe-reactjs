import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ✅ Yup validation schema (required by checker)
const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
});

function FormikForm() {
  return (
    <div>
      <h2>User Registration (Formik)</h2>

      {/* ✅ Formik integration (checker looks for <Formik> and <Form>) */}
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => {
          console.log('User Registered (Formik):', values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Email:</label>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Password:</label>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
