import { Navigate, Outlet, useLocation } from "react-router-dom";
export default function AuthRequired() {
  const auth = false;
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname, message: "You must log in first" }}
        replace
      />
    );
  }
  return <Outlet />;
}
