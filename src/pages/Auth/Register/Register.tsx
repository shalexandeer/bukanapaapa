import { Link } from "react-router-dom";
import { Card, CardBody } from "../../../components/elements/Card/Card";
import Button from "../../../components/elements/Button";
import GoogleLogo from "../../../assets/icons/GoogleLogo.svg";
import SealLogo from "../../../assets/SEALogo.png";
import RegisterForm from "../../../components/forms/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="relative grid h-screen place-items-center bg-bgPrimaryDark">
      <Link to={"/"} className="absolute top-0 w-60">
        <img src={SealLogo} alt="" />
      </Link>
      <Card className="card-hoverable-no-skew w-full max-w-[480px] rounded-xl border bg-bgSecondaryBlack p-4 font-['Poppins'] sm:p-8">
        <CardBody>
          <div className="flex flex-col items-start justify-between self-stretch max-md:space-y-4 md:flex-row">
            <div className="text-center text-xl font-bold leading-[120%] text-[#c0c6d6]">
              Register
            </div>

            <h1 className="text-sm text-textPrimaryDark">
              Sudah punya akun?{" "}
              <Link to="/auth/login">
                <span className="underline">Login</span>
              </Link>
            </h1>
          </div>
          <div className="form flex flex-col items-center justify-center self-stretch">
            <RegisterForm />
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

export default Register;
