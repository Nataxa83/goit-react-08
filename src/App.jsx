
import css from "./App.module.css";

import Homepage from "./pages/Homepage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </>
  );
}
