import RHome from './components/RouterComponent/RHome';

import Product from './components/RouterComponent/Product';

import NewsComponent from './components/RouterComponent/NewsComponent';

import NewDetail from './components/RouterComponent/NewDetail';

import ProductDetail from './components/RouterComponent/ProductDetail';

import PA from './components/RouterComponent/Pa';

import News from './components/RouterComponent/News';
import NewsOne from './components/RouterComponent/NewsOne';
import NewsTwo from './components/RouterComponent/NewsTwo';


const Routerc=[
    {
        path:'/',
        component:RHome,
        exact: true
    },
    {
        path:'/product',
        component:Product,
        routes:[
            {
                path:'/product/pa',
                component:PA,
                exact: true,
            },
            {
                path:'/product/procuctDetail',
                component:ProductDetail,
                exact: true,
            }
        ]

    },
    {
        path:'/newslist',
        component:NewsComponent,
        routes:[
            {
                path:'/newslist/:id',
                component:NewDetail,
                exact: true,
            }
            
        ]
    },
    {
        path: "/news",
        component: News,
        routes:[   /*嵌套路由*/
            {
              path: "/news",
              component: NewsOne
            },
            {
              path: "/news/newsTwo",
              component: NewsTwo
            }
          ]
      }
]

export default Routerc;