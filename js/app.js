//Start Navbar

// for navbutton
const navbutton = document.querySelector('.navbuttons');

navbutton.addEventListener('click',()=>navbutton.classList.toggle('changes'));

//for navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getScrollY = window.scrollY;
    // console.log(getScrollY);
    
    if(getScrollY > 200){
        navbar.classList.add('navmenus');
    }
    else{
        navbar.classList.remove('navmenus');
    }
})

const menuitems = document.querySelectorAll('.menuitems');
console.log(menuitems);
menuitems.forEach(menuitem=>{
    menuitem.addEventListener('click',()=>{
        removeactive();
        menuitem.classList.add('active');
    })
})

function removeactive(){
    menuitems.forEach(menuitem=>{
        menuitem.classList.remove('active');
    })
}
// End Navbar

// Start Skill
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const languageones = document.querySelector('.languageones');
const languagetwos = document.querySelector('.languagetwos');
const skillbgones = document.querySelector('.skillbgones');
const skillbgtwos = document.querySelector('.skillbgtwos');
const skillbgthrees = document.querySelector('.skillbgthrees');

window.addEventListener('scroll',()=>{
    const getScrollY = window.scrollY;
    // console.log(getScrollY);
    if(getScrollY > 2300){
        languageones.classList.add('movefromlefts');
        languagetwos.classList.add('movefromrights');
        skillbgones.classList.add('fromlefts');
        skillbgtwos.classList.add('frombottoms');
        skillbgthrees.classList.add('fromrights');
    }
    else{
        languageones.classList.remove('movefromlefts');
        languagetwos.classList.remove('movefromrights');
        skillbgones.classList.remove('fromlefts');
        skillbgtwos.classList.remove('frombottoms');
        skillbgthrees.classList.remove('fromrights');
    }
})
// End Skill

//Start Portfolio
const projectlists = document.querySelectorAll('.projectlists');
const designs = document.querySelectorAll('.filters.design');
const javascripts = document.querySelectorAll('.filters.javascript');

projectlists.forEach((projectlist =>{
    projectlist.addEventListener('click',(e)=>{
        let datafilter = projectlist.getAttribute('data-filter');

        if(datafilter === "all"){
            removeactiveclass();
            e.target.classList.add('activeitems');

            designs.forEach(design=>{
                design.style.display = "inline-block";
            })

            javascripts.forEach(javascript=>{
                javascript.style.display = "inline-block";
            })
        }

        else if(datafilter === "design"){
            removeactiveclass();
            e.target.classList.add('activeitems'); 
            
            designs.forEach(design=>{
                design.style.display = "inline-block";
            })

            javascripts.forEach(javascript=>{
                javascript.style.display = "none";
            })
        }

        else{
            removeactiveclass();
            e.target.classList.add('activeitems');

            designs.forEach(design=>{
                design.style.display = "none";
            })

            javascripts.forEach(javascript=>{
                javascript.style.display = "inline-block";
            })
        }
    })
}))

//remove active class
function removeactiveclass(){
    projectlists.forEach(projectlist=>{
        projectlist.classList.remove('activeitems');
    })
}
// End Portfolio

// Start Footer
const getyear = document.getElementById('getyear');

const getfullyear = new Date();
getyear.innerText = getfullyear.getUTCFullYear();

const uparrow = document.querySelector('.uparrows');
uparrow.addEventListener('click',()=>{
    window.scrollTo({top : 0,behavior:"smooth"});
})
// End Footer

const wholepage = document.querySelector('.wholepages');
const spinner = document.querySelector('.spinners');

window.onload = () => {
    setTimeout(function(){
        spinner.style.opacity = "0";
        setTimeout(function(){
            spinner.style.display = "none";
            wholepage.style.display = "block";
        },500);
    },2000);
}