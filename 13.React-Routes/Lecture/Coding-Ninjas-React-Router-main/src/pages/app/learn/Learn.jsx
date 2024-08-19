import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { Link, useNavigate, useParams } from "react-router-dom";
import Chapter from "../chapter/Chapter";

function Learn() {
  const param = useParams();
  console.log(param.chaperId, "idd..");

  const navigate = useNavigate();

  const onRedirectToCourse = () => {
    navigate("/courses");
  }

  const data = coursesData.find((course) => course.id === param.id);
  const chapterData = data?.chapters[param.chaperId];

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back} onClick={onRedirectToCourse}>{"<<"}</h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{data.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
            {data.chapters.map((chapter, i) => (
              // <Chapter props={chapter}/>
              <Link to={`/learn/${data.id}/${i}`}>
                <div className={style.chapterId} key={i}>
                  {chapter.title}
                </div>
              </Link>
            ))}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
          <Chapter props={chapterData} />
      </div>
    </div>
</div>
  );
}

export default Learn;
