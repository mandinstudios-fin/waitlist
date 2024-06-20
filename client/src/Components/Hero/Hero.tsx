import React, { FormEvent, useState } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Swal from 'sweetalert2';
import { icons } from '../../utils/index';
import { coinItems } from '../../utils/index';
import CoinsCard from './CoinsCard';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [buttonText, setButtonText] = useState<string>("Join");
    const [email, setEmail] = useState<string>("");

    useGSAP(() => {
        gsap.fromTo(".input", { y: "100%", opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.4 });
    });

    const validateEmail = (email: string): boolean => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter your E-mail!",
                background: "#000000",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }

        if (!validateEmail(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops... Invalid E-mail",
                text: "Please enter a valid E-mail!",
                background: "#000000",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 3000
            });
            return;
        }

        try {
            setButtonText("Joining...");
            const response = await fetch('https://api.mandinstudios.com/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    background: "#000000",
                    color: "#C2956B",
                    showConfirmButton: false,
                    timer: 3000
                });
                setButtonText("Join");
                return;
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Waitlist Joined...!",
                    background: "#000000",
                    color: "#C2956B",
                    showConfirmButton: false,
                    timer: 3000,
                    
                });
                setButtonText("Join");
                setEmail("");
            }

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
                background: "#000000",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 2000
            });
            setButtonText("Join");
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <section id='hero' className={styles.heroContainer}>
            <div className={styles.heroBody}>
                <div className={styles.heroInnerBody}>
                    <div className={`${styles.formContainer} input`}>
                        <h1 className={styles.formHeading}>Join our Waitlist</h1>
                        <p className={styles.formDesc}>Sign up for our newsletter to receive the latest updates and insights straight to your inbox.</p>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                name='Email'
                                id='Email'
                                className={styles.input}
                                placeholder='name@gmail.com'
                                autoComplete='off'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type='submit' className={styles.joinbutton}>{buttonText}</button>
                        </form>
                        {/* <div className={`${styles.pseudo1} border-t ${styles.top}`}></div>
                        <div className={`${styles.pseudo2} border-l ${styles.left}`}></div> */}
                    </div>

                    <div className={styles.iconsContainer}>
                        <div className={styles.iconsBody}>
                            {icons.map((icon) => (
                                <p
                                    key={icon.link}
                                    onClick={() => window.open(icon.link)}
                                    className={`${styles.iconBody} input parent ${icon.link === "/about" ? "bg-orange-bg" : ""}`}>
                                    <icon.icon className={`${styles.icon} child ${icon.link === "/about" ? "animate-pulse text-blue-text" : "text-[#C2956B]"}`} />
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.coinsContainer}>
                        <div className={`${styles.coinsHeading} input`}><h1>Top Watchlist</h1></div>
                        <div className={styles.coinsBody}>
                            {coinItems.map((coin, i) => (
                                <CoinsCard key={i} {...coin} className={`input`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
