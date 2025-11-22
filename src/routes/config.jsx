import { lazy } from 'react';

// Usuario
const Home = lazy(() => import('../pages/user/Home'));
const Products = lazy(() => import('../pages/user/Products'));
const ProductDetail = lazy(() => import('../pages/user/ProductDetail'));
const Cart = lazy(() => import('../pages/user/Cart'));
const Comunas = lazy(() => import('../pages/user/Comunas'));
const Contact = lazy(() => import('../pages/user/Contact'));
const About = lazy(() => import('../pages/user/About'));
const Profile = lazy(() => import('../pages/user/Profile'));

// Auth
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

/* Admin
const HomeAdmin = lazy(() => import('../pages/admin/HomeAdmin'));
const HomeUsuarios = lazy(() => import('../pages/admin/Usuarios/HomeUsuarios'));
const HomeProductos = lazy(() => import('../pages/admin/Productos/HomeProductos'));
const HomeVentas = lazy(() => import('../pages/admin/Ventas/HomeVentas'));
const HomeComunas = lazy(() => import('../pages/admin/Comunas/HomeComunas'));
const HomeFacciones = lazy(() => import('../pages/admin/Facciones/HomeFacciones'));

*/

// Rutas públicas/usuario
const publicRoutes = [
    { path: '/', element: <Home />, showNavbar: true },
    { path: '/products', element: <Products />, showNavbar: true },
    { path: '/product/:id', element: <ProductDetail />, showNavbar: true },
    { path: '/cart', element: <Cart />, showNavbar: true },
    { path: '/comunas', element: <Comunas />, showNavbar: true },
    { path: '/contact', element: <Contact />, showNavbar: true },
    { path: '/about', element: <About />, showNavbar: true },
    { path: '/login', element: <Login />, showNavbar: true },
    { path: '/register', element: <Register />, showNavbar: true },
    { path: '/profile', element: <Profile />, showNavbar: true },
];

/* Rutas admin
const adminRoutes = [
    { path: '/admin/dashboard', element: <HomeAdmin />, isAdmin: true },
    { path: '/admin/usuarios', element: <HomeUsuarios />, isAdmin: true },
    { path: '/admin/productos', element: <HomeProductos />, isAdmin: true },
    { path: '/admin/ventas', element: <HomeVentas />, isAdmin: true },
    { path: '/admin/comunas', element: <HomeComunas />, isAdmin: true },
    { path: '/admin/facciones', element: <HomeFacciones />, isAdmin: true },
];
*/

// Ruta 404
const notFoundRoute = {
    path: '*',
    element: <div className="text-center py-10 text-2xl">404 - Página no encontrada</div>,
    showNavbar: false,
};

// Exportar todas las rutas
export const appRoutes = [...publicRoutes/* , ...adminRoutes */, notFoundRoute];

