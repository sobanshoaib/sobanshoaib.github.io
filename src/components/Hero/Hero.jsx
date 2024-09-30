import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";


export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Soban Shoaib</h1>
            <p className={styles.description}>I'm a Software Developer, Undergraduate Reseacher, and Student at the University of Alberta. </p>
            <a href="mailto:sobanshoaib7500@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt= "Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>

    );
}