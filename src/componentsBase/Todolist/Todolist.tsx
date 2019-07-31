import React, { memo, useEffect } from 'react';//useState
import { Button, Input, List, Form, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

interface ListItem {
    id : string
    text : string
    complete : boolean
}

interface CreateNoticeModalProps extends FormComponentProps {

}

interface IProps extends FormComponentProps{
  toDoList: Array<ListItem>
  addTodoListItem : (text:string)=>any
  fetchTodoList:()=>void
}

interface TypeOfPageFC extends IProps {

}

const Todolist:React.SFC<TypeOfPageFC> = ({toDoList, addTodoListItem,fetchTodoList, form}:IProps) => {

    const { getFieldDecorator, validateFields } = form;
    useEffect(()=>{
        fetchTodoList()
        return () => {
            //清理函数 在下次调用时执行
            console.log('cleaning up..')
            console.log('conponent did update..')
        }
    },[]); // componentDidMount
    useEffect(()=>{
        return()=>{
            console.log('conponent did unmount..')
        }
    },[])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values)
                addTodoListItem(values.text)
                // dispatch({
                //   type: 'BLOCK_NAME_CAMEL_CASE/submitRegularForm',
                //   payload: values,
                // });
            }
        });
    };
    return(
        <div>
            <h1>Todo</h1>
            <Form layout="inline" onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('text', {
                    rules: [{ required: true, message: 'Please input text!' }],
                    })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="todo text content"
                    />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        submit
                    </Button>
                    <Button type="primary" onClick={()=>fetchTodoList()}>fetch todolist</Button>
                </Form.Item>
            </Form>
            <List
                  bordered
                  dataSource={toDoList}
                  renderItem={item => (
                    <List.Item>
                        {item.text}
                    </List.Item>
                  )}
                />
        </div>
    )
}

export default memo(
    Form.create<CreateNoticeModalProps>({})(Todolist),
    (prevProps,nextProps) => {
        // console.log('shouldCompnentUpdate...');
        return false;
    }
)
