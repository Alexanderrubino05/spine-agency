import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from "react-router-dom";
import OverallDiv from "./Components/OverallDiv.jsx";
import ProjectPage from "./HomePage/Sections/ProjectsPages/ProjectPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route index element={<OverallDiv />} />
      <Route path="basketball-website" element={<ProjectPage />}/>
      <Route path="bc-copenhagen-app" element={<ProjectPage />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
