import { FC } from "react";
import { LayoutProps, storeI } from "./types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<LayoutProps> = ({ children }) => {
    const authstore = useSelector((store: storeI): { isAuth: boolean; token: string; } => ({ isAuth: store.authReducer.isAuth, token: store.authReducer.token }));
    return (
        authstore.isAuth ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute
