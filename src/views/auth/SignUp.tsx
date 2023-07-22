import AuthImage from "../../assets/images/authImage.jpg";
import Logo from "../../assets/images/logoWeb.png";
import "../../styles/pages/Auth.css";
import { Button, Input, PasswordInput, UnstyledButton } from "@mantine/core";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="auth">
      <div className="auth_Container">
        <div className="auth_Card">
          <div className="authCard_Header">
            <img src={Logo} alt="logo_img" />
            <h4>Create your account</h4>
            <p>Create a free account and start using Nariox</p>
          </div>
          <div className="authCard_Form">
            <Input.Wrapper label="Full Name" className="mb-3">
              <Input icon={<User />} placeholder="Enter your full name" />
            </Input.Wrapper>

            <Input.Wrapper label="Email Address" className="mb-3">
              <Input icon={<Mail />} placeholder="Enter your email" />
            </Input.Wrapper>

            <PasswordInput
              className="mb-3"
              icon={<Lock />}
              placeholder="Password"
              label="Password"
            />

            <Link to="/">
              <Button>Sign Up</Button>
            </Link>
          </div>
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
