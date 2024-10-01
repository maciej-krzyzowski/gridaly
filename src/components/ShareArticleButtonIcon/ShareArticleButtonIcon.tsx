import React, { ReactElement } from "react";
import "./index.scss";

interface IProps {
  shareUrl: string;
  articleUrl: string;
  icon: ReactElement;
}

export const ShareArticleButtonIcon = ({ shareUrl, articleUrl, icon }: IProps) => {
  return (
    <a
      className="share-article-button-icon"
      href={`${shareUrl}${encodeURIComponent(articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
