import CareersPage from "@/Pages/CareersPage/CareersPage";
import CalculatorPage from "@/Pages/CalculatorPage/CalculatorPage";

import Products from "@/Pages/Products/Products";
import Downloads from "@/Pages/DownloadPage/Downloads";
import ContactPage from "@/Pages/ContactPage/ContactPage";
import BlogPage from "@/Pages/BlogPage/BlogPage";
import LandingPage from "@/Pages/LandingPage/LandingPage";
import AboutPage from "@/Pages/AboutPage/AboutPage";
import ProductWindow from "@/Pages/Products/ProductWindow";
import BlockJointMortarCalculator from "@/Pages/CalculatorPage/BlockJointMortarCalculator/BlockJointMortarCalculator";
import JointFillerCalculator from "@/Pages/CalculatorPage/JointFillerCalculator/JointFillerCalculator";
import Terms from "@/Components/FooterLinks/Terms";
import Policy from "@/Components/FooterLinks/Policy";

export const appRoutes = [
  {
    path: "landingPage",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "product/:id",
    element: <ProductWindow />,
  },
  {
    path: "careers",
    element: <CareersPage />,
  },
  {
    path: "calculator",
    element: <CalculatorPage />,
  },
  {
    path: "downloads",
    element: <Downloads />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "blogs",
    element: <BlogPage />,
  },{
    path: "cal",
    element: <JointFillerCalculator/>
  },{
    path: "terms&conditions",
    element:<Terms/>
  },{
    path:"privacyPolicy",
    element:<Policy/>
  }
];
