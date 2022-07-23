window.onload=iniciar;

function iniciar(e){
e.preventDefault();

//menu
document.querySelector(`.Hambur`).addEventListener(`click`,()=>{
  const navMenu = document.querySelector(`.navMenu`);
  navMenu.classList.toggle(`navHam`);
})

document.querySelector(`.navMenu`).addEventListener(`click`,()=>{
  const navMenu = document.querySelector(`.navMenu`);
  navMenu.classList.toggle(`navHam`);
})

//Sound 
document.querySelector("#play").addEventListener(`click`,()=>{
    const playSound = document.querySelector(".audio");
    const pausebtn = document.querySelector(".pausebtn");
    const play = document.querySelector("#play");
    
     playSound.volume = 0.30;
        playSound.play()
        pausebtn.style.display=`block`;
        play.style.display=`none`;
    }
)

document.querySelector(".pausebtn").addEventListener(`click`,()=>{
  const playSound = document.querySelector(".audio");
  const pausebtn = document.querySelector(".pausebtn");
  const play = document.querySelector("#play");
        playSound.pause()
        play.style.display=`block`;
        pausebtn.style.display=`none`;
})

//Validacion
const btn = document.getElementById('btnForm');
const Name = document.querySelector(`#Name`);
const Email = document.querySelector(`#Email`);
const text = document.querySelector(`#text`);
const validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const validarName = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;
 
      document.getElementById('form')
      .addEventListener('submit', function(event) {
        event.preventDefault();
       
       
         if(Name.value == ``){
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong! ,Fill in field!',
                background: `#000`,
                color:`#fff`
              })
        }
        
        else if(Name.value.length <= 35 && !validarName.test(Name.value)){
            Swal.fire({
                title: 'Oops...',
                text: `Wrong Name,Something went wrong!`,
                background: `#000`,
                color:`#fff`
              })
          
        }
       
        else if(!validarEmail.test(Email.value)){
            Swal.fire({
                title: 'Oops...',
                text: `Wrong Email,Something went wrong!`,
                background: `#000`,
                color:`#fff`
              })
            if(Email.value == ``){
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong! ,Fill in field!',
                    background: `#000`,
                    color:`#fff`
                  })
           }
        }
        else if(text.value == ``){
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong! ,Fill in field!',
                background: `#000`,
                color:`#fff`
              })
            
       }
        else{
            btnForm.value = 'Sending...';
     
            const serviceID = 'default_service';
            const templateID = 'template_2rj9tb6';
         
            emailjs.sendForm(serviceID, templateID, this)
             .then(() => {
               btnForm.value = 'Send Email';
               Swal.fire({
                title: 'Send...',
                text: 'Message sent successfully!',
                background: `#000`,
                color:`#fff`
              })
             }, (err) => {
               btnForm.value = 'Send Email';
               alert(JSON.stringify(err));
             });
        }
        Name.value = ``;
        document.querySelector(`#Name`).focus();
        Email.value = ``;
        text.value = ``;
     });
    
    }


