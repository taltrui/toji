import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import Invitation from "../pages/Invitation";
import Invitations from "../pages/Admin/pages/Invitations";
import Login from "../pages/Admin/pages/Login";
import RequireAuth from "../components/RequireAuth";
import Dashboard from "../pages/Admin/pages/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Invitation />}
            />
            <Route path="/admin" element={<RequireAuth><Dashboard /></RequireAuth>}>
                <Route path="invitations" element={<Invitations />} />
                <Route path="invitees" element={<div>Invitees</div>} />
            </Route>
            <Route path="/admin/login" element={<Login />} />
        </>
    )
);

export default router