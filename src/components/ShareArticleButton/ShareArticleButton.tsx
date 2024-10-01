import React from "react";
import "./index.scss";

interface IProps {
  text: string;
  tooltip?: string;
  onClick: () => void;
}

export const ShareArticleButton = ({ text, tooltip, onClick }: IProps) => {
  return (
    <div className="share-article-button">
      <button onClick={onClick}>{text}</button>
      {tooltip && <span>{tooltip}</span>}
    </div>
  );
};
