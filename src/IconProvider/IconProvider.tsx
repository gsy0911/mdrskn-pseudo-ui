"use client";
import { ThemeIcon } from "@mantine/core";
import React from "react";
import className from "./IconProvider.module.css";
import {
  IconThumbUp,
  IconCodeCircle2,
  IconCamera,
  IconArticle,
  IconBook,
  IconToolsKitchen2,
  IconFunction,
  IconVocabulary,
  IconTransferIn,
  IconTransferOut,
  IconMovie,
  IconBox,
  IconLibraryPhoto,
  IconMessageCircle2,
  IconBodyScan,
  IconHelpHexagon,
  IconLogin,
  IconLogout,
  IconRoad,
} from "@tabler/icons-react";

export type IconType =
  | "LIKES"
  | "PHOTO"
  | "TECH"
  | "READING MATERIAL"
  | "ARTICLE"
  | "RESTAURANT"
  | "TERMINOLOGY"
  | "SNIPPETS"
  | "Z-MOUNT"
  | "INUMAE"
  | "NEU"
  | "INPUT"
  | "OUTPUT"
  | "SIGN-IN"
  | "SIGN-OUT"
  | "ROADMAP"
  | "APPLICATION"
  | "SECRET"
  | string;

export const IconProvider = ({ iconType, c }: { iconType: IconType; c?: string }) => {
  return (
    // "animations" | "movies" | "mangas" | "novels"
    <ThemeIcon variant={"subtle"} className={className.icon} c={c}>
      {iconType === "LIKES" ? (
        <IconThumbUp />
      ) : iconType === "animations" || iconType === "movies" ? (
        <IconMovie />
      ) : iconType === "mangas" || iconType === "novels" ? (
        <IconBook />
      ) : iconType === "PHOTO" ? (
        <IconLibraryPhoto />
      ) : iconType === "TECH" ? (
        <IconCodeCircle2 />
      ) : iconType === "READING MATERIAL" ? (
        <IconBook />
      ) : iconType === "ARTICLE" ? (
        <IconArticle />
      ) : iconType === "RESTAURANT" ? (
        <IconToolsKitchen2 />
      ) : iconType === "TERMINOLOGY" ? (
        <IconVocabulary />
      ) : iconType === "SNIPPETS" ? (
        <IconFunction />
      ) : iconType === "Z-MOUNT" ? (
        <IconCamera />
      ) : iconType === "INUMAE" ? (
        <IconMessageCircle2 />
      ) : iconType === "NEU" ? (
        <IconHelpHexagon />
      ) : iconType === "INPUT" ? (
        <IconTransferIn />
      ) : iconType === "OUTPUT" ? (
        <IconTransferOut />
      ) : iconType === "SIGN-IN" ? (
        <IconLogin />
      ) : iconType === "SIGN-OUT" ? (
        <IconLogout />
      ) : iconType === "ROADMAP" ? (
        <IconRoad />
      ) : iconType === "APPLICATION" ? (
        <IconBox />
      ) : iconType === "SECRET" ? (
        <IconBodyScan />
      ) : null}
    </ThemeIcon>
  );
};
