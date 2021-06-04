import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  credentials: {
    username: '',
    email: '',
    password: ''
  },
  formType: 'Signup',
  errors: state.errors.session,
  loggedIn: state.session.loggedIn
})

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(createUser(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);