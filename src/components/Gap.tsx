import React, {memo} from 'react';
import {View} from 'react-native';

const Gap = ({width, height}: Gap) => {
  return <View style={{width, height}} />;
};

export default memo(Gap);
