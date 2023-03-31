import HomeContainer from "../organisms/HomeContainer";
import HomeSide from "../organisms/HomeSide";

function HomeTemplate() {
    return (<>
        <section className="flex  h-[95vh]">
           <HomeSide />
           <HomeContainer/>
        </section>
        <footer className="bg-blue-300 h-[50px] text-white flex justify-center items-center "> <p> @all rights reserved</p></footer>
        </> );
}

export default HomeTemplate;