import InputText from "../atoms/InputText";
import TitleText from "../atoms/titleText";

function TextBox() {
    return ( 
        <div> 
           <TitleText text="404" styleText="text-[150px] font-bold text-gray-600 " />
            <InputText text="você nao esta autorizado para acessar esta pagina" styleText=" text-[20px] text-gray-600"  />
            <InputText text="faça login para continuar" styleText="text-[20px] text-gray-600"  />
            <button className="border mt-5 p-[1rem] rounded-[10px] border-blue-300 font-semibold  text-gray-600 ">voltar para o login</button>
        </div>
     );
}

export default TextBox;