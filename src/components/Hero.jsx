import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-secondary" />
                    <div className="w-1 sm:h-80 h-40 red-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Enchanté, moi c'est <span className="text-secondary">Titouan</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Je fais
                        <Typewriter
                            options={{
                                strings: [
                                    "du développement web",
                                    "du JavaScript",
                                    "du Python",
                                    "de la CyberSecurité",
                                    "de l'intelligence artificielle",
                                    "de l'administration système",
                                    "de l'algorithmique",
                                    "du développement backend",
                                    "de la programmation orientée objet",
                                    "de la gestion de bases de données",
                                    "du DevOps",
                                    "de l'automatisation avec scripts"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                loopCount: Infinity,
                                deleteSpeed: "natural",
                                pauseFor: 1500,
                            }}
                        />
                    </p>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;