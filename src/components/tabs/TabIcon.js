import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import AppColors from '../../theme/colors';

class TabIcon extends React.Component {
  componentName = 'TabIcon';
  render() {
    return (
      <View>
        <Icon name={this.props.iconName} type={this.props.iconType} color={this.props.focused ? AppColors.brand.primary : '#767676'}  />
        {/**<Text style={{ color: this.props.selected ? AppColors.brand.primary : '#767676' }}>{this.props.title}</Text> */}
      </View>
    );
  }
}


TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired };

TabIcon.defaultProps = { title: 'Home',  focused: false, iconName: 'md-home', iconType: 'ionicon' };

export default TabIcon;