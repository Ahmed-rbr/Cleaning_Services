import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { lazy, Suspense } from "react";
import RouterLoyout from "./layouts/RouterLoyout";
import ServicesLayout from "./layouts/ServicesLayout";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./components/NotFound"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLoyout />}>
        <Route
          index
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <About />
            </Suspense>
          }
        />

        <Route
          path="privacy"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="terms"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <Terms />
            </Suspense>
          }
        />
        <Route path="service" element={<ServicesLayout />}>
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <ClipLoader color="#36d7b7" size={50} />
                  </div>
                }
              >
                <Services />
              </Suspense>
            }
          />
          <Route
            path=":name"
            element={
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen">
                    <ClipLoader color="#36d7b7" size={50} />
                  </div>
                }
              >
                <ServiceDetails />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="contact"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <ClipLoader color="#36d7b7" size={50} />
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
};

export default App;
