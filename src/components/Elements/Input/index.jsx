import Input from "./Input";
import Label from "./Label";

const Inputform = (props) => {
    const {name,type,placeholder, label} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default Inputform ;