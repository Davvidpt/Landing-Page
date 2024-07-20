const Label = (props) => {
    const {name,children} = props;
    return (
        <label htmlFor={name} className="block text-slate-500 text-sm font-medium mb-2">
                {children}
       </label>
    );
};

export default Label;