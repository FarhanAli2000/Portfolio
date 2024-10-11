import "./Hero.css";
// import profile_img from "../../assets/farhan.png";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={profile_img} alt="" style={{ height: "5%", width: "10%" }} /> */}
      <h1>
        <span>I am Syed Farhan Ali,</span> MERN STACK DEVELOPER based in
        Pakistan.
      </h1>
      <p>
        Hello there! I am a dedicated Frontend and MERN Stack Developer,
        committed to turning innovative concepts into reality. Browse my
        portfolio to see examples of my work and lets connect!
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
