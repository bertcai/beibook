
import React, { Component } from 'react';
import {Input, Button, Form} from 'antd';

class Searchout extends Component {
    render(){
        return (
            <Form layout="inline">
                <Form.Item>
                    <Input
                        placeholder="请输入要搜索的问题"
                        style={{ width:400 }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" icon="search" htmlType="submit">Search</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Searchout;
