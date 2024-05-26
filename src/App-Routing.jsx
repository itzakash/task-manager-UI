import { Route, Routes } from "react-router-dom";

import Header from "./components/shared/Header";
import Auth from "./components/auth/Auth";
import Footer from "./components/shared/Footer";
import { useSelector } from "react-redux";
import Home from "./components/pages/Home";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PageNotFound } from "./components/pages/PageNotFound";

export default function AppRouting() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated && <Header />}

      <Routes>
        <Route path="/login" element={<Auth />}>
          {" "}
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );
}
