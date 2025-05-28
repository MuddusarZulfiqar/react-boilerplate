import PublicLayout from '@/layouts/Public.layout';
import { lazyWithSuspense } from '@/utils';
const Home = lazyWithSuspense(() => import('@/pages/Home'));
const About = lazyWithSuspense(() => import('@/pages/About'));
const PageNotFound = lazyWithSuspense(() => import('@/pages/error/PageNotFound'));
const publicRoute = {
    path: "/",
    Component: PublicLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'about',
            Component: About
        },
        {
            path: '*',
            Component: PageNotFound
        }
    ]
};
export default publicRoute;
