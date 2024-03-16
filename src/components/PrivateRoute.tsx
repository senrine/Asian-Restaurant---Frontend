import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function PrivateRoute() {
  const auth = useSelector((state: RootState) => state.auth);
  return auth.userInfo ? <Outlet/> : <Navigate to={"/signup"} replace/>
}
