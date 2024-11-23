
// For Download Resume
document.getElementById("download-btn").addEventListener("click", function () {
    // URL of the resume file
    const fileUrl = "./assets/Normal Resume.pdf"; // Replace with your actual file path or URL
    const fileName = "Mohanavenkatesh_Resume.pdf"; // Desired file name

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Programmatically click the link
    link.click();

    // Clean up
    link.remove();
});

// Email JS

// let getting_user_name = document.getElementById("name");
// let getting_user_mail = document.getElementById("email");
// let getting_user_msg = document.getElementById("message");
let gettng_user_btn = document.getElementById("btn");

gettng_user_btn.addEventListener("click",()=>{
    const emailData = {
        _username:document.getElementById("name").value ,
        _usermail: document.getElementById("email").value,
        _message: document.getElementById("message").value,
        }
        emailjs.send("service_qtx8goj","template_hpe6uim",emailData)
        .then(()=>{

            alert(" Your Message Sent Successfully")

        })
})





// For main file

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


