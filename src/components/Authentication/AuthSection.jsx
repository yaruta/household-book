/**
 * AuthSection component.
 * This section handles user authentication by displaying a login or sign-up form
 * based on the current URL query parameters. It also provides navigation links
 * between login and sign-up modes.
 * @returns {JSX.Element} The authentication section component.
*/

import AuthForm from "./AuthForm";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Section from "../UI/Section";

function AuthSection() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <Section className="flex-col p-8 mt-16">
      <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 mb-8 uppercase text-left">
        {`Please ${isLogin ? "login" : "sign up"} to continue`}
      </h2>
      <AuthForm isLogin={isLogin} />
      <div className="pt-4">
        {isLogin ? (
          <p className="text-elements-color-main text-start">
            New customer?{" "}
            <Link to="/auth?mode=signup" className="text-pink-500">
              Sign up
            </Link>{" "}
            for an account
          </p>
        ) : (
          <p className="text-elements-color-main text-start">
            Do you already have an account?{" "}
            <Link to="/auth?mode=login" className="text-pink-500">
              Login
            </Link>
          </p>
        )}
      </div>
    </Section>
  );
}

export default AuthSection;
