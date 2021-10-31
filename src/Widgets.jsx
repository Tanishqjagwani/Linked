import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widegts() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>Linkend News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Tanishq React is back", "Top news - 999 reader")}
      {newsArticle("Coronavirus cases", "Top news - 886 reader")}
      {newsArticle("Tesla stock prices", "Top news - 556 reader")}
      {newsArticle("Microsoft windows 11 ", "Top news - 668 reader")}
      {newsArticle("Apple company stocky increased", "Top news - 532 reader")}
      {newsArticle("facebook becomes Meta universe", "Top news - 959 reader")}
    </div>
  );
}

export default Widegts;
