import React, {memo} from 'react';
import {View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const GradientText = ({text, fontSize = 30}: GradientText) => {
  return (
    <View>
      <Svg height={fontSize + 10} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#A595FF" stopOpacity="1" />
            <Stop offset="50%" stopColor="#F9B6FF" stopOpacity="1" />
            <Stop offset="75%" stopColor="#FFA6B8" stopOpacity="1" />
            <Stop offset="100%" stopColor="#A595FF" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={fontSize}
          fontWeight="bold"
          x="0"
          y={fontSize}>
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default memo(GradientText);
