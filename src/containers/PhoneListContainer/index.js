import PhoneListContainer from './view';

import { connect } from 'react-redux';
import { requestPhones, setSearchField } from '../../state/actions';

const mapStateToProps = state => {
  return {
    searchField: state.setSearchField.searchField,
    isPending: state.requestPhones.isPending,
    list: state.requestPhones.list,
    error: state.requestPhones.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPhones: () => dispatch(requestPhones()),
    setSearchField: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
