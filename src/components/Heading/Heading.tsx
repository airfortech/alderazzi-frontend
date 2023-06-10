import { Align, TagName } from "../../types/Table";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import classes from "./Heading.module.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    HTMLHeadingElement
  > {
  tag?: TagName;
  children: ReactNode;
  align?: Align;
  size?: "normal" | "medium" | "large";
  marginBottom?: boolean;
}

const headingClasses = (
  align: Align,
  size: "normal" | "medium" | "large",
  marginBottom: boolean = true
) =>
  clsx(
    classes.Heading,
    align === "left" && classes.left,
    align === "right" && classes.right,
    size === "medium" && classes.medium,
    size === "large" && classes.large,
    !marginBottom && classes.noMarginBottom
  );

export const Heading = ({
  tag = "h2",
  align = "center",
  size = "normal",
  children,
  marginBottom,
  ...props
}: Props) => {
  const TagName = tag;
  return (
    <TagName className={headingClasses(align, size, marginBottom)} {...props}>
      {children}
    </TagName>
  );
};
