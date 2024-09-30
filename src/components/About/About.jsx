import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return (
         <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Curson icon"/>
                    <div className={styles.aboutItemText}>
                        {/* <h3>Frontend Developer</h3> */}
                        <p>Third year Computer Science student at the University of Alberta</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        {/* <h3>Bakcend Developer</h3> */}
                        <p>Related courswork includes Databases and Algorithms, Assembly programming, Software Engineering, Web Architecture, Operating Systems, and more</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
                    <div className={styles.aboutItemText}>
                        {/* <h3>UI</h3> */}
                        <p>Worked on multi-variable optimization as an Undergraduate Student Reseacher</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
 
    );
}
