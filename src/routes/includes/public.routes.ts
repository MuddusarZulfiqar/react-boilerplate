import PublicLayout from '@/layouts/Public.layout'
import { lazyWithSuspense } from '@/utils/lazyWithSuspense'
const Home = lazyWithSuspense(() => import('@/pages/Home'))
const publicRoute = {
    path: "/",
    Component: PublicLayout,
    children:[
        {
            index: true,
            Component: Home
        }
    ]

}

export default publicRoute
