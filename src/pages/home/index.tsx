import React from 'react';
import {connect} from 'react-redux';
import {ping} from '../../store/actions'
import { Button, Form } from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import  Todo  from './../../components/Todolist';
// const styles = require('./App.css')

// let App = ({isPinging, ping}) => (<div>
//     <h1 styleName="title-h1">isPinging:{isPinging.toString()}</h1>
//     <button onClick={ping}>start ping</button>
// </div>)



// const App = ({ isPinging, ping }: IProps) => {
//   return (
//     <div>
//       <h1 styleName="title-h1">isPinging: {isPinging.toString()}</h1>
//       <button onClick={ping}>start ping</button>
//     </div>
//   )
// }
interface TypeOfState {
    isPinging: boolean
}
interface TypeOfDispatch {
    ping: () => void
}
const mapStateToProps = (state:TypeOfState) => ({
    isPinging : state.isPinging
});

//将action的方法绑定到props上
const mapDispatchToProps = (dispatch: Function) => {
    return {
        ping : () => dispatch(ping()),
    }
};

// @connect<TypeOfState, TypeOfDispatch>(
//     mapStateToProps,
//     mapDispatchToProps
// )

interface IProps {
  isPinging: boolean
  ping: () => void
  form : any
}

// @connect<TypeOfState, TypeOfDispatch,{}>(
//     mapStateToProps,
//     mapDispatchToProps
// )
@(connect(mapStateToProps, mapDispatchToProps) as any)
class Home extends React.Component<IProps , any > {
  constructor(props: IProps) {
    super(props)
    this.state =  {}
  }
  public render () {
    const { isPinging, ping, form } = this.props
    // console.log(form)
    return (
      <div>
        <h1 className="title-h1">isPinging: {isPinging.toString()}</h1>
        <Button onClick={ping}>start ping</Button>
        <Todo />
      </div>
    )
  }
}

interface CreateNoticeModalProps extends FormComponentProps {
  isShow: boolean
  onCancel: any
  onOk: any
}
// export default Form.create<CreateNoticeModalProps>({})(Login)
// export default connect(isPinging => isPinging, {ping})(CSSModules(App,styles));
export default Form.create<CreateNoticeModalProps>({})(Home);