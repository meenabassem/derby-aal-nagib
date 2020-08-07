import React, {useState} from "react";
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import "App.scss";

import {Form as FormikForm, Formik} from "formik";

import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup.string(),
  message: yup.string().required()
});
const Enquiries = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = (event: any) => {
    console.log("Handle submit event", event);
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };
  return (
    <div className={"page-body-container"}>
      {isSubmitted ? (
        <Alert key={"sdf"} variant={"success"}>
          Your request has been submitted successfully
        </Alert>
      ) : (
        <></>
      )}

      <h1>Contact Us</h1>

      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          email: "",
          message: "",
          phone: "",
          terms: false
        }}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <FormikForm noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md={4} controlId={"name"}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  isInvalid={!!touched.name && !!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={4} controlId={"email"}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={4} controlId={"phone"}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required
                value={values.message}
                onChange={handleChange}
                isInvalid={!!touched.message && !!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="checkbox_subscribe">
              <Form.Check
                required
                name="terms"
                label="Subscribe to our newsletter"
                onChange={handleChange}
                id="validationFormik0"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
export { Enquiries };
