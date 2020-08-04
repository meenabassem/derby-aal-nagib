import React from "react";
import {Formik} from "formik";
import {useHistory} from "react-router-dom";
import * as yup from "yup";
import {Button, Card, Col, Form} from "react-bootstrap";
import "App.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your Email"),
  password: yup.string().required("Please enter your password")
});
const AgentLoginPage = () => {
  const history = useHistory();
  const onSubmit = (event: any) => {
    console.log("Handle submit event", event);
    setTimeout(() => {
      console.log("Navigate to home page after login");
      history.push("/");
    }, 1500);
  };
  return (
    <div className={"page-body-container"}>
      <Card
        style={{
          margin: "auto",
          maxWidth: "30rem"
        }}
      >
        <Card.Header as="h3">Agent Login</Card.Header>
        <Card.Body>
          <Formik
            validationSchema={schema}
            initialValues={{
              email: "",
              password: ""
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
              <Form noValidate onSubmit={handleSubmit}>
                <Col>
                  <Form.Group as={Col} controlId={"email"}>
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
                  <Form.Group as={Col} controlId={"password"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/*<Form.Group controlId="checkbox_subscribe">*/}
                  {/*  <Form.Check*/}
                  {/*    required*/}
                  {/*    name="terms"*/}
                  {/*    label="Subscribe to our newsletter"*/}
                  {/*    onChange={handleChange}*/}
                  {/*    id="validationFormik0"*/}
                  {/*  />*/}
                  {/*</Form.Group>*/}
                  <Col>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Col>
                </Col>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};
export { AgentLoginPage };
