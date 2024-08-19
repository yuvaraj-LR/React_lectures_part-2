import React from "react";
import styles from "./Chapter.module.css";

function Chapter(props) {
  console.log(props, "propss..");
  // const {chapter, title, description, details, video} = props?.props;

  return (
    <div>
      <h1>{props?.props?.title}</h1>
      <h2>{props?.props?.details}</h2>
      <p className={styles.para}>Chapter</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={props?.props?.video}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
