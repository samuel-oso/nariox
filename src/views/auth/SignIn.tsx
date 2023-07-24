import React, { useState, useEffect } from "react";
import {
  Button,
  PasswordInput,
  UnstyledButton,
  Loader,
  Input,
} from "@mantine/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { signInUser } from "../../firebase/firebase";
import AuthImage from "../../assets/images/authImage.jpg";
import Logo from "../../assets/images/logoWeb.png";
import "../../styles/pages/Auth.css";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as IconX } from "../../assets/images/iconX.svg";
import { Notification } from "@mantine/core";

// Define the types for defaultFormFields and data
type DefaultFormFields = {
  email: string;
  password: string;
};

type FormData = {
  email: string;
  password: string;
};

const FormFields = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const defaultFormFields: DefaultFormFields = {
    email: "",
    password: "",
  };

  const [showNotification, setShowNotification] = useState(false);

  const hideNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    // Auto-hide the notification after 2 seconds (adjust the duration as needed)
    const timer = setTimeout(() => {
      hideNotification();
    }, 2000);

    return () => {
      clearTimeout(timer); // Clear the timer on unmount or when the component rerenders
    };
  }, [showNotification]);

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      // Validate the form data using FormFields schema
      await FormFields.validate(data);

      // Send the email and password to firebase
      const userCredential = await signInUser(data.email, data.password);

      if (userCredential) {
        navigate("/dashboard/ecommerce");
      }
    } catch (error: any) {
      console.log("Form submission failed", error.message);
      setShowNotification(true);
    }
  };

  const formik = useFormik<FormData>({
    initialValues: defaultFormFields,
    validationSchema: FormFields,
    onSubmit: onSubmit, // Add onSubmit function to handle form submission
  });

  const buttonContent = formik.isSubmitting ? <Loader size={20} /> : "Sign In";

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
            className="authCard_Form"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="mb-3">
              <Input.Wrapper required label="Email address">
                <Input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                  name="email"
                  icon={<Mail />}
                />
              </Input.Wrapper>
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>

            <PasswordInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              icon={<Lock />}
              required
              label="Password"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}

            <Link to="/forgot-password">
              <UnstyledButton>Forgot Password?</UnstyledButton>
            </Link>

            <Button type="submit" loading={formik.isSubmitting}>
              {buttonContent}
            </Button>
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

      {/* Notifications Tab */}
      <div className="notification-container">
        {showNotification && (
          <Notification
            icon={<IconX size="1.1rem" />}
            color="red"
            onClose={hideNotification}
          >
            Bummer! Invalid login details
          </Notification>
        )}
      </div>
    </div>
  );
};

export default SignIn;
