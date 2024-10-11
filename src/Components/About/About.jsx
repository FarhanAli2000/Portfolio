import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/farhan.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img className="card" src={profile_img} alt="" style={{ height: "80%", width: "90%" }} /> */}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and motivated MERN Stack Developer with a solid
              foundation in front-end and back-end technologies. With hands-on
              experience in building responsive and dynamic web applications.
            </p>
            <p>
              Eager to leverage my skills in full-stack development, I am
              seeking opportunities to contribute to innovative teams and grow
              professionally within the tech industry.
            </p>
          </div>
          <div className="box1">
            <div className="about-skills1">
              <h1>Front-End</h1>
              <div className="about-skill">
                <br></br>
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
                <p>Bootstrap</p>
                <hr style={{ width: "50%" }} />
                <p>Tailwind-CSS</p>
                <hr style={{ width: "50%" }} />
                <p>Material UI</p>
                <hr style={{ width: "50%" }} />
                <p>Javascript</p>
                <hr style={{ width: "50%" }} />
                <p>React JS</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
            <div className="about-skills2">
              <h1>Back-End</h1>
              <div className="about-skill">
                <br></br>
                <p>Node JS</p>
                <hr style={{ width: "50%" }} />
                <p>Express JS</p>
                <hr style={{ width: "50%" }} />
                <p>Mongo DB</p>
                <hr style={{ width: "60%" }} />
                <p>API</p>
                <hr style={{ width: "70%" }} />
                <p>PostgreSQL</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>12+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
