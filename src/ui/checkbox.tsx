import clsx from "clsx";
import { MotiView } from "moti";
import React, { useCallback } from "react";
import {
  I18nManager,
  Pressable,
  type PressableProps,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { Text } from "./core";
import { colors } from "./theme/colors";

const SIZE = 20;
const WIDTH = 100;
const HEIGHT = 50;
const THUMB_HEIGHT = 38;
const THUMB_WIDTH = 38;
const THUMB_OFFSET = 18;

export interface RootProps extends Omit<PressableProps, "onPress"> {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  accessibilityLabel: string;
  backgroundColor: string;
}

export type IconProps = {
  checked: boolean;
  label?: string;
  backgroundColor: string;
};

export const Root = ({
  checked = false,
  children,
  onChange,
  disabled,
  className = "",
  ...props
}: RootProps) => {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <Pressable
      onPress={handleChange}
      className={`flex-row items-center ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      accessibilityState={{ checked }}
      disabled={disabled}
      {...props}
    >
      {children}
    </Pressable>
  );
};

type LabelProps = {
  text: string;
  className?: string;
  testID?: string;
};

const Label = ({ text, testID, className = "" }: LabelProps) => {
  return (
    <Text testID={testID} className={` ${className} pl-2`}>
      {text}
    </Text>
  );
};

export const CheckboxIcon = ({
  checked = false,
  backgroundColor,
}: IconProps) => {
  const color = checked ? colors.primary[200] : colors.charcoal[400];
  return (
    <MotiView
      style={{
        height: SIZE,
        width: SIZE,
        borderColor: backgroundColor,
      }}
      className="items-center justify-center rounded-[5px] border-2"
      from={{ backgroundColor: "transparent", borderColor: "#CCCFD6" }}
      animate={{
        backgroundColor: checked ? color : "transparent",
        borderColor: color,
      }}
      transition={{
        backgroundColor: { type: "timing", duration: 100 },
        borderColor: { type: "timing", duration: 100 },
      }}
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { type: "timing", duration: 100 } }}
      >
        <Svg width="100" height="100" viewBox="0 0 24 24" fill="none">
          <Path
            d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
            fill="#C385F8"
          />
        </Svg>
      </MotiView>
    </MotiView>
  );
};

const CheckboxRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="checkbox" {...props}>
      {children}
    </Root>
  );
};

const CheckboxBase = ({
  checked = false,
  testID,
  label,
  backgroundColor,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <CheckboxRoot
      backgroundColor={backgroundColor}
      checked={checked}
      testID={testID}
      {...props}
    >
      <CheckboxIcon
        checked={checked}
        label={label}
        backgroundColor={backgroundColor}
      />
      {label ? (
        <Label
          text={label}
          testID={testID ? `${testID}-label` : undefined}
          className="pr-0"
        />
      ) : null}
    </CheckboxRoot>
  );
};

export const Checkbox = Object.assign(CheckboxBase, {
  Icon: CheckboxIcon,
  Root: CheckboxRoot,
  Label,
});

export const RadioIcon = ({ checked = false }: IconProps) => {
  const color = checked ? colors.primary[200] : colors.charcoal[400];
  return (
    <MotiView
      style={{
        height: SIZE,
        width: SIZE,
        borderColor: color,
      }}
      className="items-center justify-center rounded-[20px] border-2 bg-transparent"
      from={{ borderColor: "#CCCFD6" }}
      animate={{
        borderColor: color,
      }}
      transition={{ borderColor: { duration: 100, type: "timing" } }}
    >
      <MotiView
        className={`size-[10px] rounded-[10px] ${checked && "bg-primary-300"} `}
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { duration: 50, type: "timing" } }}
      />
    </MotiView>
  );
};

const RadioRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="radio" {...props}>
      {children}
    </Root>
  );
};

const RadioBase = ({
  checked = false,
  testID,
  label,
  backgroundColor,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <RadioRoot
      backgroundColor={backgroundColor}
      checked={checked}
      testID={testID}
      {...props}
    >
      <RadioIcon checked={checked} backgroundColor={backgroundColor} />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </RadioRoot>
  );
};

export const Radio = Object.assign(RadioBase, {
  Icon: RadioIcon,
  Root: RadioRoot,
  Label,
});

export const SwitchIcon = ({ checked = false, label }: IconProps) => {
  const translateX = checked
    ? THUMB_OFFSET - 11
    : WIDTH - THUMB_WIDTH - THUMB_OFFSET;

  return (
    <View className="w-[88px] justify-center">
      <View className="overflow-hidden rounded-full">
        <View
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundColor: "#62CC82",
          }}
        />
      </View>
      <MotiView
        style={{
          height: THUMB_HEIGHT,
          width: THUMB_WIDTH,
          position: "absolute",
          backgroundColor: "#FAFAFA",
          borderRadius: 19,
          right: 0,
        }}
        className="flex items-center justify-center"
        animate={{
          translateX: I18nManager.isRTL ? translateX : -translateX,
        }}
        transition={{ translateX: { overshootClamping: true } }}
      />
      <Text
        className={clsx("absolute left-5")}
        style={{ fontFamily: "Thomas", fontSize: 38, lineHeight: 48 }}
      >
        {label?.toUpperCase()}
      </Text>
      <Text
        className={clsx("absolute right-5")}
        style={{ fontFamily: "Thomas", fontSize: 38, lineHeight: 48 }}
      >
        {label?.toLowerCase()}
      </Text>
    </View>
  );
};
const SwitchRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="switch" {...props}>
      {children}
    </Root>
  );
};

const SwitchBase = ({
  checked = false,
  testID,
  label,
  backgroundColor,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <SwitchRoot
      backgroundColor={backgroundColor}
      checked={checked}
      testID={testID}
      {...props}
    >
      <SwitchIcon
        label={label}
        checked={checked}
        backgroundColor={backgroundColor}
      />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </SwitchRoot>
  );
};

export const Switch = Object.assign(SwitchBase, {
  Icon: SwitchIcon,
  Root: SwitchRoot,
  Label,
});
