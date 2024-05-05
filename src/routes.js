import Admin from "./pages/Admin"
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PAY_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Main from "./pages/Main"
import Shop from "./pages/Shop"
import PayPage from "./pages/PayPage"
import Auth from "./pages/Auth"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PAY_ROUTE,
        Component: PayPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]