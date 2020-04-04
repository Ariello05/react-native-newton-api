import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Line = (props) => {
  return (
    <View style={styles.center}>
      <View style={{ ...styles.line, ...props.style }}></View>
    </View>
  );
};
Line.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  line: {
    borderWidth: 1,
    color: '#333',
    opacity: 0.2,
    width: '100%',
  },
  center: {
    alignItems: 'center',
    width: '100%',
    height: 2,
  },
});

export default Line;
