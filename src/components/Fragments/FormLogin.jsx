import Inputform from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import Label from "../Elements/Input/Label";

const FormLogin = (props) => {
  return (
    <form action="">
      <Label name="email">Email</Label>
      <Inputform
        children="Email"
        type="mail"
        name="email"
        placeholder="Email"
      />
      <Label name="password">Password</Label>
      <Inputform
        children="Password"
        type="password"
        name="password"
        placeholder="password"
      />
      <Button classname="bg-blue-500 w-full hover:bg-blue-200 transition duration-300 " textCl="text-white">
        Login
      </Button>{" "}
    </form>
  );
};
export default FormLogin