import React from 'react';
import { Button } from 'antd';
import  Todo  from './../../components/Todolist/Todolist.connect';


export interface IProps {
  isPinging: boolean
  ping: () => void
  form : any
}


class Index extends React.Component<IProps , {} > {
  constructor(props: IProps) {
    super(props)
    this.state =  {}
  }
  public render () {
    const { isPinging, ping } = this.props
    return (
      <div>
        <h1 className="title-h1">isPinging: {isPinging.toString()}</h1>
        <Button onClick={ping}>start ping</Button>
        <Todo />
      </div>
    )
  }
}


export default Index;
