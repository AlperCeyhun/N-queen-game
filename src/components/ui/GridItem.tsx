import React, { ReactNode } from 'react';

interface GridItemProps {
  title?: string;
  bgColor?: string;
  children: ReactNode;
  size?: string;
  isFlexCol?: boolean;
  hasSpacing?: boolean;
  hasShadow?: boolean;
  other?: string;
  notCenter?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ title, children, bgColor, size, isFlexCol, hasSpacing,hasShadow, other, notCenter}) => {
  return (
    <div className={`flex p-6 rounded-md gap-1
      ${notCenter ? "" : "items-center"}
      ${other ? other : ""}
      ${hasShadow ? "shadow-md" : ""}
      ${hasSpacing ? "space-x-10" : ""}
      ${isFlexCol ? "flex-col" : "flex-row"}
      ${bgColor ? bgColor : "bg-indigo-100"}
      ${size? size : "h-[450px] w-[800px]"}`}>
      <h3 className="text-2xl font-semibold text-indigo">{title}</h3>
      {children}
    </div>
  );
};

export default GridItem;