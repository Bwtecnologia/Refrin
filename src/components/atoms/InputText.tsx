 interface PropsType {
 text:string,
 styleText: string
 }


 const InputText = ({text,styleText }:PropsType) =>{
      
return <p className={styleText} >{text}</p>
}


export default InputText