import { TagName } from "../../../types/Table";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import classes from "../Table.module.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    HTMLHeadingElement
  > {
  tag: TagName;
  children: ReactNode;
}

export const Title = ({ tag, children, ...props }: Props) => {
  const TagName = tag;
  return (
    <TagName className={classes.title} {...props}>
      {children}
    </TagName>
  );
};
