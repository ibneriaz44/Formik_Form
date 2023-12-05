import { Form, Field, Formik, ErrorMessage  } from "formik";
import React from "react";
import "../App.css"; // Import your CSS file
import { FormSchema } from "./FormSchema";

const Registration_Form = () => {
  return (
    <div className="registration-form-container">
      <Formik
        validationSchema={FormSchema}
        initialValues={{
          studentName: "",
          age: "",
          gender: "",
          school: "",
          city: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
          <Form className="registration-form">
          <h1 className="h1">Registration Form</h1>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="studentName" className="label">
                Name
              </label>
              <Field name="studentName" type="text" className="form-control" />
              <ErrorMessage name="studentName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="age" className="label">
                Age
              </label>
              <Field name="age" type="number" className="form-control" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="school" className="label">
                School
              </label>
              <Field name="school" type="text" className="form-control" />
              <ErrorMessage name="school" component="div" className="error" />
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="gender-radio-group">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <Field name="city" as="select" className="form-control">
              <option value="">Choose city</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
            </Field>
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration_Form;
