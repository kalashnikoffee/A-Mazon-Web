import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Link, Icon, Switch } from 'antd';

const { SubMenu } = Menu;

class SideNav extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light'
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline'
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  };

  render() {
    return (
      <div>
        <Switch onChange={this.changeMode} /> Change Mode
        <span className='ant-divider' style={{ margin: '0 1em' }} />
        <Switch onChange={this.changeTheme} /> Change Theme
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key='1'>
            <Icon type='mail' />
            Product
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='calendar' />
            Navigation Two
          </Menu.Item>
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='appstore' />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key='3'>Option 3</Menu.Item>
            <Menu.Item key='4'>Option 4</Menu.Item>
            <SubMenu key='sub1-2' title='Submenu'>
              <Menu.Item key='5'>Option 5</Menu.Item>
              <Menu.Item key='6'>Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='setting' />
                <span>Navigation Four</span>
              </span>
            }
          >
            <Menu.Item key='7'>Option 7</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(SideNav);