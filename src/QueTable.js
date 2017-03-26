/**
 * Created by Administrator on 2017/3/23.
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import QueItem from './QueItem';
import "./Que.css"

class QueTable extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={5}></Col>
                    <Col span={14} className="page">
                        <div>
                            <p className="table-banner">专属于扇贝的贝手册</p>
                        </div>
                        <QueItem/>
                    </Col>
                    <Col span={5}></Col>
                </Row>
            </div>
        );
    }
}

export default QueTable;