import Image from "../atoms/imagen";

function HomeLogo() {
    return ( 
    <div className="p-[1rem] flex justify-center">
    <Image style="w-[200px] h-[80px] mt-[2rem] max-xl:w-[100px] max-xl:h-[50px] " source="/images/logo-refrin.png"  />
    </div> );
}

export default HomeLogo;