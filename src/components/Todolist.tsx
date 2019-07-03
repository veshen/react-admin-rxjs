import React, { FunctionComponent, memo, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { addTodoListItem, fetchTodoList } from '../store/actions';
import { Button, Input } from 'antd';
// const styles = require('./App.css')
// componentDidMount ===> useEffect(()=>{},[])

interface ListItem {
    id : string
    text : string
    complete : boolean
}
interface TypeOfState {
  toDoList: [ListItem]
  addTodoListItem : (text:string)=>any
  fetchTodoList:()=>void
}
interface TypeOfPageFC extends TypeOfState {

}

const Page:FunctionComponent<TypeOfPageFC> = ({toDoList, addTodoListItem,fetchTodoList}:TypeOfState) => {
    const [ text, setText ] = useState("");
    useEffect(()=>{
        console.log('works')
        fetchTodoList()
        return () => {
            //清理函数 在下次调用时执行
            console.log('cleaning up..')
            console.log('conponent did update..')
        }
    },[])
    // useEffect(()=>{
    //     return()=>{
    //         console.log('conponent did unmount..')
    //     }
    // },[])
    return(
        <div>
            <h1>Todo</h1>
            <div>
                <Input type="text"  onChange={ e => setText(e.target.value)  }/>
                <Button onClick={()=>addTodoListItem(text)}>Add</Button>
                <Button onClick={()=>fetchTodoList()}>fetch todolist</Button>
            </div>
            <ul>
                {
                    toDoList.map((item,index)=><li key={index}>{item.text}</li>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state : {toDoList : [ListItem]}) => state;
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addTodoListItem : (text:any) => dispatch(addTodoListItem(text)),
        fetchTodoList : () => dispatch(fetchTodoList()),
    }
};
export default connect(
    mapStateToProps,
  mapDispatchToProps
)(
    memo(
        Page,
        (prevProps,nextProps) => {
            console.log('shouldCompnentUpdate...')
            return false;
        }
    )
)
