import React, { useState } from "react";
import {
  Button,
  PasswordInput,
  UnstyledButton,
  Loader,
  Input,
} from "@mantine/core";
import * as yup from "yup";
import { useFormik } from "formik"; // Import useFormik hook
import { createUser } from "../../firebase/firebase"; // Import the createUser function from firebase
import AuthImage from "../../assets/images/authImage.jpg";
import Logo from "../../assets/images/logoWeb.png";
import "../../styles/pages/Auth.css";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { Link, useNavigate } from "react-router-dom";

// Define the types for form fields
type FormData = {
  fullName: string;
  email: string;
  password: string;
};

// Create the validation schema
const SignUpSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema, // Use the validation schema for form validation
    onSubmit: async (values) => {
      try {
        // Call the Firebase createUser function with the email, password, and full name from the form
        const userCredential = await createUser(
          values.email,
          values.password,
          values.fullName
        );

        // Handle successful sign-up (e.g., redirect to sign-in page or show a success message)
        if (userCredential?.user) {
          console.log("Successfully signed up:", userCredential.user);
          navigate("/"); // Redirect to the sign-in page after successful sign-up
        } else {
          setError("User sign-up failed");
        }
      } catch (error: any) {
        setError(error.message);
      }
    },
  });

  const buttonContent = formik.isSubmitting ? <Loader size={20} /> : "Sign Up";

  return (
    <div className="auth">
      <div className="auth_Container">
        <div className="auth_Card">
          <div className="authCard_Header">
            <img src={Logo} alt="logo_img" />
            <h4>Create your account</h4>
            <p>Create a free account and start using Nariox</p>
          </div>
          <form
            className="authCard_Form"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="mb-3">
              <Input.Wrapper label="Full Name" required>
                <Input
                  icon={<User />}
                  placeholder="Enter your full name"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
              </Input.Wrapper>
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="error-message">{formik.errors.fullName}</div>
              )}
            </div>

            <div className="mb-3">
              <Input.Wrapper label="Email Address" required>
                <Input
                  icon={<Mail />}
                  placeholder="Enter your email"
                  name="email" // Specify the name attribute for Formik
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Input.Wrapper>
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>

            <PasswordInput
              icon={<Lock />}
              placeholder="Password"
              label="Password"
              name="password" // Specify the name attribute for Formik
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}

            {error && <div className="error-message">{error}</div>}
            {/* Show error message if sign-up fails */}

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
        <p>Already registered?</p>
        <Link to="/">
          <UnstyledButton>Sign In</UnstyledButton>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
