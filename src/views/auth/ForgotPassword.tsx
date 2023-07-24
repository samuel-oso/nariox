import React, { useState } from "react";
import AuthImage from "../../assets/images/authImage.jpg";
import Logo from "../../assets/images/logoWeb.png";
import "../../styles/pages/Auth.css";
import { Button, Input, UnstyledButton, Loader } from "@mantine/core";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { Link } from "react-router-dom";
import { sendResetPasswordEmail } from "../../firebase/firebase";
import { useFormik } from "formik"; // Import useFormik hook
import * as yup from "yup"; // Import yup for form validation

const FormFields = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required!"),
});

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: FormFields,
    onSubmit: async (values) => {
      try {
        await sendResetPasswordEmail(values.email);
        setIsEmailSent(true);
      } catch (error: any) {
        setError(error.message);
      }
    },
  });
  const buttonContent = formik.isSubmitting ? <Loader size={20} /> : "Submit";

  return (
    <div className="auth">
      <div className="auth_Container">
        <div className="auth_Card">
          <div className="authCard_Header">
            <img src={Logo} alt="logo_img" />
            <h4>Welcome back!</h4>
            <p>Enter your email and password to access the admin panel</p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            className="authCard_Form"
          >
            <div className="mb-3">
              <Input.Wrapper label="Email Address" required>
                <Input
                  icon={<Mail />}
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")} // Bind formik props to the input field
                />
              </Input.Wrapper>
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>

            {isEmailSent ? (
              <div className="resetPassword">
                <p>Check your email for instructions to reset your password.</p>
                <Link to="/">
                  <UnstyledButton>Redirect to Sign In</UnstyledButton>
                </Link>
              </div>
            ) : (
              <>
                {error && <div className="error-message">{error}</div>}
                <Button type="submit" loading={formik.isSubmitting}>
                  {buttonContent}
                </Button>{" "}
              </>
            )}
          </form>
        </div>

        <div className="auth_CardImg">
          <div className="overlay"></div>
          <img src={AuthImage} alt="auth_img" />
        </div>
      </div>

      <div className="auth_Footer">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <UnstyledButton>Sign Up</UnstyledButton>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
