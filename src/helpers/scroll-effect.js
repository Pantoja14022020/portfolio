document.addEventListener('scroll',e => {
    const scroll = window.scrollY;


    //Header Component
    const contentHeader = document.querySelector('.content-header');//contenedor de titulos
    const buttonsHeader = document.querySelector('.buttons-header');//contenedor de botones

    
    //Header Effects
    if(scroll >= contentHeader.clientHeight * 1.1){
        contentHeader.classList.remove('animate__fadeInLeft')
        contentHeader.classList.add('animate__fadeOutLeft')
    }
    if(scroll < contentHeader.clientHeight * 1.1){
        contentHeader.classList.add('animate__fadeInLeft')
        contentHeader.classList.remove('animate__fadeOutLeft')
    }
    if(scroll >= buttonsHeader.clientHeight * 11.5){
        buttonsHeader.classList.remove('animate__fadeInRight')
        buttonsHeader.classList.add('animate__fadeOutRight')
    }
    if(scroll < buttonsHeader.clientHeight * 11.5){
        buttonsHeader.classList.add('animate__fadeInRight')
        buttonsHeader.classList.remove('animate__fadeOutRight')
    }



    //About Component
    const imageAbout = document.querySelector('.profile-container');//contenedor de titulos
    const infoAbout = document.querySelector('.details-about');//contenedor de botones
    
   
    if(scroll >= imageAbout.clientHeight + 100 && scroll <= imageAbout.clientHeight + 400){
        if(imageAbout.classList.contains('animate__fadeOutLeft')) imageAbout.classList.remove('animate__fadeOutLeft')
        imageAbout.classList.add('animate__fadeInLeft')
        imageAbout.classList.remove('hide')
    }
    if(!(scroll >= imageAbout.clientHeight + 100 && scroll <= imageAbout.clientHeight + 400)){
        imageAbout.classList.remove('animate__fadeInLeft');
        imageAbout.classList.add('animate__fadeOutLeft')
    }
    if(scroll >= infoAbout.clientHeight + 14 && scroll <= infoAbout.clientHeight + 326){
        if(infoAbout.classList.contains('animate__fadeOutRight')) infoAbout.classList.remove('animate__fadeOutRight')
        infoAbout.classList.add('animate__fadeInRight')
        infoAbout.classList.remove('hide')
    }
    if(!(scroll >= infoAbout.clientHeight + 14 && scroll <= infoAbout.clientHeight + 326)){
        infoAbout.classList.remove('animate__fadeInRight');
        infoAbout.classList.add('animate__fadeOutRight')
    }


    //Skils components
    const frontendSkill = document.querySelector('.frontend');//contenedor de titulos
    const backendSkill = document.querySelector('.backend');//contenedor de botones


    if(scroll >= frontendSkill.clientHeight + 400 && scroll <= frontendSkill.clientHeight + 1000){
        if(frontendSkill.classList.contains('animate__fadeOutLeft')) frontendSkill.classList.remove('animate__fadeOutLeft')
        frontendSkill.classList.add('animate__fadeInLeft')
        frontendSkill.classList.remove('hide')
    }
    if(!(scroll >= frontendSkill.clientHeight + 400 && scroll <= frontendSkill.clientHeight + 1000)){
        frontendSkill.classList.remove('animate__fadeInLeft');
        frontendSkill.classList.add('animate__fadeOutLeft')
    }
    if(scroll >= backendSkill.clientHeight + 450 && scroll <= backendSkill.clientHeight + 1050){
        if(backendSkill.classList.contains('animate__fadeOutRight')) backendSkill.classList.remove('animate__fadeOutRight')
        backendSkill.classList.add('animate__fadeInRight')
        backendSkill.classList.remove('hide')
    }
    if(!(scroll >= backendSkill.clientHeight + 450 && scroll <= backendSkill.clientHeight + 1050)){
        backendSkill.classList.remove('animate__fadeInRight');
        backendSkill.classList.add('animate__fadeOutRight')
    }


    //Projects components
    const projects = document.querySelector('.container-projects');//contenedor de titulos

    if(scroll >= projects.clientHeight + 700 && scroll <= projects.clientHeight + 1600){
        if(projects.classList.contains('animate__fadeOutLeft')) projects.classList.remove('animate__fadeOutLeft')
        projects.classList.add('animate__fadeInLeft')
        projects.classList.remove('hide')
    }
    if(!(scroll >= projects.clientHeight + 700 && scroll <= projects.clientHeight + 1600)){
        projects.classList.remove('animate__fadeInLeft');
        projects.classList.add('animate__fadeOutLeft')
    }



    //Contact components
    const form = document.querySelector('.form');//contenedor de titulos
    if(scroll >= form.clientHeight + 1300 && scroll <= form.clientHeight + 2100){
        if(form.classList.contains('animate__fadeOutRight')) form.classList.remove('animate__fadeOutRight')
        form.classList.add('animate__fadeInRight')
        form.classList.remove('hide')
    }
    if(!(scroll >= form.clientHeight + 1300 && scroll <= form.clientHeight + 2100)){
        form.classList.remove('animate__fadeInRight');
        form.classList.add('animate__fadeOutRight')
    }

})