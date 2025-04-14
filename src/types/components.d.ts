declare interface Gap {
  width: number;
  height: number;
}

declare interface GradientText {
  text: string;
  fontSize: number;
}

declare interface Button {
  text: string;
  onPress: () => void;
}

declare interface ButtonIcon {
  icon: string;
  onPress: () => void;
  disabled: boolean;
}
