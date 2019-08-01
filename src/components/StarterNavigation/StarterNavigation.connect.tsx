import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import * as actions from "./../../store/actions";

import { RootState } from "./../../store/reducers";

import StarterNavigation from "./StarterNavigation";

type Action = ActionType<typeof actions>;

interface OwnProps {

}

const mapStateToProps = (state:RootState) => ({
    navOpenState : state.starterNavigation.navOpenState
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props : OwnProps) => bindActionCreators({

},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StarterNavigation);
