import "./About.css";
import profileImg from "../assets/me.jpg";

export default function About() {
  return (
    <div className="container about-page">
      <h2>About Me</h2>
      <p className="about-intro">Here’s a little more about who I am, my background, and what I’m passionate about.</p>

      <div className="about-grid">
        <div className="image-card">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="about-card bio-card">
          <h3>Nicholas Wagner</h3>
          <p>
            I’m a student and aspiring <strong>game developer</strong> with a strong interest in interactive
            experiences, design, and programming. Most of my time is spent working in <strong>Unity</strong> with{" "}
            <strong>C#</strong>, but I also have experience with web technologies like Java, JavaScript, HTML, and CSS.
          </p>
          <p>
            Beyond code, I enjoy exploring tools such as <strong>Blender</strong> for 3D assets and{" "}
            <strong>Visual Studio</strong> / <strong>VS Code</strong> for development. I’m eager to keep learning,
            experimenting, and building new projects that bring ideas to life.
          </p>

          <a href="/NickWagner Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
