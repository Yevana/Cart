import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const ShopLayout = lazy(() => import('./components/Shop/index'));
const ShopHome = lazy(() => import('./components/Shop/partials/ShopHome'));
const Cart = lazy(() => import('./components/Shop/partials/Cart'));
const Checkout = lazy(() => import('./components/Shop/partials/Checkout'));
const Purchase = lazy(() => import('./components/Shop/partials/Purchase'));
const Terms = lazy(() => import('./components/pages/Termscondition'));
const NoFound = lazy(() => import('./components/NotFound'));

const routes = [
    { path: '/', element: Home }, // Default route or landing page
    { path: '/about', element: About },
    { path: '/contact', element: Contact },
    { path: '/terms', element: Terms },
    { path: '*', element: NoFound },
    { 
      path: '/shop', 
      element: ShopLayout,
      children: [
        { path: '', element: ShopHome }, // Index route for Shop
        { path: 'cart', element: Cart },
        { path: 'cart/checkout', element: Checkout },
        { path: 'cart/purchase', element: Purchase }
      ]
    }
];

export default routes;