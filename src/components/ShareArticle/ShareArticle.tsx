import React, { useState, useEffect } from "react";
import { ShareArticleButtonIcon } from "@components/ShareArticleButtonIcon/ShareArticleButtonIcon";
import { ShareArticleButton } from "@components/ShareArticleButton/ShareArticleButton";
import { IconFacebook } from "@/assets/IconFacebook";
import { IconLinkedin } from "@/assets/IconLinkedin";
import { IconTwitter } from "@/assets/IconTwitter";
import "./index.scss";

export const ShareArticle = () => {
  const [articleUrl, setArticleUrl] = useState("");
  const [copyText, setCopyText] = useState("Copy");

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch("https://enterprise.gridaly.com/frontend/articles.json");
      const data = await response.json();
      if (data && data.length > 0) {
        setArticleUrl(data[Math.floor(Math.random() * 5) + 1].url);
      }
    };
    fetchArticle();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy"), 5000);
    });
  };

  return (
    <div className="share-article">
      <h2 className="share-article__title">Share article</h2>
      <div className="share-article__container">
        <div className="share-article__input">
          <input type="text" value={articleUrl} readOnly />
          <ShareArticleButton text={copyText} tooltip="Click to copy" onClick={handleCopy} />
        </div>
        <div className="share-article__icons">
          <ShareArticleButtonIcon
            shareUrl="https://www.facebook.com/sharer/sharer.php?u="
            articleUrl={articleUrl}
            icon={<IconFacebook />}
          />
          <ShareArticleButtonIcon
            shareUrl="https://www.linkedin.com/shareArticle?mini=true&url="
            articleUrl={articleUrl}
            icon={<IconLinkedin />}
          />
          <ShareArticleButtonIcon
            shareUrl="https://twitter.com/intent/tweet?text="
            articleUrl={articleUrl}
            icon={<IconTwitter />}
          />
        </div>
      </div>
    </div>
  );
};
