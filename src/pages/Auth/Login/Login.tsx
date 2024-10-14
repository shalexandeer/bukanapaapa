import LoginForm from "../../../components/forms/LoginForm/LoginForm";
import Button from "../../../components/elements/Button";
import GoogleLogo from "../../../assets/icons/GoogleLogo.svg";
import SealLogo from "../../../assets/SEALogo.png";
import { Link } from "react-router-dom";
import { Card, CardBody } from "../../../components/elements/Card/Card";

const Login = () => {
  return (
    <div className="relative grid h-screen place-items-center bg-bgPrimaryDark">
      <Link to={"/"} className="absolute top-0 w-60">
        <img src={SealLogo} alt="" />
      </Link>
      <Card className="card-hoverable-no-skew w-full max-w-[480px] rounded-xl border bg-bgSecondaryBlack p-4 font-['Poppins'] sm:p-8">
        <CardBody>
          <div className="flex items-start justify-between self-stretch">
            <div className="text-center text-xl font-bold leading-[120%] text-textPrimaryDark">
              Login
            </div>

            <h1 className="text-sm text-textPrimaryDark">
              Belum punya akun?{" "}
              <Link to="/auth/register">
                <span className="underline">Daftar</span>
              </Link>
            </h1>
          </div>
          <div className="form flex flex-col items-center justify-center self-stretch">
            <LoginForm />
            <div className="divider">OR</div>
            <Button variant="secondary" className="w-full">
              <img src={GoogleLogo} className="size-6" alt="" /> Login with
              google
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
