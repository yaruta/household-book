import AuthForm from "./AuthForm";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Section from "../UI/Section";

function AuthSection() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  
  return (
    <Section className="flex-col p-8 mt-16">
      <AuthForm isLogin={isLogin} />
      <div className="pt-8">
        {isLogin ? (
          <p className="text-elements-color-main">
            New customer?{" "}
            <Link to="/auth?mode=signup" className="text-pink-500">
              Sign up
            </Link>{" "}
            for an account
          </p>
        ) : (
          <p className="text-elements-color-main">
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
