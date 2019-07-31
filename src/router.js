import RHome from './components/RouterComponent/RHome';

import Product from './components/RouterComponent/Product';

import NewsComponent from './components/RouterComponent/NewsComponent';

import NewDetail from './components/RouterComponent/NewDetail';

import ProductDetail from './components/RouterComponent/ProductDetail';

const Routerc=[
    {
        path:'/',
        component:RHome,
        exact: true
    },
    {
        path:'/product',
        component:Product,
        exact: false,
        routes:[
            {
                path:'/procuctDetail',
                component:ProductDetail,
                exact: true,
            }
        ]

    },
    {
        path:'/news',
        component:NewsComponent,
        exact: true,
        routes:[
            {
                path:'/news/:id',
                component:NewDetail,
                exact: true,
            }
            
        ]
    }
]

export default Routerc;