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

declare interface Header {
  headerMain: boolean;
  headerGlobal: boolean;
  pressGlobal: () => void;
}

declare interface BalanceView {
  currency: string;
  daysView: boolean;
}

declare interface Card {
  id: number;
  style: object;
}

declare interface CardContainer {
  id: number;
  color: string;
  priority: any;
  firstPriority: any;
  secondPriority: any;
}

declare interface TransactionView {
  data: any[];
}

declare interface BottomTabs {
  state: any;
  navigation: any;
}
