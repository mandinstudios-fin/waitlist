import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import olivialogo from '../../assets/Images/olivialogo.png'
import gsap from 'gsap'
import Swal from 'sweetalert2'

type FormData = {
  name: string;
  email: string;
  reason: string;
}

const Nabvar = () => {
  useEffect(() => {
    gsap.fromTo(".navItem", {y: "-100%", opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.5})
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  // const handleSubmit = async () => {
  //   const { value: formValues } = await Swal.fire<FormData>({
  //     title: 'Join Us',
  //     background: "#101C2C",
  //     color: "#C2956B",
  //     html: `
  //       <form id="joinForm">
  //         <input class="${styles.input}" type="text" id="name" name="Name" placeholder="Name" value="${formData.name}" required style="background: transparent; padding: 15px; outline: 0;"> <br />
  //         <input class="${styles.input}" type="email" id="email" name="Email" placeholder="Email" value="${formData.email}" required style="background: transparent; padding: 15px; outline: 0;"> <br />
  //         <textarea class="${styles.input}" rows=5 columns=40 id="reason" name="Reason" placeholder="Why do you want to join us?" required style="background: transparent; padding: 15px; outline: 0;">${formData.reason}</textarea>
  //       </form>
  //   `,
  //     focusConfirm: false,
  //     confirmButtonText: 'Submit',
  //     preConfirm: () => {
  //       const name = document.getElementById('name') as HTMLInputElement;
  //       const email = document.getElementById('email') as HTMLInputElement;
  //       const reason = document.getElementById('reason') as HTMLTextAreaElement;
  //       return { name: name.value, email: email.value, reason: reason.value };
  //     }
  //   });

  //   if (!formData.name || !formData.email || !formData.reason) {
  //     Swal.fire({
  //         icon: 'error',
  //         title: 'Error',
  //         text: 'Please fill in all fields.',
  //         background: "#101C2C",
  //         color: "#C2956B",
  //         showConfirmButton: false,
  //         timer: 1500
  //     }).then(() => handleSubmit());
  //     return;
  //   }

  //   if (formValues) {
  //     const response = await fetch('https://script.google.com/macros/s/AKfycbzmh_ImnQthTlM4V_BSaJ0qp0pfA_Qy02tXcXgyRB-y_ClPHpLWB-6LHwlD6xD9Cji5sA/exec', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded' // Set the content type to application/x-www-form-urlencoded
  //       },
  //       body: new URLSearchParams(formValues).toString() // Convert formValues to URL-encoded format
  //     });
    
  //     // Check if the request was successful
  //     if (response.ok) {
  //         // Handle successful response
  //         const responseData = await response.json();
  //         console.log('Response data:', responseData);
  //     } else {
  //         // Handle error response
  //         console.error('Error:', response.statusText);
  //     }
    
  //   }
  // };

  return (
    <nav id='navbar' className={styles.navbarContainer}>
        <div className={styles.navbarBody}>
            <div className={`${styles.imageContainer} navItem`}><img src={olivialogo}/></div>
            <div><button className={`${styles.joinButton} navItem`}>Join Us</button></div>
        </div>
    </nav>
  )
}

export default Nabvar