import PhoneCardContainer from './view';
import { connect } from 'react-redux';

import { requestPhoneId } from '../../state/actions';

const mapStateToProps = (state, props) => {
  const phones = state.requestPhones.list;
  const { id } = props.match.params;

  const phoneById = phones.find(phone => phone.id.toString() === id);

  return {
    phone: phoneById || state.requestPhoneId.phone,
    phonePending: phoneById ? false : state.requestPhoneId.phonePending
  };
};

const mapDispatchToProps = {
  requestPhoneId
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneCardContainer);
