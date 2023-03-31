import Icon from "../atoms/Icon";
import InputText from "../atoms/InputText";

function HomeNav({source,text}: any ) {
    return (
    <div className="flex items-center ml-[1rem] gap-[1rem] mt-[1rem]">
     <Icon source={source}/>
     <InputText text={text} styleText="text-[25px] font-semibold text-gray-600 pt-[1rem] pb-[1rem] max-xl:text-[15px] " />
    </div>  
    );
}

export default HomeNav;