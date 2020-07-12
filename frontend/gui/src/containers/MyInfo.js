import React from "react"
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {connect} from 'react-redux'
import * as actions from '../store/actions/auth'

const { Header, Content } = Layout;

class MyInfo extends React.Component{
  render()  {
    console.log(this.props)
        return(
                <Layout className="layout">
                  <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                      {
                        this.props.isAuthenticated ?
                          <Menu.Item key="2" onClick={this.props.logout}>
                            Logout
                          </Menu.Item>:
                          <Menu.Item key="2">
                            <Link to="/login">
                              Login
                            </Link>
                          </Menu.Item>

                      }
                      <Menu.Item key="1"><Link to="/">Posts</Link></Menu.Item>
                    </Menu>
                  </Header>
                  <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                      <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">{this.props.children}</div>
                  </Content>
                </Layout>
          );
    }
}

const mapDispatchToProps = dispatch => {
  return {
      logout : () => dispatch(actions.logout())
  }
}

export default connect(null,mapDispatchToProps)(MyInfo)
