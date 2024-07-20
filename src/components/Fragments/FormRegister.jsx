

import Inputform from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

const FormRegister = (props) => {

    return (
        <form action="">
           <Inputform
          children="nama"
          type="text"
          name="email"
          placeholder="Enter your name"
          />
        <Inputform
          children="Email"
          type="mail"
          name="email"
          placeholder="Email"
          />
          <Inputform
    
          children="Password"
          type="password"
          name="password"
          placeholder="Password"
          />

          <Inputform
    
          children="password"
          type="password"
          name="password"
          placeholder="Confirm Password"
          />
          <Button classname="bg-blue-500 w-full hover:bg-blue-200" textCl="text-white">
            Login
          </Button> </form>

    )
}

export default FormRegister;
