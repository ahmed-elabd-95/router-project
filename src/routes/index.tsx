import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import RootLayout from "../pages/Layout";
import QuickStartPage from "../pages/Learn/";
import Layout from "../pages/Learn/Layout";
import ThinkingInReact from "../pages/Learn/ThinkingInReact";
import Installation from "../pages/Learn/Installation";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../comonents/auth/ProtectedRoute";
import ErrorHundler from "../comonents/errors/ErrorHundler";
import PageNotFound from "../pages/PageNotFound";


const isLoggedIn = true
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage />} errorElement={<ErrorHundler /> }/>
        <Route path="contact" element={<ContactPage />} errorElement={<ErrorHundler /> }/>
        <Route path="about" element={<AboutPage />} errorElement={<ErrorHundler /> }/>
        <Route path="contribute" element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
            <ContributePage />
          </ProtectedRoute>
        } errorElement={<ErrorHundler /> }/>
        <Route path="login" element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
            <LoginPage />
          </ProtectedRoute>
        } errorElement={<ErrorHundler /> }/>
      </Route>
      {/* learn Layout */}
      <Route path="/learn" element={<Layout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound/>} />
    </>
  )
);

export default router;
