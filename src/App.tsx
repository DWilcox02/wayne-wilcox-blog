import PageContainer from "./components/pages/PageContainer";
import Navbar from "./components/navbar/Navbar";
import { Pages } from "./classes/pages";
import { useState } from "react";

function App() {
  const beachImage = "./images/beach_4.jpg";
  const [page, setPage] = useState(Pages.ABOUT);

  return (
    <>
      <div
        className="flex flex-col text-black text-center  justify-center align-middle h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${beachImage})` }}
      >
        <Navbar setPage={setPage} currentPage={page}></Navbar>
        <PageContainer page={page}></PageContainer>
      </div>
    </>
  );
}

export default App;
