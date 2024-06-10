import React, { FormEvent, useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import mainbg from '../../assets/Images/mainbg.svg'
import gsap from 'gsap'
import toast from 'react-hot-toast'

const Hero = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(".input", {y: "100%", opacity: 0}, {y: 0, opacity: 1, duration: 1.3})
    })

    const validateEmail = (email: string): boolean => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const formEle = document.querySelector("form") as HTMLFormElement;
        const formData = new FormData(formEle);
        if(!validateEmail(formData.get("Email") as string)) {
            toast.error("Enter Valid Email");
            return;
        }

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyX_zwCrqcDgrXX8PGDtzVaxuQW8TEdC1rm7BlL8oLv7mlh8Karr3snD4jUXBvAw1vX2g/exec', {
                method: 'POST',
                body: formData
            });
        
            if (!response.ok) {
                toast.error("Try Again after sometime...");
                return;
            }
        
            const text = await response.text();
            console.log('Response:', text);
            toast.success("Waitlist Joined...!");
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            toast.error("Try Again after sometime...");
        }
    }

  return (
    <section id='hero' className={styles.heroContainer}>
        <div className={styles.heroBody}>
            <div>
                <form onSubmit={handleSubmit} className={`${styles.inputBody} input`}>
                    <input name='Email' className={styles.input} placeholder={`name@gmail.com`}/>
                    <button type='submit' className={styles.joinbutton}>Join Waitlist</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Hero