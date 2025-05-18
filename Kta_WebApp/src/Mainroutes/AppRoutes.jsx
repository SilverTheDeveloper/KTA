import AboutPage from "@/Pages/AboutPage/AboutPage";
import CareersPage from "@/Pages/CareersPage/CareersPage";
import CalculatorPage from "@/Pages/CalculatorPage/CalculatorPage";

import Products from "@/Pages/Products/Products";
import Downloads from "@/Pages/DownloadPage/Downloads";
import ContactPage from "@/Pages/ContactPage/ContactPage";
import BlogPage from "@/Pages/BlogPage/BlogPage";
import LandingPage from "@/Pages/LandingPage/LandingPage";

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
  },
];
