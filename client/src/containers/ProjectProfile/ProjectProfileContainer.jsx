import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectProfile from '../../components/ProjectProfile/ProjectProfile';
import updateProjectBlurbAction from '../../actions/ProjectProfile/updateProjectBlurb';
import updateLinksAction from '../../actions/ProjectProfile/updateLinksAction';
import updateAllOtherEditsAction from '../../actions/ProjectProfile/updateAllOtherEdits';
import updateProjectTeamAction from '../../actions/ProjectProfile/updateProjectTeam'

function mapStateToProps(state) {
  return {
    projectName: state.projectName,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProjectBlurb: updateProjectBlurbAction,
    updateLinks: updateLinksAction,
    updateAllOthers: updateAllOtherEditsAction,
    updateProjectTeam: updateProjectTeamAction,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectProfile);
