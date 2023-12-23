import { Pages } from "../../classes/pages";

interface NavbarTabProps {
  currentPage: Pages;
  page: Pages;
  setPage: (page: Pages) => void;
}

function NavbarTab({ currentPage, page, setPage }: NavbarTabProps) {

  function handleClick() {
    setPage(page);
  }

  return (
    <button
      className={`bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium transition-all hover:bg-gray-700 ${currentPage === page ? "scale-100" : "scale-90"}`}
      aria-current="page"
      onClick={handleClick}
    >
      {page}
    </button>
  );
}

export default NavbarTab;
