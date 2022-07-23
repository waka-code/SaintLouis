window.onload=iniciar;

function iniciar(e){
e.preventDefault();
document.querySelector(".contenedor").innerHTML=`
<div class="conten">
<!--navMenu-->
<nav class="navMenu navHam">
<a href="#Welcome">
<div class="imgMenu">
<img src="img/Louis.png" clas="">
<h3>Louis<h3/>
<h3>Web developer<h3/>
</div></a>
<ul class="ulMenu">
<a class="aMEnu" href="#About"><li class="liMenu">About Me</li></a>

<a class="aMEnu" href="#Portfolio"><li class="liMenu">Portafolio</li></a>

<a class="aMEnu" href="#Skill"><li class="liMenu">Skill</li></a>

<a class="aMEnu" href="#Contact"><li class="liMenu">Contact</li></a> 

</ul>
<div class="socialMenu">
<a href="https://www.facebook.com/vladimi.saintlouis/" target="_blank" rel="noopener noreferrer"><img src="img/facebook-circle-logo-24.png" clas=""></a>
<a href="https://wa.me/18295041112" target="_blank" rel="noopener noreferrer"><img src="img/whatsapp-logo-24.png" clas=""></a>
<a href="https://www.linkedin.com/in/waddimi-saint-louis-b49424230/" target="_blank" rel="noopener noreferrer"><img src="img/linkedin-logo-24.png" clas=""></a>
</div>

<li class="logo">WakaCode..</li>
</nav>

<!--SectionAbout--> 

<div class="ContenedorTwo">

<p class="Sound ">  <audio  class="audio SoundPause" loop controls src="music/Rap.mp3" type="audio/mp3"></audio> <img src="img/pause-circle-regular-24.png" class="pausebtn"><img class="play" id="play" src="img/play-circle-regular-24.png" alt=""><button type="button" class="Hambur">
<img src="img/menu-alt-right-regular-24.png" alt="">
</button></p> 
<div class="Welcome" id="Welcome">
 <p class="animado"> < body > </p>
 <h2><p class="animado"> < h1 > </p> HI, <br/> Im Louis, <br/>Web developer...<p class="animado"> < h1/ > </p></h2>
 <h4>Front End Developer</h4><p class="animado"> < body/ > </p>
 <a href="#Contact"><button class="btnWelcome">Contact me!</button></a>
 </div>

<header class="About" id="About">
<section class"AboutP"><p class="animado"> < p > </p>
<li id="parrafo" >
Hi, I'm Louis <br/><br/> Nice to meet you.
Since beginning my journey as a developer,
I have worked on various projects of my own and agencies,
consulted for startups,
and collaborated with talented people to create digital products for commercial and consumer use.
I am quietly confident, naturally curious, and perpetually work to improve my skills,
one development issue at a time.
 </li><p class="animado"> < p/ > </p>
</section>
<section class="AboutImg">
<img src="img/1649881656124.jfif" clas="" >
</section>
</header>
</div>

<!--Portfolio-->
<div class="Portfolio" id="Portfolio">
<div class="imgProject">
<article>
<a href="https://waka-code.github.io/easybank-Proyect/" target="_blank" rel="noopener noreferrer"><h4 class="img1"><p>**LINK PAGE**</p></h4></a><br/>
<a href="https://github.com/waka-code/easybank-Proyect" target="_blank" rel="noopener noreferrer"><h2 id="Repository1">**EASYBANK**</h2></a>
</article>

<article>
<a href="https://waka-code.github.io/loops-proyect/" target="_blank" rel="noopener noreferrer"><h4 class="img2"><p>**LINK PAGE**</p></h4></a>
<br/>
<a href="https://github.com/waka-code/loops-proyect" target="_blank" rel="noopener noreferrer"><h2 id="Repository2">**LOOPSTUDIOS**</h2></a>
</article>

<article>
<a href="https://waka-code.github.io/PrimerProjecto/" target="_blank" rel="noopener noreferrer"><h4 class="img3"><p>**LINK PAGE**</p></h4></a>
<br/>
<a href="https://github.com/waka-code/PrimerProjecto" target="_blank" rel="noopener noreferrer"><h2 id="Repository3">**
NEWS**</h2></a>
</article>

<article class="remove">
<a href="https://waka-code.github.io/Sneakers/" target="_blank" rel="noopener noreferrer"><h4 class="img4"><p>**LINK PAGE**</p></h4></a>
<br/>
<a href="https://github.com/waka-code/Sneakers" target="_blank" rel="noopener noreferrer"><h2 id="Repository4">**SNEAKERS**</h2></a>
</article>

<article class="remove">
<a href="https://waka-code.github.io/PortafolioWeb/" target="_blank" rel="noopener noreferrer"><h4 class="img5"><p>**LINK PAGE**</p></h4></a>
<br/>
<a href="https://github.com/waka-code/PortafolioWeb" target="_blank" rel="noopener noreferrer"><h2 id="Repository5">**WAKACODE**</h2></a>
</article>

<article class="remove">
<a href="https://waka-code.github.io/MentalGame/" target="_blank" rel="noopener noreferrer"><h4 class="img6"><p>**LINK PAGE**</p></h4></a>
<br/>
<a href="https://github.com/waka-code/MentalGame" target="_blank" rel="noopener noreferrer"><h2 id="Repository6">**MENTALGAME**</h2></a>
</article>
</div>
</div>

<!--Skill-->
<div class="Skill" id="Skill">
<section class="cubos">
<h2>Languages:</h2>
<div class="skillLanguaje">
<img src="img/js1.png" class="logos">
<p class="skill__tecgnologia"> JAVASCRIPT</p>
</div>

<div class="skillLanguaje">
<img src="img/html.png" class="logos">
<p class="skill__tecgnologia"> HTML</p>
</div>

<div class="skillLanguaje">
<img src="img/css.png" class="logos">
<p class="skill__tecgnologia"> CSS</p>
</div>

<div class="skillLanguaje">
<img src="img/sasss.png" class="logos">
<p class="skill__tecgnologia">SASS</p>
</div>
</section>

<section class="cubos">
<h2>Tools:</h2>
<div class="skillLanguaje">
<img src="img/figma.png" class="logos">
<p class="skill__tecgnologia"> FIGMA</p>
</div>

<div class="skillLanguaje">
<img src="img/bootstrap.png" class="logos">
<p class="skill__tecgnologia">BOOTSTRAP</p>
</div>

<div class="skillLanguaje">
<img src="img/react.png" class="logos">
<p class="skill__tecgnologia">REACT</p>
</div>

<div class="skillLanguaje">
<img src="img/image.png" class="logos">
<p class="skill__tecgnologia"> GIT/GITHUB</p>
</div>

<div class="skillLanguaje">
<img src="img/sqll.png" class="logos">
<p class="skill__tecgnologia"> SQL SERVER</p>
</div>
</section>

<section class="cubos education">
<h2>Languages:<h2>

<div class="skillLanguaje">
<img src="img/idiomas.png" class="logos">
<p class="skill__tecgnologia"> Spanish</p>
</div>

<div class="skillLanguaje">
<img src="img/idiomas.png" class="logos">
<p class="skill__tecgnologia"> Creole</p>
</div>

<div class="skillLanguaje">
<img src="img/idiomas.png" class="logos">
<p class="skill__tecgnologia"> English</p>
</div>
</section>

</div>

<div class="footer" id="Contact">
        <form id="form">
              <li>Name *</li> 
             <input name="Name" type="text" placeholder="Name" name="" id="Name">
             
             <li>Email Address *</li> 
             <input type="mail" name="Email" placeholder="Email" name="" id="Email">
              
             <li>How can we help? *</li>
             <textarea name="text" id="text" cols="30" rows="10"></textarea>
              <button id="btnForm" type="submit">Send</button>
        </form>
        <article>
        <li>Phone Number: 829-504-1112</li>
        <li class="mail">Email:<a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"> Shenryvladimil@gmail.com</a></li>
        <li>Copyright/WakaCode</li>
        </article>
          </div>
</div>`


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


