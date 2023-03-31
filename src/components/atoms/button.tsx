interface UserType{ 
    user:string;
    password:string
  }



const Button = ({fcButton}:any) => {

    return (
    <button  onClick={fcButton} className="font-semibold text-[20px]   bg-blue-300 rounded-[10px] h-[60px] w-[100%] text-white lg:h-[30px] ">entrar</button>
    ) ;
    

}

export default Button;

