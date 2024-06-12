import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import olivialogo from '../../assets/Images/olivialogo.png'
import gsap from 'gsap'
import Swal from 'sweetalert2'

const Nabvar = () => {
  useEffect(() => {
    gsap.fromTo(".navItem", {y: "-100%", opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.5})
  })

  const postData = async (formData: FormData) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzmh_ImnQthTlM4V_BSaJ0qp0pfA_Qy02tXcXgyRB-y_ClPHpLWB-6LHwlD6xD9Cji5sA/exec', {
          method: 'POST',
          body: formData
      });
  
      if (response.status >= 200 && response.status < 300) {
          const responseData = await response.text();
          Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Form submitted successfully!',
              background: "#101C2C",
              color: "#C2956B",
              showConfirmButton: false,
              timer: 1500
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
          timer: 1500
      });
    }
  }   

  const openSwalForm = () => {
    Swal.fire({
      title: "Join us",
      background: "#101C2C",
      color: "#C2956B",
      html: `
        <form id="swalForm">
          <input type="text" id="swalName" name="Name" required placeholder="Name" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"><br><br>
          <input type="email" id="swalEmail" name="Email" required placeholder="E-mail" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"><br><br>
          <textarea id="swalReason" name="Reason" required placeholder="Why Join us ?" style="outline: 0; background-color: transparent; width: 100%;  padding: 15px; border: 1px solid #C2956B; border-radius: 12px" autocomplete="off"></textarea><br>
        </form>
      `,
      confirmButtonText: 'Submit',
      confirmButtonColor: "#C2956B",
      preConfirm: () => {
        const swalFormData = new FormData(document.getElementById('swalForm'));
        return swalFormData;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = result.value;
        postData(formData);
      }
    });
  }

  return (
    <nav id='navbar' className={styles.navbarContainer}>
        <div className={styles.navbarBody}>
            <div className={`${styles.imageContainer} navItem`}><img src={olivialogo}/></div>
            <div><button onClick={openSwalForm} className={`${styles.joinButton} navItem`}>Join Us</button></div>
        </div>
    </nav>
  )
}

export default Nabvar