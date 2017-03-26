/**
 * Created by Administrator on 2017/3/23.
 */
import React, { Component } from 'react';
import "./Que.css"

class QueItem extends Component{
    state = {
        Question: 'Test Question？',
        Answer: 'Test Answer.',
        Date: '2017/3/23',
        Vote: '0',
        Comment:'0',
    };
    render(){
        return(
            <div className="item">
                <div className="que">
                    <h3>
                        <a href="###">Que: {this.state.Question}</a>
                    </h3>
                </div>
                <div className="date">
                    <span>{this.state.Date}</span>
                </div>
                <div className="ans">
                    <p>{this.state.Answer}</p>
                </div>
                <div className="v-c">
                    <div className="ico">
                        <img src="https://static.baydn.com/static//img/icon-favor.png"></img>
                        <span>{this.state.Vote}</span>
                    </div>
                    <div className="ico">
                        <img src="https://static.baydn.com/static//img/icon-comment.png"></img>
                        <span>{this.state.Comment}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default QueItem;