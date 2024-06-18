import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import olivialogo from '../../assets/Images/olivialogo (2).svg';
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [buttonText, setButtonText] = useState("Contribute");
  const location = useLocation().pathname;
  const navigate = useNavigate();

  useGSAP(() => {
    if(location === `/`) {
      gsap.fromTo(".navItem", {y: "-100%", opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.5});
    }
  });

  const postData = async (data) => {
    setButtonText("Submitting...");
    try {
      const response = await fetch('https://api.mandinstudios.com/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form submitted successfully!',
          background: "#101C2C",
          color: "#C2956B",
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        console.error('Error:', response.statusText);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to submit form. Please try again later.',
          background: "#101C2C",
          color: "#C2956B",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again later.',
        background: "#101C2C",
        color: "#C2956B",
        showConfirmButton: false,
        timer: 2000
      });
    }
    setButtonText("Contribute");
  };

  const navigateTo = () => {
    navigate(`/about`);
  };

  const openSwalForm = () => {
    Swal.fire({
      title: "Join us",
      background: "#101C2C",
      color: "#C2956B",
      html: `
        <form id="swalForm">
          <p>Join us as a developer and be part of our dynamic team creating innovative solutions.</p> <br />
          <input type="text" id="swalName" name="Name" required placeholder="Name" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"><br><br>
          <input type="email" id="swalEmail" name="Email" required placeholder="E-mail" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"><br><br>
          <textarea id="swalReason" name="Reason" required placeholder="Why Join us ?" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"></textarea><br>
        </form>
      `,
      confirmButtonText: 'Submit',
      confirmButtonColor: "#C2956B",
      preConfirm: () => {
        const nameInput = document.getElementById('swalName') as HTMLInputElement;
        const emailInput = document.getElementById('swalEmail') as HTMLInputElement;
        const reasonInput = document.getElementById('swalReason') as HTMLTextAreaElement;
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const emailValid = /\S+@\S+\.\S+/.test(email);
        const reason = reasonInput.value.trim();

        if (!name || !emailValid || !reason) {
          Swal.showValidationMessage(`Please fill out all fields correctly.`);
          return false;
        } else {
          const formData = {
            name,
            email,
            description: reason
          };
          postData(formData);
        }
      }
    });
  };

  return (
    <nav id='navbar' className={styles.navbarContainer}>
      <div className={styles.navbarBody}>
        <div className={`${styles.imageContainer} navItem`}>
          <img src={olivialogo} onClick={() => navigate(`/`)} alt="Olivialogo" />
        </div>
        <div>
          <button onClick={location === "/" ? navigateTo : openSwalForm} className={`${styles.joinButton} navItem`}>
            {location === "/" ? "Know More" : buttonText}
            {location === "/" && <GoArrowUpRight size={30}/>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
