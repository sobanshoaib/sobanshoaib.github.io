import React, {useState} from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleProjects = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - visibleProjects : prevIndex-1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - visibleProjects ? 0 : prevIndex + 1
        );
    };

    const displayedProjects = projects.slice(
        currentIndex,
        currentIndex + visibleProjects
        ).concat(
            currentIndex + visibleProjects > projects.length
            ? projects.slice(0, (currentIndex + visibleProjects) % projects.length)
            : []
    );
    
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.carousel}>
                <button className={styles.arrow} onClick={handlePrev}>
                    &larr;
                </button>
                <div className={styles.projectWrapper}>
                    {displayedProjects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
                <button className={styles.arrow} onClick={handleNext}>
                    &rarr;
                </button>
            </div>
        </section>
    );
};













// import React, { useState } from "react";
// import styles from "./Projects.module.css";
// import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";

// export const Projects = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const visibleProjects = 3;

//     // Handle previous arrow click (go backward through the projects)
//     const handlePrev = () => {
//         // Adjust the index correctly when going backward
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0
//                 ? projects.length - visibleProjects // If at the beginning, wrap to the end
//                 : prevIndex - visibleProjects // Otherwise, move back by visibleProjects
//         );
//     };

//     // Handle next arrow click (go forward through the projects)
//     const handleNext = () => {
//         // Ensure index wraps around when reaching the end
//         setCurrentIndex((prevIndex) =>
//             (prevIndex + visibleProjects) % projects.length // Wrap around using modulo
//         );
//     };

//     // Slice the projects to display only the visible ones
//     const displayedProjects = projects.slice(currentIndex, currentIndex + visibleProjects);

//     return (
//         <section className={styles.container} id="projects">
//             <h2 className={styles.title}>Projects</h2>
//             <div className={styles.carousel}>
//                 {/* Left Arrow */}
//                 <button className={styles.arrow} onClick={handlePrev}>
//                     &larr;
//                 </button>
//                 {/* Projects Wrapper */}
//                 <div className={styles.projectWrapper}>
//                     {displayedProjects.map((project, index) => (
//                         <div key={index} className={styles.projectCard}>
//                             <ProjectCard project={project} />
//                         </div>
//                     ))}
//                 </div>
//                 {/* Right Arrow */}
//                 <button className={styles.arrow} onClick={handleNext}>
//                     &rarr;
//                 </button>
//             </div>
//         </section>
//     );
// };

