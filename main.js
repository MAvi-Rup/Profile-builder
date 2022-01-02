//Selectors
const profileForm = document.querySelector('profile-form')
const inputName = documnet.querySelector('#name')
const inputAge = documnet.querySelector('#age')
const inputProfession = documnet.querySelector('#profession')
const submitBtn = document.querySelector('#submit')
const profile = document.querySelector('profile')

//Function
function formatText({name,age,profession}){

       return `<div class="profile-section">
        <h3>Name : ${name}</h3>
        <p>Age:${age} </p>
        <p>Profession :${profession} </p>`;
    
}

//EventListener

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const profileData = {
        name : inputName.value,
        age: inputAge.value,
        profession : inputProfession.value
    }
    // const nameInput = 
    // const ageInput = 
    // const professionInput = ;

    formatText(profileData)
    profile.innerHTML += formatText;
    inputName.value = ''
    inputAge.value = ''
    inputProfession.value= ''
})