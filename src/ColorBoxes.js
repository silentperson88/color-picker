import React, { useState } from "react";
import "./colorboxes.css";
import CopyToClipboard from "react-copy-to-clipboard";
function ColorBoxes({ background, name }) {
  // const [copied, setCopied] = useState(false);

  // const changeCopyState = () => {
  //   setCopied(true, () => {
  //     setTimeout(() => setCopied(false, 1500));
  //   });
  // };

  return (
    // onCopy={changeCopyState}
    <CopyToClipboard text={background}>
      <div style={{ background: background }} className="colorboxes">
        {/* <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        > */}
        <div className="copy-container">
          <div className="box-content">{name}</div>
          <button className="copy-button">Copy</button>
        </div>
        {/* </div> */}
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBoxes;
