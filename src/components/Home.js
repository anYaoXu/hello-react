import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            age: props.user.age,
            name: props.user.name,
            hobbies: props.user.hobbies
        }
    }

    /**
     * 生命周期函数知识备忘
        * 加载时候：
            * constructor     
            * componentWillMount  组件将要挂载的时候触发的生命周期函数
            * render  
            * componentWillMount  组件挂在完成时候触发的生命周期函数
        * 更新的时候
            * componentWillUpdate
            * render
            * componentDidUpdate
        * 销毁的时候
            * componentWillUnmount
     *  */
    
    onChangeOlder(){
        this.setState((state)=>({
            age: state.age +3
        }))
        // this.setState({
        //     age: this.state.age +3
        // })
        this.props.onAgeChangeEvent(this.state.age);
    }

    onChangeName(event){
        this.setState({
            name:event.target.value
        })
    }
    onHandelChangeName = ()=>{
        this.props.onNameChangeEvent(this.state.name);
    }

    onHandleHobby = (i)=>{    
        const hobbies = this.state.hobbies;
        hobbies[i].checked = !hobbies[i].checked;
        this.setState({
            hobbies: hobbies
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <p>name is {this.state.name}, age is {this.state.age}</p>
                    <p>message is {this.props.other}</p>
                    <span>hobbies message is</span>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby.value}</li>)}
                    </ul>
                    <ul>
                        {this.state.hobbies.map((hobby,i)=>{
                            return (
                                <span key={i}>
                                    <input type="checkbox" onChange={this.onHandleHobby.bind(this,i)} checked={hobby.checked} />
                                    {hobby.value}
                                </span>
                            )
                        })} 
                    </ul>
                    <p>    
                        <button className="btn btn-primary" onClick={()=>{this.onChangeOlder()}}>change age</button>
                    </p>
                    <p>
                        <input type="text" value={this.state.name} onChange={(event) => this.onChangeName(event)}/>
                        <button className="btn btn-primary" onClick={this.onHandelChangeName}>提交修改</button>
                    </p>
                </div>
            </div>
        )
    }
   
}
Home.propTypes={
    user:PropTypes.object,
    other: PropTypes.string,
    children: PropTypes.element.isRequired,
    onAgeChangeEvent: PropTypes.func,
    onNameChangeEvent: PropTypes.func
}
