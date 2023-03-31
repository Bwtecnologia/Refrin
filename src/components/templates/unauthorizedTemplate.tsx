import UnauthorizedContainer from "../organisms/unauthorizedCont";

function UnauthorizedTemplate() {
  return (
    <>
      <section className="h-[95vh]">
        <UnauthorizedContainer />
      </section>
      <footer className="bg-blue-300 h-[50px] text-white flex justify-center items-center ">
        <p> @all rights reserved</p>
      </footer>
    </>
  );
}

export default UnauthorizedTemplate;
