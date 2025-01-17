import {
  templateBgColor,
  getSkeletonCopy,
} from "@lib/modules/skeletonFunctions";
import getRandomKey from "@lib/utils/getRandomKey";
import React from "react";

type SkeletonCSS = React.CSSProperties & {
  "--template"?: string;
};

export interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  template?: "normal" | "white";
  animation?: boolean;
  copy?: number;
}

const Skeleton = ({
  width,
  height,
  borderRadius,
  style,
  template,
  animation,
  copy,
}: SkeletonProps) => {
  const skeletonStyle: SkeletonCSS = {
    ...style,
    width,
    height,
    borderRadius,
  };

  if (template) {
    skeletonStyle["--template"] = templateBgColor(template);
    if (template === "white") {
      skeletonStyle.background = templateBgColor(template);
    }
  }

  if (animation === false) {
    skeletonStyle.animation = "none";
    skeletonStyle.WebkitAnimation = "none";
  }

  if (copy) {
    const copyArray = getSkeletonCopy(copy);

    return (
      <>
        {copyArray.map((elem) => {
          return (
            <div
              className="Skeleton__Box"
              style={skeletonStyle}
              key={getRandomKey()}
            />
          );
        })}
      </>
    );
  }

  return <div className="Skeleton__Box" style={skeletonStyle} />;
};

Skeleton.defaultProps = {
  width: "100%",
  height: "100%",
  borderRadius: "",
  style: {},
  template: "normal",
  animation: true,
  copy: 0,
};

export default React.memo(Skeleton);
