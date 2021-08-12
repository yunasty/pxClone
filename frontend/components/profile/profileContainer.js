import { connect } from "react-redux";
import Profile from "./profile";
import { requestUser } from '../../actions/userActions';

const mapStateToProps = (state, ownProps) => ({
  userId: parseInt(ownProps.match.params.userId),
  userErrors: state.errors.users.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);