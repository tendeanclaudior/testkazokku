import React from 'react';
import {Dimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Card from './Card';

const {width, height} = Dimensions.get('window');

const CardContainer = ({
  id,
  color,
  priority,
  firstPriority,
  secondPriority,
}: CardContainer) => {
  const BOTTOM_BUFFER = 30;
  const yTranslation = useSharedValue(30);
  const rotation = useSharedValue(BOTTOM_BUFFER);
  const isRightFlick = useSharedValue(true);

  const gesture = Gesture.Pan()
    .onBegin(({absoluteX, translationY}) => {
      if (absoluteX < width / 2) {
        isRightFlick.value = false;
      }

      yTranslation.value = translationY;
      rotation.value = translationY + BOTTOM_BUFFER;
    })
    .onUpdate(({translationY}) => {
      yTranslation.value = translationY;
      rotation.value = translationY + BOTTOM_BUFFER;
    })
    .onEnd(() => {
      const priorities = [firstPriority.value, secondPriority.value];

      const lastItem = priorities[priorities.length - 1];

      for (let i = priorities.length - 1; i > 0; i--) {
        priorities[i] = priorities[i - 1];
      }

      priorities[0] = lastItem;

      firstPriority.value = priorities[0];
      secondPriority.value = priorities[1];

      yTranslation.value = withTiming(
        BOTTOM_BUFFER,
        {
          duration: 400,
          easing: Easing.quad,
        },
        () => {
          isRightFlick.value = true;
        },
      );

      rotation.value = withTiming(
        -1280,
        {
          duration: 400,
          easing: Easing.linear,
        },
        () => {
          rotation.value = 30;
        },
      );
    });

  const style = useAnimatedStyle(() => {
    const getPosition = () => {
      switch (priority.value) {
        case 1:
          return 50;
        case 0.9:
          return 75;
        default:
          return 0;
      }
    };

    return {
      position: 'absolute',
      width: '100%',
      height: 200,
      backgroundColor: color,
      bottom: withTiming(getPosition(), {duration: 500}),
      borderRadius: 8,
      zIndex: priority.value * 100,
      transform: [
        {translateY: yTranslation.value},
        {
          rotate: `${interpolate(
            rotation.value,
            isRightFlick.value ? [30, height] : [30, -height],
            [0, 4],
          )}rad`,
        },
        {
          scale: withTiming(priority.value, {
            duration: 250,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Card id={id} style={style} />
    </GestureDetector>
  );
};

export default CardContainer;
