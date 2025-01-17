import { ReactNode } from "react";
import { Icon, Icons } from "@/components/Icon";
import { ArrowLink } from "@/components/text/ArrowLink";

interface SectionHeadingProps {
  icon?: Icons;
  title: string;
  children?: ReactNode;
  linkText?: string;
  onClick?: () => void;
  className?: string;
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className={`mt-12 ${props.className}`}>
      <div className="mb-4 flex items-end">
        <p className="flex flex-1 items-center font-bold uppercase text-denim-700">
          {props.icon ? (
            <span className="mr-2 text-xl">
              <Icon icon={props.icon} />
            </span>
          ) : null}
          {props.title}
        </p>
        {props.linkText ? (
          <ArrowLink
            linkText={props.linkText}
            direction="left"
            onClick={props.onClick}
          />
        ) : null}
      </div>
      {props.children}
    </div>
  );
}
