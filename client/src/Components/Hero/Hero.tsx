import React, { FormEvent } from 'react'
import styles from './Hero.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Swal from 'sweetalert2'
import { icons } from '../../utils/index'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Hero = () => {
    
    useGSAP(() => {
        console.log("gsap")
        gsap.fromTo(".input", {y: "100%", opacity: 0}, {y: 0, opacity: 1, duration: 0.9, stagger: 0.3})
    })

    const handleInput = (e: Event) => {
        e.preventDefault()
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const formEle = document.querySelector("form") as HTMLFormElement;
        const formData = new FormData(formEle);

        if(!(formData.get("Email") as string)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter your E-mail!",
                background: "#101C2C",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        if(!validateEmail(formData.get("Email") as string)) {
            Swal.fire({
                icon: "error",
                title: "Oops... Invalid E-mail",
                text: "Please enter valid E-mail!",
                background: "#101C2C",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyX_zwCrqcDgrXX8PGDtzVaxuQW8TEdC1rm7BlL8oLv7mlh8Karr3snD4jUXBvAw1vX2g/exec', {
                method: 'POST',
                body: formData
            });
        
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    background: "#101C2C",
                    color: "#C2956B",
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }

            Swal.fire({
                icon: "success",
                title: "Waitlist Joined...!",
                background: "#101C2C",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 1700,
            })
            
            const text = await response.text();
            console.log('Response:', text)
            
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
                background: "#101C2C",
                color: "#C2956B",
                showConfirmButton: false,
                timer: 1500
            });
            console.error('There was a problem with the fetch operation:', error);
        } 
    }

  return (
    <section id='hero' className={styles.heroContainer}>
        <div className={styles.heroBody}>
            {/* <div>
                <form onSubmit={handleSubmit} className={`${styles.inputBody} input`}>
                    <input name='Email' className={styles.input} placeholder={`name@gmail.com`} autoComplete='off'/>
                    <button type='submit' className={styles.joinbutton}>Join Waitlist</button>
                </form>
            </div> */}
            <div className={styles.heroInnerBody}>
                <div className={`${styles.formContainer} input`}>
                    <h1 className={styles.formHeading}>Join our Waitlist</h1>
                    <p className={styles.formDesc}>Sign up for our news letter to receive the latest updates and insights straight to your inbox.</p>
                    <form className={styles.form} onSubmit={handleSubmit} n>
                        <input name='Email' className={styles.input} placeholder={`name@gmail.com`} autoComplete='off'/>
                        <button type='submit' className={styles.joinbutton}>Join Waitlist</button>
                    </form>
                </div>

                <div className={styles.iconsContainer}>
                    <div className={styles.iconsBody}>
                        {icons.map((icon) => <div onClick={() => window.open(icon.link)} className={`${styles.iconBody} input`}><icon.icon color={`#C2956B`} className={styles.icon}/></div>)}
                    </div>
                    
                </div>

                <div className={`${styles.redirect} input`}>
                    <Link to={`/about`} className={styles.redirectBody}>Learn More <GoArrowUpRight color={`#101C2C`} className={styles.icon}/></Link>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero