import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../src/assets/css/App.css';

import Header from './components/Header';
import Home from './components/Home';

import Calculator from './components/Calculator';

// import RHome from './components/RouterComponent/RHome';

// import Product from './components/RouterComponent/Product';

// import NewsComponent from './components/RouterComponent/NewsComponent';

// import NewDetail from './components/RouterComponent/NewDetail';

import ProductDetail from './components/RouterComponent/ProductDetail';

import Login from './components/RouterComponent/Login';

import Routerc from './router';


class App extends Component{
  constructor(){
    super();
    this.state ={
      name: ''
    }
  }
  
  onAgeChange(age) {
    this.user.age = age;
    console.log(this.user.age);
  }

  onNameChange(name){
    this.setState({
      name: name
    })

  }
  render() {
    const user={
      name:'张三',
      age:18,
      hobbies:[{
        value:'吃饭',
        checked: false
      },
      {
        value:'睡觉',
        checked: false
      },
      {
        value:'打豆豆',
        checked: true
      }
    ]
    };
    return (
      <div className="container">

        <div className="row">
            <Login></Login>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Header name={this.state.name}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            Main container
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <Home user={user} other={"otherMessage"} onAgeChangeEvent={this.onAgeChange} onNameChangeEvent={(name)=>this.onNameChange(name)}>
              <p>I am child</p>
              </Home>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Calculator />
          </div>
        </div>
        
        <div className="row">
        <div className="col-md-12">
            <br/>
            <hr/>
            <br/>
            <h1>配置路由 & 路由传值</h1>
            <br/>
            
            <Router>
                <div className="header-roter">
                  <Link to="/">首页</Link>
                  <Link to="/news">新闻</Link>
                  <Link to="/product">产品</Link>              
                </div>
                {/* <Route exact path="/" component={RHome} />
                <Route exact path="/news" component={NewsComponent} />
                <Route path="/product" component={Product} />
                <Route path="/news/:id" component={NewDetail} />
                <Route path="/procuctDetail" component={ProductDetail} /> */}
                

                {
                  Routerc.map((route,key)=>{
                    if(route.exact){
                      return (
                        <Route
                        key={key}
                        exact
                          path={route.path}
                          render={props => (
                            <route.component {...props} routes={route.routes} />
                          )}
                        />
                      )
                    }else{
                      return (
                      <Route key={key} path={route.path}
                        render={props=>(
                          <route.component {...props} routes={route.routes}/>
                        )}
                        />
                        )

                    }
                  })
                }


              </Router>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
