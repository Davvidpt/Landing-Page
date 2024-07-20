
const Button = (props) => {
    const { children = "..", classname = "bg-slate-700", textCl ,ButtonTailwind = "h-10 px-6 font-semibold rounded-md"} = props;
    return (
      <button
        className={`${ButtonTailwind} ${classname} ${textCl}`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  