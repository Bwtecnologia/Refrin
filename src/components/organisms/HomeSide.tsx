import HomeNav from "../molecules/Homenav";
import HomeLogo from "../molecules/LogoHome";

function HomeSide() {
    return (
    <div className="bg-white h-[100%] flex w-[15%]  flex-col ">
     <HomeLogo/>
     <HomeNav source={"icon/orcamento.png"} text="orçamento"/>
     <HomeNav source={"icon/vendedor.png"} text="vendedores"/>
     <HomeNav source={"icon/producao.png"} text="pcp"/>
    </div> 
     );
}

export default HomeSide;