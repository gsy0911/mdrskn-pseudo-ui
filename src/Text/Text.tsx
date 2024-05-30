import { Text as MantineText } from "@mantine/core";
import classes from "./Text.module.css";
import React from "react";

interface TextProps {
  text: string;
  variant: "card" | "main" | "sub"
  fw?: number
}

export const Text = ({ text, variant, fw = 400 }: TextProps) => {
  const _fw = variant === "card" ? 600 : variant === "main" ? 500 : fw;
  const _c = variant === "sub" ? "dimmed" : undefined
  const _className = variant === "card" ? classes.cardTextTitle : variant === "main" ? classes.cardTextMainDescription : classes.cardTextSubDescription
  return (
    <MantineText fw={_fw} c={_c} lineClamp={2} className={_className}>
      {text}
    </MantineText>
  );
};
