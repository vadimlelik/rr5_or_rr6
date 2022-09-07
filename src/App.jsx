import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./layouts/AuthLayout";
import PostsLayout from "./layouts/PostsLayout";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar/NavBar";
import withRedux from "./hoc/withRedux";
import withRouter from "./hoc/withRouter";
import "react-toastify/dist/ReactToastify.css";
import PostsListPage from "./pages/Posts/PostsListPage";
import PostPage from "./pages/Posts/PostPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SigupPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col">
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path={"login"} element={<LoginPage />} />
          <Route path={"signup"} element={<SignUpPage />} />
        </Route>
        <Route path="posts" element={<PostsLayout />}>
          <Route index element={<PostsListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        {/* <Redirect from="*" to="/" /> */}
      </Routes>

      <ToastContainer />
    </div>
  );
}
const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
