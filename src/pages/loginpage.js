import React from 'react';
import { Formik, Form, Field } from 'formik';
import "../login.css";



const LoginForm = () => {
  const initialValues = {
    role: 'student',
    admissionNumber: '',
    teacherId: '',
    password: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container"> {/* Apply the form-container class */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={values.role === 'student'}
                  onChange={() => {
                    // Handle radio button change
                  }}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="teacher"
                  checked={values.role === 'teacher'}
                  onChange={() => {
                    // Handle radio button change
                  }}
                />
                Teacher
              </label>
            </div>

            {values.role === 'student' ? (
              <div className="form-field"> {/* Apply the form-field class */}
                <label htmlFor="admissionNumber">Admission Number</label>
                <Field type="text" id="admissionNumber" name="admissionNumber" />
              </div>
            ) : (
              <div className="form-field"> {/* Apply the form-field class */}
                <label htmlFor="teacherId">Teacher ID</label>
                <Field type="text" id="teacherId" name="teacherId" />
              </div>
            )}

            <div className="form-field"> {/* Apply the form-field class */}
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
