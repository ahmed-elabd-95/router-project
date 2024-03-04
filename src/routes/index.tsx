import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<h3>Home page</h3>} />
        <Route path="/contact" element={<h3>Contact page</h3>} />
        </>
    ));

    export default router