import { TagName } from "../../types/Table";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import classes from "./Heading.module.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    HTMLHeadingElement
  > {
  tag?: TagName;
  children: ReactNode;
}

export const Heading = ({ tag = "h2", children, ...props }: Props) => {
  const TagName = tag;
  return (
    <TagName className={classes.Heading} {...props}>
      {children}
    </TagName>
  );
};
