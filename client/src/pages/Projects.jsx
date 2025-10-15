import "./Projects.css";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

export default function Projects() {
  const projects = [
    {
      img: project1Img,
      title: "Unity Platformer",
      desc: "A 2D platformer built in Unity with a grapling focus, animations, and level design. Focused on gameplay mechanics and polish.",
    },
    {
      img: project2Img,
      title: "Retro Game Recreations",
      desc: "Various recreations of retro games within Unity, remaking all aspects of the origionals and adding creative twists as well.",
    },
    {
      img: project3Img,
      title: "Restaurant Website",
      desc: "A functional website for a fake restaurant. With a menu and tabs",
    },
  ];

  return (
    <div className="container projects-page">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I’ve worked on while learning game development and software programming.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="btn primary">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
