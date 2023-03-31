
import TextBox from "../molecules/TextBox";
import Image from "../atoms/imagen";

function UnauthorizedContainer() {
    return (
    <div>
            <section className="flex justify-center items-center" >
                <Image source="/images/error.webp" style="" />
                <TextBox/>   
            </section>
    </div> )
    ;
}

export default UnauthorizedContainer;