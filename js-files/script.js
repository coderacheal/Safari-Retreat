 const speakers = [
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
    {speakerName: 'Glen Nii Noi Anum',
    speakerImage: '',
    speakerEducation: '',
    speakerAccolades: ''
    },
 ]



const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-links-ul')
const navLinks = document.querySelectorAll('.nav-links')

console.log(hamburger)
console.log(navMenu)
// 


hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active')
   navMenu.classList.toggle('active')
})


navLinks.forEach(link => link.addEventListener('click', () => {
   hamburger.classList.remove('active')
   navMenu.classList.remove('active')
}))