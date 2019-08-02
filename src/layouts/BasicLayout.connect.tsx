import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./../store/actions";

import { RootState } from "./../store/reducers";

import BasicLayout from "./BasicLayout";

type Action = ActionType<typeof actions>;

interface OwnProps {
  children : any
}

const mapStateToProps = (state:RootState,props:OwnProps) => ({
    navOpenState : state.starterNavigation.navOpenState
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props : OwnProps) => bindActionCreators({
  activeMenuIsOpen : (isOpen:boolean) => actions.activeMenuIsOpen(isOpen)
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
