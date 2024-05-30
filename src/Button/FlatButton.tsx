"use client";
import { useState } from "react";
import { rem, UnstyledButton, ThemeIcon, LoadingOverlay, Box } from "@mantine/core";
import { IconProvider } from "../IconProvider";
import type { IconType } from "../IconProvider";
import React from "react";
import { Text } from "../Text";
import className from "./FlatButton.module.css";

export const FlatButton = ({ iconType, onClick, title }: { iconType: IconType, onClick: () => void, title: string }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        border: `${rem(1)} solid #E9ECEF`,
      }}
    >
      <Box className={className.box}>
        <LoadingOverlay visible={visible} overlayProps={{ radius: "sm", blur: 2 }} />
        <ThemeIcon variant={"subtle"} className={className.icon}>
          <IconProvider iconType={iconType} />
        </ThemeIcon>
        <Text variant={"card"} text={title} />
      </Box>
    </UnstyledButton>
  );
};
