import "./Services.css";
import { FaGamepad, FaCode, FaCube, FaTools } from "react-icons/fa"; // icons

export default function Services() {
  const services = [
    {
      icon: <FaGamepad />,
      title: "Game Development",
      desc: "Designing and building immersive games using Unity and C#. From mechanics to polish, bringing interactive ideas to life.",
    },
    {
      icon: <FaCode />,
      title: "Programming",
      desc: "Solid foundation in C#, Java, and JavaScript. Experienced in problem solving, algorithms, and object-oriented programming.",
    },
    {
      icon: <FaCube />,
      title: "3D & Assets",
      desc: "Basic 3D modeling and asset creation with Blender. Ability to bring custom game elements into Unity projects.",
    },
    {
      icon: <FaTools />,
      title: "Software & Tools",
      desc: "Experience with VS Code, Visual Studio, GitHub, and Microsoft Office. Comfortable with development pipelines and collaboration.",
    },
  ];

  return (
    <div className="container services-page">
      <h2>What I Do</h2>
      <p className="services-intro">
        Here are some of the areas I’ve been working on and continue to grow in as I study and develop my skills.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
