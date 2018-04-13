import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Button from './Button';
import md5 from 'md5';
import {connect} from 'react-redux';
import styles from './ContactsItem.style';
import {deleteContact} from '../actions/contacts';

/**
 * Showing contact item
 */
class ContactItem extends Component {
  constructor(props){
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
  }

  deleteContact(){
    const {name} = this.props;
    return this.props.deleteContact(name);
  }
  render() {
    const {name, email} = this.props;
    return (
      <TouchableOpacity
        style={styles.containerRoot}
      >
        <View
          style={styles.containerImage}
        >
          <Image
            source={{ uri: `https://gravatar.com/avatar/${md5(email)}.png?s=200` }}
            style={styles.contactImage}
          />
        </View>
        <View
          style={styles.containerContact}
        >
          <Text
            style={styles.contactName}
          >
            {name}
          </Text>

          <Button value={'Delete'} onPress={this.deleteContact} />
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteContact: name => dispatch(deleteContact(name))
});

export default connect(null, mapDispatchToProps)(ContactItem);