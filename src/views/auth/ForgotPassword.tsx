import AuthImage from "../../assets/images/authImage.jpg";
import Logo from "../../assets/images/logoWeb.png";
import "../../styles/pages/Auth.css";
import { Button, Input, UnstyledButton } from "@mantine/core";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="auth">
      <div className="auth_Container">
        <div className="auth_Card">
          <div className="authCard_Header">
            <img src={Logo} alt="logo_img" />
            <h4>Reset Password</h4>
            <p>
              Enter your email address and we'll send you an email with
              instructions to reset your password
            </p>
          </div>
          <div className="authCard_Form">
            <Input.Wrapper label="Email Address" className="mb-3">
              <Input icon={<Mail />} placeholder="Enter your email" />
            </Input.Wrapper>

            <Link to="/">
              <Button>Submit</Button>
            </Link>
          </div>
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
