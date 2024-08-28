import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

import useUser from "../../services/queries/useUser"

const RequireAuth = ({ children }: { children: ReactElement }) => {

    const { data, isLoading } = useUser();

    console.log({ data, isLoading })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return <Navigate to="/admin/login" replace />;
    }

    return children
}

export default RequireAuth;