import PhoneListContainer from './view';

import { connect } from 'react-redux';
import { requestPhones, setSearchField, deletePhoneId } from '../../state/actions';

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
    setSearchField: event => dispatch(setSearchField(event.target.value)),
    deletePhoneId: (id) => dispatch(deletePhoneId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
