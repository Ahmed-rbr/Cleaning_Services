import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RouterLoyout from "./layouts/RouterLoyout";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ServicesLayout from "./layouts/ServicesLayout";
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLoyout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<ServicesLayout />}>
          <Route index element={<Services />} />
          <Route path=":name" element={<ServiceDetails />} />
        </Route>
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
};

export default App;
