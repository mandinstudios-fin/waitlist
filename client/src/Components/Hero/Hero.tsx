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

    const handleSubmit = () => {
        const email = inputRef.current?.value
        if(!validateEmail(email)) {
            toast.error("Enter Valid Email...");
            console.log("inlaud")
        }
        // e.preventDefault();

        // const form: HTMLFormElement = document.querySelector("form");
        // const formData = new FormData(form);
        // const email: string | undefined = formData.get("Email") as string | undefined;
        // if(!email || !validateEmail(email)) {
        //     toast.error("Enter Valid Email")
        // }
        
        
        // fetch('https://script.google.com/macros/s/AKfycby2lXZ7rHrwdiNabb-kV3tYB2Rf6Ikh6F0aLk6tqjkH9bY3qmoy_yqqLkp38xMCFtZX/exec', {
        //     method: 'POST',
        //     body: formData,
        // })
    }

  return (
    <section id='hero' className={styles.heroContainer}>
        <div className={styles.heroBody}>
            <div>
                <div className={`${styles.inputBody} input`}>
                    <input ref={inputRef} className={styles.input} placeholder={`name@gmail.com`}/>
                    <button onClick={handleSubmit} className={styles.joinbutton}>Join Waitlist</button>
                </div>
            </div>

            <div className={styles.imageforSmallerDevices}>

            </div>
        </div>
    </section>
  )
}

export default Hero