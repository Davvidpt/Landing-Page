import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister></FormRegister>
    </AuthLayouts>
  );
};

export default RegisterPage;