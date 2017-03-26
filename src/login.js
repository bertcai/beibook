/**
 * Created by Administrator on 2017/3/23.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import "./login.css"

class Login extends Component{
    state = {
        flag: 1,
        nick_name: 'test',
    };
    render(){
        if(this.state.flag){
            return (
                <div className="login">
                    <a href="###">
                        {this.state.nick_name}
                    </a>
                </div>
            );
        }else{
            return(
                <a href="###">
                    <Button type="Primary">
                        登陆
                    </Button>
                </a>
            );
        }
    }
}

export default Login;
