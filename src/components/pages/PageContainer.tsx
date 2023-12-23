import AboutPage from "./AboutPage";
import { Pages } from "../../classes/pages";

interface PageContainerProps {
  page: Pages;
}

function PageContainer({page}: PageContainerProps) {

  return (
    <div className="w-full overflow-y-auto pt-16">
      <div className="m-3 bg-white bg-opacity-50 rounded-md">
        {(page == Pages.BLOG) &&
          <p>blog</p>
        }
        {(page == Pages.CONTACT) &&
          <p>contact</p>
        }
        {(page == Pages.ABOUT) &&
          <AboutPage></AboutPage>
        }
      </div>
    </div>
  );
}

export default PageContainer;
