import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./../../store/actions";

import { RootState } from "./../../store/reducers";

import Todolist from "./Todolist";

type Action = ActionType<typeof actions>;

interface OwnProps {

}

const mapStateToProps = (state:RootState) => ({
    toDoList : state.pingpong.toDoList
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props : OwnProps) => bindActionCreators({
    addTodoListItem : (text:any) => actions.todoListAddItemAction(text),
    fetchTodoList : () => actions.fetchTodoListAction(),
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
