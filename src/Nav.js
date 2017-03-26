/**
 * Created by Bert_Cai on 2017/3/20.
 */

import React, { Component } from 'react';
import { Menu, Row, Col, Button } from 'antd';
import './Nav.css';
import Searchout from './Serch';
import Login from  './login';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    render(){
        return(
            <div className="nav">
                <Row>
                    <Col span={3}>
                    </Col>
                    <Col span={5}>
                        <Menu mode="horizontal">
                            <Menu.Item>首页</Menu.Item>
                            <Menu.Item>O.O</Menu.Item>
                            <Menu.Item>O.O</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={10}>
                        <div>
                            <div className="nav nav-unit">
                                <Searchout/>
                            </div>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div>
                            <div className="nav nav-unit">
                                <Login/>
                            </div>
                        </div>
                    </Col>
                    <Col span={3}>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Nav;


