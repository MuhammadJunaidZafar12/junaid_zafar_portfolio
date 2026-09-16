import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const SectionHeader = ({ label, title }) => (
  <div
    className="section-sidebar"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }}
  >
    <div className="section-label">
      <span className="section-label-dot" />
      {label}
    </div>

    <h2 className="section-title">{title}</h2>

    <div className="section-divider">
      <div className="section-divider-fill" />
    </div>
  </div>
);

const ExternalLink = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/* =========================================================
  PROJECT DETAILS MODAL
========================================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "220px",
            overflow: "hidden",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, #111118 0%, transparent 60%)",
            }}
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* Title */}
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <span className="badge badge-accent">{project.badge}</span>

              <span className="badge badge-neutral">{project.category}</span>
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginTop: "0.25rem",
              }}
            >
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* Key Features */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text-subtle)",
                marginBottom: "0.625rem",
              }}
            >
              Key Features
            </h4>

            <ul className="dot-list">
              {project.keyFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text-subtle)",
                marginBottom: "0.625rem",
              }}
            >
              Tech Stack
            </h4>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
              }}
            >
              {project.techStack.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Links */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              paddingTop: "0.25rem",
            }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn btn-primary"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <ExternalLink />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn btn-outline"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <GithubIcon />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
  TECHNOLOGY COLORS
========================================================= */

const techColors = {
  react: "#61DAFB",
  "react.js": "#61DAFB",
  "react 19": "#61DAFB",
  "next.js": "#FFFFFF",
  "node.js": "#339933",
  "express.js": "#FFFFFF",
  "express 5": "#FFFFFF",
  mongodb: "#47A248",
  mongoose: "#880000",
  git: "#F05032",
  "rest apis": "#FF751F",
  jwt: "#FB015B",
  "jwt auth": "#FB015B",
  "tailwind css": "#06B6D4",
  "redux toolkit": "#764ABC",
  "mern stack": "#61DAFB",
  python: "#3776AB",
  fastapi: "#009688",
  "machine learning": "#FF6F00",
  "pdf reports": "#E53935",
  "socket.io": "#FFFFFF",
  "leaflet maps": "#3D9C40",
  "material ui": "#0081CB",
};

const getTechColor = (tech) => techColors[tech.toLowerCase()] || "#FFD9C8";

/* =========================================================
  PROJECTS SECTION
========================================================= */

export const Projects = ({ isProjectsPage = false }) => {
  const { projects } = portfolioData;

  const [selected, setSelected] = useState(null);

  /* ---------------------------------------------
    View All Projects
  --------------------------------------------- */

  const navigateToProjectsPage = () => {
    window.history.pushState({}, "", "/projects");

    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateBackHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------------------------------------
    HOME = ONLY 4 FEATURED PROJECTS
    PROJECTS PAGE = ALL PROJECTS
  --------------------------------------------- */

  const displayProjects = isProjectsPage
    ? projects
    : [
        ...projects.filter((project) => project.featured),
        ...projects.filter((project) => !project.featured),
      ].slice(0, 4);

  return (
    <>
      <section
        id="projects"
        style={{
          width: "100%",
          padding: "var(--section-y) 0",
          scrollMarginTop: "80px",
        }}
      >
        <div className="container">
          <div className="section-inner">
            {/* ================= HEADER ================= */}

            {isProjectsPage ? (
              <div className="projects-page-heading">
                <button
                  type="button"
                  onClick={navigateBackHome}
                  className="btn btn-outline projects-back-button"
                >
                  <ArrowLeft size={16} strokeWidth={2.25} />
                  Back to Home
                </button>
                <SectionHeader label="Projects" title="All Projects" />
              </div>
            ) : (
              <SectionHeader label="Projects" title="My Work" />
            )}

            {/* ================= PROJECT CONTENT ================= */}

            <div
              className="section-content"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* ================= PROJECT GRID ================= */}

              <div className="projects-grid">
                {displayProjects.map((project) => (
                  <div
                    key={project.id}
                    className="card"
                    style={{
                      padding: 0,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelected(project)}
                  >
                    {/* ================= IMAGE ================= */}

                    <div
                      style={{
                        position: "relative",
                        height: "190px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.04)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />

                      {/* Image Overlay */}

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 60%)",
                        }}
                      />

                      {/* Badge */}

                      <div
                        style={{
                          position: "absolute",
                          top: "0.75rem",
                          left: "0.75rem",
                        }}
                      >
                        <span className="badge badge-accent">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* ================= CARD BODY ================= */}

                    <div
                      style={{
                        padding: "1.125rem 1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.625rem",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "var(--text)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-muted)",
                            marginTop: "0.15rem",
                          }}
                        >
                          {project.tagline}
                        </p>
                      </div>

                      {/* ================= TECH STACK ================= */}

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.35rem",
                        }}
                      >
                        {project.techStack.slice(0, 5).map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}

                        {project.techStack.length > 5 && (
                          <span className="badge badge-neutral">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* ================= VIEW DETAILS ================= */}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(project);
                        }}
                        style={{
                          alignSelf: "flex-start",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: "var(--accent-soft)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          transition: "gap 0.2s ease",
                        }}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  VIEW ALL PROJECTS BUTTON
                  ONLY HOME PAGE
              ================================================= */}

              {!isProjectsPage && (
                <div
                  style={{
                    paddingTop: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={navigateToProjectsPage}
                    className="btn btn-outline"
                    style={{
                      display: "inline-flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    View All Projects
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SAME MODAL FOR HOME + ALL PROJECTS
      ================================================= */}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};
