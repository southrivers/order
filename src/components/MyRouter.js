import React from "react";
// 这里必须要导入min.css，否则会有大量的warning
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home";
import Order from "../pages/Order";
import OrderR from "../pages/OrderR";
import OrderNotR from "../pages/OrderNotR";
import { v4 } from 'uuid'
import MyUpload from "../pages/Upload";


const { Header, Content } = Layout;

const App = () => {
  // antd的菜单必须为数组
  return (
    <div>
      <Router>
        <Layout className="layout">
          <Header>
            {/* 样式的控制放在menu这里会比较好 */}
            <Menu theme="dark" mode="horizontal">
              {/* menuitem内部放置link，并且要设置对应的key唯一，这样在选择的时候才会有所区分 */}
              <Menu.Item key={v4()}>
                <Link index to="/">
                  报表明细
                </Link>
              </Menu.Item>
              <Menu.Item key={v4()}>
                <Link to="/order">订货清单</Link>
              </Menu.Item>
              <Menu.Item key={v4()}>
                <Link to="/income">损益明细</Link>
              </Menu.Item>
              <Menu.Item key={v4()}>
                <Link to="/stock">存量订未收</Link>
              </Menu.Item>
              <Menu.Item key={v4()}>
                <Link to="/upload">上传文件</Link>
              </Menu.Item>
            </Menu>

            {/* <Menu theme="dark" mode="horizontal" items={items} /> */}
          </Header>
          <Content className="content">
            <div className="site-layout-content">
              <Routes>
                {/* route在指定路由的时候需要在element中用<>括起来，这区别于之前版本的Route，那时使用的component不需要括起来 */}
                <Route path="/" element={<Home/>}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/income" element={<OrderR/>}></Route>
                <Route path="/stock" element={<OrderNotR/>}></Route>
                <Route path="/upload" element={<MyUpload/>}></Route>
              </Routes>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
