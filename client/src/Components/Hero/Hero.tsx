import React, { FormEvent, useState } from 'react';
import weblogo from '../../assets/Images/mobile-div.svg'
import styles from './Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Swal from 'sweetalert2';
import { icons } from '../../utils/index';
import { coinItems } from '../../utils/index';
import CoinsCard from './CoinsCard';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Hero = () => {
    const [buttonText, setButtonText] = useState<string>("Join Waitlist");
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
                    {/* <div className={`${styles.formContainer} input`}>
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
                    </div> */}
                    <div className={styles.contentContainer}>
                        <div className={styles.content1}>
                            <p>Amazing Resources Coming Your Way!</p>
                        </div>
                        <div>
                            <p className={styles.content2}><span className={styles.content2part1}>Ready to Revolutionize Your</span> <br className='hidden lg:block'/> Olin Token? Join the Olivia<br className='hidden lg:block'/> <span className={styles.content2part2}>Waitlist Today</span></p>
                        </div>
                        <div className={styles.content3}>
                            <p className='hidden xl:block'>Discover an Olin Token of incredible Olivia Finance and be prepared for and exciting wave <br className='hidden xl:block'/> of new resources on the finance. <span></span>Sign up to our waitlist to be notified when we launch so<br className='hidden xl:block'/> you don't miss out on stunning Olin token resources.</p>
                            <p className='block xl:hidden'>Discover an Olin Token of incredible Olivia Finance and be prepared for and exciting wave <br className='hidden xl:block'/> of new resources on the finance.</p>
                        </div>
                    </div>

                    <div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                name='Email'
                                id='Email'
                                className={styles.input}
                                placeholder='Your Email Adddress'
                                autoComplete='off'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type='submit' className={styles.joinbutton}>{buttonText} <MdOutlineArrowRightAlt className={styles.joinIcon}/></button>
                        </form>
                    </div>

                    {/* <div className={styles.iconsContainer}>
                        <div className={styles.iconsBody}>
                            {icons.map((icon) => (
                                <p
                                    key={icon.link}
                                    onClick={() => window.open(icon.link)}
                                    className={`${styles.iconBody} input ${icon.link === "/about" ? "bg-orange-bg" : ""}`}>
                                    <icon.icon className={`${styles.icon} ${icon.link === "/about" ? "animate-pulse text-blue-text" : "text-[#C2956B]"}`} />
                                </p>
                            ))}
                            <Link to={`/about`} className={`${styles.arrowBody} input`}><GoArrowUpRight className={styles.arrow}/></Link>
                        </div>
                    </div> */}

                    <div className={styles.imageContainerr}>
                        <div className={styles.imageBody}>
                            <img className={styles.image} src={weblogo}/>
                        </div>
                    </div>

                    <div className={styles.coinsContainer}>
                        <div className={`${styles.coinsHeading} input`}><h1>Top Bitcoins Supply</h1></div>
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
