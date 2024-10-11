import  { useState } from "react"; 
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(6); 

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <a href={work.w_url} target="_blank" rel="noopener noreferrer" key={index}>
            <img
              src={work.w_img}
              alt={work.w_name}
              style={{ height: "100%", width: "90%" }}
            />
          </a>
        ))}
      </div>
      {visibleCount < mywork_data.length && ( 
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default MyWork;
