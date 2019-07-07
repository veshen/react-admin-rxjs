import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./../../store/actions";

import { RootState } from "./../../store/reducers";

import Index from "./index";

type Action = ActionType<typeof actions>;

interface OwnProps {

}

const mapStateToProps = (state:RootState) => ({
    isPinging : state.pingpong.isPinging
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props : OwnProps) => bindActionCreators({
    ping : () => actions.homePingAction(),
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Index);
