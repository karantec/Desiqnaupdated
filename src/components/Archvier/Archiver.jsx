import React, { useState } from 'react';

const CardComponent = () => {
  // Sample data (replace this with your actual data)
  const data = [
    {
     subtitle: "Tier-3 College to OffCampus SDE- Internship Offer from Adobe",
    imageSrc: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762427876/WhatsApp_Image_2025-11-06_at_16.44.04_d23ac4e3_xttuoc.jpg",
    content: "Kumar K student cracks OffCampus Adobe SDE internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
    student: "Anya Sharma",
    companyLogo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Emblem.png",
  },
   {
    subtitle: "Service Based to 25LPA SDE Offer at Amazon",
    content: "Kumar K Mentoring Student cracks off-campus SDE-offer from Amazon after 8 months of advanced DSA(OA + CP) training",
    companyLogo:"https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    student: "Aman Advani",
    imageSrc: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762429189/8awJisQrdmQ-HD_zmbi5u.jpg",
},
    
    {
    
     imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1762423413/WhatsApp_Image_2025-11-06_at_15.12.02_5539f880_urbzg3.jpg',
    subtitle: 'SDE Offer Amazon', 
     content: 'Kumar K student cracks  Off campus Amazon  SDE  internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship',
     student:'Vyom Goyal',
     companyLogo:'https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc'
   
   },

    {
     imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1758607984/WhatsApp_Image_2025-09-23_at_01.04.00_a9a55e7c_v8iczu.jpg',
    subtitle: "Tier-4 College to OffCampus SDE- Internship Offer from Google",
    content: "Kumar K Mentoring Student cracked Off-Campus SDE- Internship Offer from Google after 8 months of advanced DSA(OA + CP + System Design) training.",
    student:'Yashasvi Sharma',
    companyLogo: "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
  },

   {
     imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1762425009/WhatsApp_Image_2025-11-06_at_15.58.51_4043db9e_flpein.jpg',
    subtitle: "Tier-3 College to Google + Amazon Internship",
    content: "Kumar K Mentoring Student cracked  SDE- Internship Offer from Google  and Amazon after 8 months of advanced DSA(OA + CP + System Design) training.",
    student:'Vivek Haldar',
    companyLogo:'https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc'
  },

  {
    
     imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1762422404/WhatsApp_Image_2025-11-06_at_15.12.40_5f9aa3b3_ujhkba.jpg',
    subtitle: 'SDE Offer Nutanix 60LPA', 
     content: 'Kumar K student cracks  60LPA SDE offer from Nutanix after 8 months of high level DSA + OA + CP training and 1-1 Mentorship',
     student:'Charul',
     companyLogo:'https://imgs.search.brave.com/XM51Jte_QPvQc1XDvKnNbGcDij2ovYyKVQwSMgcMuaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L051dGFuaXgtTG9n/by01MDB4MjgxLnBu/Zw'
   
   },
    {
    
     imageSrc: 'sheenam.jpg',
    subtitle: 'SDE Offer OFF Campus Flipkart', 
     content: 'Kumar K student from tier-3 college cracks off-campus engineering offer from Flipkart after 10 months of high level DSA + OA + CP training and 1-1 Mentorship',
     student:'Sheenam Gupta',
     companyLogo:'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png'
   
   },
   


   { 
    imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1765222348/WhatsApp_Image_2025-12-09_at_01.01.33_f6b65489_j7iidd.jpg',
    subtitle: 'SDE Offer Off Campus from Commvault!', 
     content: 'Kumar K Mentoring Student cracked Off-Campus Full-Time SDE offer from Commvault after 8 months of advanced DSA(OA + CP + System Design) training',
     student:'Revanth Srinivasa',
     companyLogo:'https://imgs.search.brave.com/wYcxhhIBOX7VMDl_JYaJTpHI2GW_yZb6gVSEpElgD0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZzJjcm93ZC5j/b20vdXBsb2Fkcy9w/cm9kdWN0L2ltYWdl/LzczZTkyYWQzOTA1/NDNkOGQyOTIwZGEx/YjNhYzc3OTRkL2Nv/bW12YXVsdC1jbG91/ZC5wbmc'
   
   
   
   },
   { 
    imageSrc: 'riyamicrosoft.jpg',
    subtitle: 'SDE Offer Off Campus from Microsoft!', 
     content: 'Kumar K student from tier-3 college cracks off-campus engineering offer from Microsoft after 8 months of high level DSA + OA + CP training',
     student:'Riya Das',
     companyLogo:'./CompanyLogo/micro.jpg'
   
   
   
   },
   { 
    imageSrc: 'Ach.jpg',
    subtitle: 'Kumar K Student Cracks offer from Google!', 
     content: 'Kumar K Mentoring Student cracks  offer from Google after 8 months of advanced DSA(OA + CP) training',
     student:'Achyut Gupta ',
     companyLogo:'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png'
   },
   { 
    imageSrc: 'shivam.jpg',
    subtitle: 'Kumar K Student Cracks offer from Google!', 
     content: 'Kumar K Mentoring Student cracks  offer from Google after 8 months of advanced DSA(OA + CP) training',
     student:'Shivam Kumar',
     companyLogo:'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png'
   },
   { imageSrc: 'sunpreet.jpg',
    subtitle: 'SDE Offer Off Campus from Xperi Inc!', 
     content: 'Kumar K student from tier-3 college cracks off-campus SDE Intern offer from Xperi Inc after 8 months of high level DSA + OA + CP training',
     student:'Sunpreet Sabharwal ',
     companyLogo:'./CompanyLogo/xperi.jpg'
   },
    {
      
      imageSrc: 'pranav.jpg',
       subtitle: 'Tier-4 College to 40+ LPA',
      content: 'Kumar K Student  cracks off campus SDE Intern + Fulltime offer from Linkedin(40 LPA CTC) after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Pranav Kulkarni',
      companyLogo:'./CompanyLogo/link.jpg'
    },
    {
      
      imageSrc: 'likhitKumar.jpg',
       subtitle: 'SDE Offer  from JustPay',
      content: 'Kumar K Student  cracks off campus SDE I offer from JustPay after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Likhith Kumar',
      companyLogo:'./CompanyLogo/justpay.jpg'
    
    
    },
    {
      
      imageSrc: 'kumarabhishek.jpg',
       subtitle: 'SDE offer from Samsung R&D',
      content: 'Kumar K Student  cracks off campus SDE Intern + Fulltime offer from Samsung R&D after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Kumar Abhishek',
      companyLogo:'./CompanyLogo/Samsung.png'
    
    
    
    },
    { 
     
      imageSrc: '/Achiever/Ritik.jpeg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks Microsoft SDE Intern after 8 months of FAANG level DSA(OA + Interview) Training with us! ',
      student:'Ritik',
      companyLogo:'./CompanyLogo/micro.jpg'
  
    },
    { 
      imageSrc: '/Achiever/anirudha.jpg',
      content: ' Kumar K Student cracked SDE-2 offer Offcampus at Visa after DSA + System Design Training + 1 -1 Mentoring from Kumar K',
      student:'Anirudha',
      
      companyLogo:'./CompanyLogo/visa.png'
     
    },
    { 
      imageSrc: 'ist.jpg',
      content: ' Kumar K  Mentoring Student cracks off-campus SDE offer from PhonePe after 8 months of advanced DSA(OA+CP)training',
      student:'MD ISTAKHAR ANSARIMD',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovIQy7Sqh32fhLLF9N9_uRE4ZgnwQ4FMu2w&s',
    },
    { 
      imageSrc: 'sagar.jpg',
      content: "Kumar K student cracks SDE-3 Offer from Walmart Global Tech India!  after undergoing live training for DSA + OA + System Design" ,
      student:'Sagar Bansal',
      companyLogo:'./CompanyLogo/walmart.png'
    
    },

    { imageSrc: '/Achiever/Rashi Bhave.jpeg',
    subtitle: 'SDE Offer OFF Campus Microsoft', 
     content: 'Kumar K  Student Rashi Bhave - Cracked 48LPA Microsoft Off Campus Offer  as a fresher in recession. This was possible because we personally guided her before each interview round. Trained her hard for FAANG level OA + Interview.😍😍😇😇      ',
     student:'Rashi Bhave',
     companyLogo:'https://imgs.search.brave.com/cU13n8Wu61ZfYrYhBzrndNulyMPpE6gXQZmyS9kn4tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLTQucG5n'
   },
    { 
      imageSrc: '/Achiever/akhil.jpg',
      content: ' Kumar K Student cracks  SDE-2 offer  at BNY Mellon after working for 1.5 years in a service based company',
      student:'AKHIL B B ',
      companyLogo:'https://download.logo.wine/logo/The_Bank_of_New_York_Mellon/The_Bank_of_New_York_Mellon-Logo.wine.png'
    
    },
    { imageSrc: '/Achiever/Nidhi Kumari.jpeg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student Nidhi Kumari cracks 48 LPA Amazon offcampus SDE offer  after  8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Nidhi Kumari',
      companyLogo:'./CompanyLogo/amazon.jpg'
    },
    { 
    
      imageSrc: '/Achiever/Dev Sharma.jpeg',
    subtitle: 'Service Based to Product Based',
     content: 'Kumar K Student cracks Zomato Off Campus 28 LPA offer after 8 months of FAANG level DSA(OA + Interview) Training with us! ' ,
     student:'Dev',
     companyLogo:'./CompanyLogo/zomato.jpg'
   
   
   
   },
   {
      
      
    imageSrc: '/Achiever/Gauri Kadyan.jpeg',
     subtitle: 'Tier-4 College to 40+ LPA',
    content: 'Student cracks 18 LPA SDE Offer from Barclays after 8 months of FAANG level DSA(OA + Interview) Training with us!',
    student:'Gauri',
    companyLogo:'./CompanyLogo/bercalys.jpg'
  
  
  },
  { 
    imageSrc: '/Achiever/karman.jpg',
    content: 'Kumar K student with no job offer as 2023 CS Grad(was really worried) ends up cracking 4 offcampus offers of 12+LPA with maximum being 16LPA  because of 1-1 Mentoring + Off Campus Job Referral Support',      
    student:' Karrman',
    companyLogo:'https://upload.wikimedia.org/wikipedia/commons/e/e5/ANSYS_logo.png'
  
  
  },
    { 
     
      imageSrc: '/Achiever/sharmista.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks Off Campus SDE Offers from PhonePe and Precisely after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Sharmistha Chakraborty',
      companyLogo:'https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg'
    
    
    
    },
    { 
     
      imageSrc: '/Achiever/Anwesha.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K student cracks NVIDIA and Qualcomm after 8 months of daily live DSA + OA + CP Training and 1-1 Mentorship',
      student:' Anwesha Kar ',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFDaTMtM3sUbibnUIq3Glz2Vpp2qzyknrDg7fOtIWpw&s'
    
    
    
    },

    { 
     
      imageSrc: '/Achiever/Salman.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Off campus from IBM ',
      student:'Salman Uddin.',
      companyLogo:'https://mma.prnewswire.com/media/1425093/IBM_LOGO.jpg?p=facebook'
    
    
    
    },

    { 
     
      imageSrc: '/Achiever/Suvankar.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Offcampus from Pursuit ',
      student:'Suvankar Mahato',
      companyLogo:'https://www.pursuitsoftware.com/wp-content/uploads/2022/04/PursuitSoftwareLogo.png'
    
    
    
    },

    { 
     
      imageSrc: '/Achiever/Sudipto.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Offcampus from Pursuit ',
      student:'Sudipto Paul',
      companyLogo:'https://www.pursuitsoftware.com/wp-content/uploads/2022/04/PursuitSoftwareLogo.png'
    
    
    
    },
    { 
      imageSrc: '/Achiever/sheel.jpg',
      content: ' Kumar K student  cracks 22 LPA SDE Offer from Samsung after 8 months of FAANG level DSA(OA + Interview) Training with us! ',
      student:'Sheel Aggarwal',
      companyLogo:'./CompanyLogo/Samsung.png'
    
    },

    { imageSrc: '/Achiever/akhil1.jpg',
     subtitle: '5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company',
      content: ' Kumar K Student who was a DSA beginner and was working in service based company cracks 30 LPA Off Campus SDE Offer from Flipkart after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Akhil Sharma',
      companyLogo:'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png'
    
  
    },
    
    { imageSrc: '/Achiever/Animesh Kumar.jpeg',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: 'Kumar K  student cracks  28LPA  BNY Mellon SDE Offer   ',
      student:' ANIMESH KUMAR KAR',
      companyLogo:'./CompanyLogo/Swiggy.png'
    
    },
    { 
     imageSrc: '/Achiever/Arye.jpg',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K student from  tier-3 college cracks 25 LPA Cisco Job offer  after 8 months of training for FAANG       ',
      student:'Aryennh Kulkarni',
      companyLogo:'./CompanyLogo/cisco.jpg'
    },
    { 
      imageSrc: '/Achiever/Suraj.jpg',
      content: ' Kumar K Student cracks Intel 23LPA offer  after 8 months of training for FAANG ',
      student:'Suraj Singh.',
      companyLogo:'https://th.bing.com/th/id/R.8e8e5d3e0b38ecd0688082625bbf1591?rik=KXVMRQZ4DisUpA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png&ehk=jBzDgPyZuKWPCApTheGKUI2UkgluVE%2bhStxECioQ3lg%3d&risl=&pid=ImgRaw&r=0'
    },
   
    { imageSrc: '/Achiever/prastuti Mazumdar.jpeg',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K student with no job offer as 2023 Electrical Grad(was really worried) ended up cracking 18LPA OffCapmpus! 🥳🥳',
      student:'Prastuti',
     companyLogo:'https://th.bing.com/th/id/OIP.RAkemAFXWtTRWTqbKjfJVQAAAA?rs=1&pid=ImgDetMain'
    
    
    
    },
    { imageSrc: '/Achiever/Tanmay Shukla.jpeg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks 18 LPA SDE Offer from Barclays after FAANG level training for OA + Interview.',
      student:'Tanmay',
      companyLogo:'./CompanyLogo/bercalys.jpg'
    
    
    
    },
    { 
      imageSrc: '/Achiever/Sai Soumyak nanda.jpeg',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: 'Student cracks Cisco (25LPA) after FAANG level training for OA + Interview',
      student:'Sai Soumyak Nanda      ',
      companyLogo:'./CompanyLogo/cisco.jpg'
    
    },
    { imageSrc: 'shreeja.jpg',
      content: 'Kumar K  student cracked 14 LPA job offer from Microchip   in just   2-3 months preparation from basic to advanced by our personalised Mentoring + Training + Course.(special support before the interview!)',
      student:'Shreeja ',
      companyLogo:'https://logos-download.com/wp-content/uploads/2016/09/Microchip_logo.png'
    
    
    
    },
    { imageSrc: '/Achiever/Sandeep.jpg',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: ' Kumar K Student working in service based company cracks 18 lpa; product based company ',
      student:'Sandeep Nuka',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8YK7FU2V3gD66wg6xPVbu3nHrOPVF71TXGUmLDhcrg&s'
    
    
    
    },
    { imageSrc: '/Achiever/Sejal.jpg',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: ' Kumar K Student cracks Microsoft Off Campus offer after 8 month FAANG level OA + Interview + CP training',
      student:'Sejal Aggarwal',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s'
    
    
    
    },
    { imageSrc: '/Achiever/Anurag.jpg',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',
      content: ' Kumar K Student fully beginner at DSA; cracks ZScaler 28 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!Anurag Tiwari',
      student:'Anurag Tiwari',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s'
    
    
    
    },
    { imageSrc: '20.jpg',
     subtitle: 'SDE Offer OFF Campus Microsoft', 
      content: ' Kumar K student Cracks Microsoft SDE Offer Off Campus after training with us for 8 months!',
      student:'Vinita Katlamudi',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s'
    
    
    
    },
   
    { 
      imageSrc: '/Achiever/Abhishek.jpg',
     subtitle: '2023 Grad with Gap to Off campus SDE offer at Societe Generale',
      content: ' Kumar K Student with 2023 year of graduation cracks off campus SDE offer at Societe Generale; Top PBC despite having a gap of 8+ months.',
      student:'Abhishek Mishra',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU7FQj7VG6wF6TsSHLVtjw6o0bAw-UllEmhDC66XonA&s'
    
    
    
    },
    { 
    imageSrc: '/Achiever/Surya.jpg',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: ' Kumar K Student switched from service based to Product based company Ford 18 LPA  SDE Offer',
      student:'Surya',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr6wS8AXnQG7eE4AfO_6_g7kxGZNmd4m7P-jNpWfwhA&s'
    
    
    
    },
    {
 imageSrc: '/Achiever/Prakriti.jpg',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: ' Kumar K Student cracks Goldman Sachs OFF Campus SDE Offer after daily live training ofOur Recent Selection 8 months.',
      student:'Prakriti Chatterjee',
      companyLogo:'https://1000logos.net/wp-content/uploads/2016/12/Goldman-Sachs-Logo.jpg'
    
    
    
    },
    { imageSrc: '/Achiever/Sarthak.jpg',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: ' Kumar K Student from tier-3 college; cracks SDE Offer from Swiggy by training super hard with us for DSA(OA + Interview) + LLD + HLD!',
      student:'Sarthak Rohtagi',
      companyLogo:'https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'
    
    
    
    },
    { 
     

     imageSrc: '/Achiever/Raj.jpg',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K Student fully beginner at DSA; cracks Cisco 25 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!',
      student:'Raj Kumar',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZeYHBnxRPV0aXyjgSXiZOwQKHKMuY9U8yKtrPC39wQ&s'
    
    
    
    },
   
    { imageSrc: 'Sai.jpg',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K Student Jagadeesh cracks 18 LPA offcampus SDE offer after getting laid off from Infosys service based company',
      student:'Jagadeesh',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Xo2UzT9P7pdNhS3E5b6IxfjYi9JbwuxbraSLzn8&s'
    
    
    
    },
    { imageSrc: '/Achiever/ShivamKedia.jpg',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K Student working in service based company cracks 11 lpa; product based company ',
      student:'Shivam Kedia',
       companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Xo2UzT9P7pdNhS3E5b6IxfjYi9JbwuxbraSLzn8&s'
      // companyLogo:''
    
    
    
    },
    
    {
       imageSrc: 'name.jpg',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'Kumar K Student Cracks Cisco after 8 month Faang level DSA + OA Training',
      student:'Naman Khurana.',
      companyLogo:'./CompanyLogo/cisco.jpg'
    
    
    
    },
    { imageSrc: '/Achiever/ARUN.jpg',
     subtitle: 'SUBTITLE 1',
      content: 'Kumar K Student with 0 college placements cracks offcampus 10LPA offer from Zoho ',
      student:'Arunraj Vadivel',
      companyLogo:'https://w7.pngwing.com/pngs/939/823/png-transparent-zoho-office-suite-customer-relationship-management-zoho-corporation-email-computer-software-email-miscellaneous-text-trademark.png'
    
    
    
    },
    { imageSrc: '/Achiever/Dhruv Pandey.jpeg',
      title: 'Card Title 1',
      content: 'Kumar K Student who was constantly failing for 8 months cracks 15 LPA; SDE offer from Fiserv',
      student:'Dhruv Pandey ',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloHS51wFKaN9GYkVZw1JDqV4ZzPCeyZl8TvBukHpINQ&s'
      
    },
    
{ imageSrc: '/Achiever/Nandhu.jpg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K Student cracks Offcampus remote offer from Germany despite being from tier-3 college.',
      student:'Nandhu Aripelli',
      companyLogo:'https://cdn.1min30.com/wp-content/uploads/2018/07/Symbole-Goldman-Sachs.jpg'
      
    },
    
    {
      imageSrc: 'srisagesh.jpg',
      
      subtitle: 'SUBTITLE 1',
     content: 'Kumar K Student cracks ALLEN Digital  after 8 month training for FAANG level OA + Interview. ',
     student:'SaiSri Angajala',
     companyLogo:'https://th.bing.com/th/id/OIP.zGqbh9oFOgNSI9LTShHrhwHaGM?rs=1&pid=ImgDetMain'
   
   },
    
    {
       imageSrc: 'Arav.jpg',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: 'Kumar K Student cracks ZScaler after 8 month training for FAANG level OA + Interview. ',
      student:'Aarav Srivastava',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s'
    
    },
{ imageSrc: '/Achiever/Khusboo Agarwal.jpeg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: 'Kumar K Student cracks Zeta Intern + FTE Offcampus after training hard for FAANG level OA + Interview from the Kumar K 800 hour course!.',
      student:'Khushboo Agarwal',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZqnA4SkOp7SuTJ11s1hk2rg0391QS0kG7o_-jj71VA&s'
    
    },

  {
      
      
      imageSrc: '/Achiever/JaimitKumar Panchal.jpeg',
       subtitle: 'Tier-4 College to 40+ LPA',
      content: 'Kumar K Student cracks 18 LPA offer from HP despite working at 3lpa service based company in just 5 months!',
      student:'Jaiminkumar Pranchal',
      companyLogo:'https://th.bing.com/th/id/R.fa1948e3d23672dba74325f91acfa4f1?rik=rQ52H1LvjYHeGw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-hp-inc-png-hp-inc-891.png&ehk=67rDGhDbyTv4QMeGeXZeZm%2bNEs4%2ft%2bHQxsCXmfPQhTI%3d&risl=&pid=ImgRaw&r=0'
    
    
    
    },
    { 
     
      imageSrc: '/Achiever/Priyanshi Srivastava.jpeg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student who got laid off from 3LPA job cracks senior software engineer offer off campus at BT Group',
      student:'Priyanshi Srivastava',
      companyLogo:'https://th.bing.com/th/id/OIP.ROu7aRWZczove8R9bzH6owHaE8?rs=1&pid=ImgDetMain'
    },
    { imageSrc: '/Achiever/Bharat Goyal.jpeg',
     subtitle: '5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company',
      content: 'Kumar K Non IT background student with years of gap cracks 28 lpa SDE Offer Offcampus!',
      student:'Bharat Goyal ',
      companyLogo:'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png'
    
    
    
    },
    { imageSrc: '/Achiever/Animesh Bajpai.jpeg',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: 'Kumar K Student cracks Cisco SDE Intern + Full Time off campus by undergoing FAANG level OA + Interview Training  ',
      student:'Animesh Bajpai ',
      companyLogo:'./CompanyLogo/cisco.jpg'
    
    
    },
    { imageSrc: '/Achiever/Harshit Raj.jpeg',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: ' Kumar K Student cracked Paypal Intern + Full Time offer after training super hard for FAANG LEVEL DSA(OA + interview!)',
      student:'Harshit Raj.',
      companyLogo:'https://static.vecteezy.com/system/resources/previews/022/100/701/non_2x/paypal-logo-transparent-free-png.png'
    
    
    
    },
    { imageSrc: '/Achiever/Aalia Lokhandwala.jpeg',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',
      content: ' Kumar K Student with 2 years experience in service based cracks 38 LPA SDE-2 offers at Lenskart + Gupshup + WayFair + Kindred Group       ',
      student:'Aalia Lokhandwala.',
      companyLogo:'https://th.bing.com/th/id/OIP.rcSGAXBa3Mxb15rfgsfDCwHaEK?rs=1&pid=ImgDetMain'
    
    
    
    },
    { imageSrc: '/Achiever/umang.jpg',
     subtitle: 'SDE Offer OFF Campus Microsoft', 
      content: ' Kumar K Student with 0 job offer as 2023 Grad cracks off campus Salesforce SDE Offer 28 LPA',
      student:'Umang Sharma.',
      companyLogo:'./CompanyLogo/micro.jpg'
    
    
    
    },
   
    { imageSrc: '/Achiever/SarthakJatla.jpg',
     subtitle: '2023 Grad with Gap to Off campus SDE offer at Societe Generale',
      content: ' Kumar K Student who used to fail interviews and online test cracks 18 lpa remote international SDE offer from US based company Avaya      .',
      student:'Sarthak Jatale',
      companyLogo:'https://th.bing.com/th/id/OIP.euLoeTxSsicVplmaxArbCAHaHa?rs=1&pid=ImgDetMain'
    
    
    
    },
    { 
    imageSrc: '/Achiever/Neer.jpg',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: 'Kumar K Student cracks 31 LPA Blackrock offer after training hard for 8 months and never missing a single session!.',
      student:'Niraj Kumar.',
      companyLogo:'https://th.bing.com/th/id/R.d412e130963c12d5c1c449bf15a69460?rik=auFZeTzENPzvMg&riu=http%3a%2f%2fwww.logotypes101.com%2flogos%2f606%2fE4BAEEF36D16CA1835D441AAA405324B%2fBlackRock.png&ehk=Id%2ftL6%2bSXzda6tCOA%2bDyytsvWuJfULOakHW6N3PHxRc%3d&risl=&pid=ImgRaw&r=0'
    
    
    
    },
    {
 imageSrc: '/Achiever/Anusheel.jpeg',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: ' Kumar K Student cracks Walmart SDE Intern + Full Time; after 8 months of daily live training for FAANG level OA + Interview.       .',
      student:'Anusheel',
      companyLogo:'./CompanyLogo/walmart.png'
    
    
    
    },
    { 
      imageSrc: '/Achiever/Ash.jpeg',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: ' Kumar K Student Despite being a DSA beginner and 2 years experience at service based company Cognizant ;  cracks senior Engineer role off campus at OpenText + Fed-Ex.      ',
      student:'Ashmita  Senapati',
      companyLogo:'https://www.industryanalysts.com/wp-content/uploads/2019/05/opentext-logo-e1680020526745.png'
    
    
    
    },
    { imageSrc: 'Arth.jpg ',
      subtitle: 'Tier-3 College to Off-Campus SDE Offer from BT Group', 
       content: ' Kumar K Student Despite being a DSA beginner and 2 years experience at service based company Cognizant ;  cracks SDE Offer from BT Group   ',
       student:'Arthita  Senapati',
       companyLogo:'https://media.licdn.com/dms/image/D4E0BAQFcyvjY35EvXA/company-logo_200_200/0/1663653523168/bt_logo?e=1728518400&v=beta&t=pnyUajIHCJLhIu1win0J-uh7BPz56xzbnJX0JI719co'
     
     
     },
    { imageSrc: 'Surbhi.jpg',
      subtitle: 'Tier-3 College to Off-Campus SDE Offer from BetterPlace', 
       content: ' Kumar K Student  Kumar K Student who was a DSA beginner from Tier-3 college crack Off campus  SDE offer from BetterPlace    ',
       student:'Surbhi Negi',
       companyLogo:'https://media.licdn.com/dms/image/D560BAQGZSpAPIwbUgQ/company-logo_200_200/0/1719257669608/mybetterplace_logo?e=1728518400&v=beta&t=t3C84fHBnuCtp0z211FgUaZsUWeFvpBBKw9gbMDRjro'
     
     
     
     },
    { 
     

     imageSrc: 'Achiever/Ayushi.jpg',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K 2024 Grad student cracks 12 LPA SDE Role in top tech startup',
      student:'Ayushi Sood',
      companyLogo:'./CompanyLogo/cisco.jpg',
    
    
    
    },
   
    
    
    
    { 
      imageSrc: 'Achiever/Raghav.jpg',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'Kumar K Student cracks 18 LPA Full Time SDE offer at Juniper Networks. after 8 month Faang level DSA + OA Training',
      student:'Raghav Singhal',
      companyLogo:'https://th.bing.com/th/id/OIP.ywF-_XWqQEfCooDjSJ9LdgHaE8?rs=1&pid=ImgDetMain'
    
    
    
    },
  { imageSrc: '/Achiever/Koustav halder.jpeg',
     subtitle: 'SUBTITLE 1',
      content: 'Kumar K Student cracks 25LPA Samsung SDE Offer',
      student:'Koustav Halder',
      companyLogo:'./CompanyLogo/Samsung.png'
    
    },
    { imageSrc: '/Achiever/Santosh Yeshwanth.jpeg',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: ' Kumar K Student with 2 years experience in service based company Infosys cracks 28 LPA TOP PBC Off Campus!',
      student:'Santosh. ',
      companyLogo:'https://th.bing.com/th/id/OIP.hRz-ypR-ofxFH_Bh0B2zMAHaFP?rs=1&pid=ImgDetMain'
    
    },
{ imageSrc: '/Achiever/Astha.jpg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K  student cracked 18 LPA SDE offer  in just 2-3 months of preparation.',
      student:'Aastha Singh',
      companyLogo:'https://logos-world.net/wp-content/uploads/2021/02/HSBC-Logo-1983-2018.png'
    
    },
    
   
{ imageSrc: '/Achiever/Dixit bansal.jpeg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: 'Kumar K  𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐰𝐡𝐨 𝐟𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐜𝐫𝐚𝐜𝐤 7.5𝐋𝐏𝐀 𝐛𝐮𝐭 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐜𝐫𝐚𝐜𝐤𝐬 17.5𝐋𝐏𝐀 𝐨𝐟𝐟𝐞𝐫 from HP ',
      student:'Dixit Bansal',
      companyLogo:'https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png'
    
    },

    
    
    { imageSrc: '/Achiever/Aman.jpeg',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: 'Kumar K student crack 20 LPA Zscaler SDE(Intern + PPO) Offer ',
      student:'Aman Gupta',
      companyLogo:'https://th.bing.com/th/id/OIP.nva8NdiivteQQiHLYc8HoQHaFh?rs=1&pid=ImgDetMain'
    
    
    
    },
   
    { imageSrc: '/Achiever/Diwakar.jpg',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: 'Kumar K Student working at service based company cracks 22 LPA off campus job offer at top tech startup ',
      student:'Diwakar Singh',
      companyLogo:'./CompanyLogo/micro.jpg'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/de4ks8mkh/image/upload/v1762423031/WhatsApp_Image_2025-11-06_at_15.26.43_c5f8d4a7_rvyvrn.jpg',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',
      content: 'On 12th October Student cracked 18 LPA SDE Offer at Barclays! ',
      student:'Saniya Inamdar',
      companyLogo:'./CompanyLogo/bercalys.jpg'
    
    
    
    },
   
    { 
    imageSrc: '/Achiever/kushal.jpg',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: 'Kumar K student cracked an 18 LPA job offer at top tech  Product Based Company Hyland and switch from service based Company Cognizant ',
      student:'Kushal Banik ',
      companyLogo:'https://mma.prnewswire.com/media/456686/Hyland_Software_Logo.jpg?p=facebook'
    
    
    
    },
    {
 imageSrc: '/Achiever/MD.jpeg',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: 'Kumar K  student cracks 14LPA HFT -> Intern + PPO  after training for FAANG level OA + Interview ',
      student:'Mohammed Kaif Ahmed. ',
      companyLogo:'https://www.glassonline.com/wp-content/uploads/2021/05/HFT_new_logo_654x350-478x256.jpg'
    
    
    
    },
    
    
    { imageSrc: '/Achiever/Jyoti.jpg',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'On August 21 ; student cracked (19 LPA) Deutsche Bank job offer after training super hard for DSA + OA + CS Fundamentals!',
      student:'Jyoti',
      companyLogo:'./CompanyLogo/cisco.jpg'
    
    
    
    },
    { imageSrc: 'selec.jpg',
      content: 'Kumar K  student cracked an offer(19 LPA.) from Oracle!',
      student:'Ayush Kumar      ',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzGrJVTLOQpQrrUCvfuKBGW57xddOpAkUJCalDZkiwQ&s'
    
    },
    
    { imageSrc: '/Achiever/Mrinal.jpg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K Student cracks 13 LPA offer off campus From Manhettan Associates',
      student:'Mrinal Mohan.',
      companyLogo:'https://th.bing.com/th/id/OIP.Eb4uOm4jHM4xJNXPv6PTfQHaHa?rs=1&pid=ImgDetMain'
    
    },
    
    { 
      imageSrc: '/Achiever/Mrun.jpg',
      content: ' Kumar K Student laid off in recession cracks 12LPA offer in Akami Tech. ',
      student:'Mrunmai Dahare.',
      companyLogo:'https://th.bing.com/th/id/OIP.v8Ax9IW84z0Bh3URJz11tQHaE8?rs=1&pid=ImgDetMain'
    
    },
    { 
      imageSrc: '/Achiever/karan.jpg',
      content: ' Kumar K  student  cracks SDE Intern at GoldMan Sachs ',
      student:'KARAN SARAWAGI',
      companyLogo:'https://th.bing.com/th/id/OIP.20UZG_OJdxb6vdhuboZ1vgHaEK?rs=1&pid=ImgDetMain'
    
    },

    
    { 
      imageSrc: '/Achiever/ankit.jpg',
      content: ' Kumar K Student working at service based company TCS 3LPA cracks 14LPA  in CDOT  ',
      student:'Ankit Sharma',
     companyLogo:'https://yt3.ggpht.com/a/AGF-l79yTuFVtNJSJrc1JfbYzZQwq10ttZj8Vr5SNA=s900-mo-c-c0xffffffff-rj-k-no'
    
    },

    
    { 
      imageSrc: '/Achiever/Hemandra.jpg',
      content: ' Kumar K student Cracks Flipkart Group(ClearTrip) SDE Offer after training with us for 8 months!. ',
      student:'Hemandra Mehta',
      companyLogo:'https://th.bing.com/th/id/OIP.ZGMpXrltkjECnySvPKQgHQHaEL?rs=1&pid=ImgDetMain'
    
    },
    

    { 
      imageSrc: '/Achiever/Hrithik.png',
      content: ' Kumar K student Cracks Flipkart SDE Offer after training with us for 8 months!. ',
      student:'Hritik Bhardwaj',
     companyLogo:'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png'

    
    },
    { 
      imageSrc: 'shivamkauski.jpg',
      content: ' Kumar K student Cracks  SDE  intern  Remote International  Offer  from Rice University after training with us for 8 months!. ',
      student:'Shivam Kaushik',
     companyLogo:'https://th.bing.com/th/id/OIP.eYvIsH4TwGbiN9IFYUc94wHaHa?rs=1&pid=ImgDetMain'  
    },
    { 
      imageSrc: 'akshat.jpg',
      content: ' Kumar K student Cracks Remote SDE intern  offer from BetaZen Infotech. ',
      student:'Akshat Srivastava',
     companyLogo:'https://th.bing.com/th/id/OIP.rn1m9TBOPyYY9RuNxM8W-QAAAA?rs=1&pid=ImgDetMains'
    },
    { 
      imageSrc: 'Manas.jpg',
      content: ' Kumar K Student cracks  24 LP A SDE offer from Japan Product Based Company  OffCampus  after 8 months of advanced DSA(OA + CP) training. ',
      student:'Manas Goyal',
      companyLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQE2Hk3-e0WXmA/company-logo_200_200/company-logo_200_200/0/1631326323947?e=2147483647&v=beta&t=aXUJlpONCZPn1jfSICttOFMx9F92rrUHIelyrLzCG_0",

    },
    
    
    

    

   
  ];

  const [cardsToShow, setCardsToShow] = useState(100);
  const [cards, setCards] = useState(data);

  const handleViewMore = () => {
    setCardsToShow(cards.length); // Show all cards
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 textc text-gray-900">Our 100    Recent Selections</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div> 
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.slice(0, cardsToShow).map((card, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-white rounded-lg p-6 shadow-lg hover:shadow-lg transition duration-400">
              <img className="h-50 rounded w-full object-cover object-center mb-6" src={card.imageSrc}
               alt="content" />
                <h2 className="text-lg text-gray-900   font-sans font-medium  mb-4">{card.content}</h2>
                <div className="flex items-center justify-between">
                  <p className="leading-relaxed text-base font-bold text-black">{card.student}</p>
                  <img src={card.companyLogo} className="w-8 h-8 object-cover rounded-full" alt="company logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {cardsToShow < cards.length && (
          <div className='flex flex-col items-center justify-center'>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardComponent;