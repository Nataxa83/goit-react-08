import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute/PrivateRoute"));
const RestrictedRoute = lazy(() => import("./components/RestrictedRoute/RestrictedRoute"));

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
   
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
            <Route path ="/login" element={<RestrictedRoute component={<LoginPage />} />} />
            <Route path ="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
 