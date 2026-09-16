import React from "react";
import {
  SiCplusplus,
  SiCloudinary,
  SiCss,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiMaterialdesign,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

import {
  BadgeCheck,
  Code2,
  Database,
  KeyRound,
  LayoutPanelTop,
  MapPinned,
  MonitorSmartphone,
  Network,
  PlugZap,
  Radio,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI (MUI)", icon: SiMaterialdesign, color: "#007FFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: Network, color: "#FF751F" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "JWT Authentication", icon: KeyRound, color: "#FB015B" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: Code2, color: "#F89820" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Leaflet", icon: SiLeaflet, color: "#3D9C40" },
      { name: "React Leaflet", icon: SiReact, color: "#61DAFB" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
    ],
  },
  {
    name: "Additional Skills",
    skills: [
      { name: "Responsive Web Design", icon: MonitorSmartphone, color: "#38BDF8" },
      { name: "API Integration", icon: PlugZap, color: "#FF751F" },
      { name: "Authentication & Authorization", icon: ShieldCheck, color: "#FB015B" },
      { name: "Role-Based Access Control (RBAC)", icon: BadgeCheck, color: "#FF751F" },
      { name: "CRUD Operations", icon: Database, color: "#47A248" },
      { name: "Real-Time Applications", icon: Radio, color: "#25C2A0" },
      { name: "Geolocation & Maps Integration", icon: MapPinned, color: "#3D9C40" },
    ],
  },
];

const allSkills = skillCategories.flatMap((category) => category.skills);

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      {/* Background Orange Glow */}
      <div className="skills-glow" />

      <div className="skills-layout">

        {/* ================= LEFT SIDE ================= */}
        <div className="skills-sidebar">

          {/* Heading */}
          <div className="skills-sidebar-inner">
            <div className="skills-heading-row">
              <span className="skills-heading-dot" />

              <h2
                className="skills-title"
                style={{
                  fontFamily: "Impact, sans-serif",
                }}
              >
                Skills
              </h2>
            </div>

            {/* Vertical Line */}
            <div className="skills-divider">

              {/* Orange Line */}
              <div className="skills-divider-fill" />

              {/* Glow Dot */}
              <div className="skills-divider-dot" />
            </div>
          </div>
        </div>

        {/* ================= MOBILE HEADING ================= */}
        <div className="skills-mobile-heading">
          <span className="skills-heading-dot" />

          <h2
            className="skills-title skills-title-mobile"
            style={{
              fontFamily: "Impact, sans-serif",
            }}
          >
            Skills
          </h2>
        </div>

        {/* ================= SKILLS GRID ================= */}
        <div className="skills-grid">
          {allSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div key={skill.name} className="skill-tile">
                {/* Top Orange Glow */}
                <div
                  className="skill-tile-glow"
                />

                {/* Icon */}
                <div
                  className="skill-icon-wrap"
                >
                  <Icon
                    className="skill-icon"
                    style={{ color: skill.color }}
                  />
                </div>

                {/* Skill Name */}
                <span
                  className="skill-name"
                >
                  {skill.name}
                </span>

                {/* Orange Bottom Line */}
                <div
                  className="skill-tile-line"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;