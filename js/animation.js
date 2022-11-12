const menu=document.querySelector('.menu-btn')

function navToggele(e){
    /* we put the first line bc we wanna know if the menu
    active or not.. so we can close and open it when we want
    '!' before the 'e' is to deny the condition so thats mean:
    if our target (the menu) is not active do the next commands */
    /* we added now the class active */

    if (!e.target.classList.contains('active')){
        e.target.classList.add('active')
        gsap.to('.line1',0.5,{rotate:"-50", y:-13,background:"black"})
        gsap.to('.line2',0.5,{rotate:"50", y:13,background:"black"})
        gsap.to('#logo',{color:"black"})
        gsap.to('.menu-popup', {clipPath: "circle(2500px at 100% )" })
    }
    else {
        e.target.classList.remove('active')/* we removed now the class active */
        gsap.to('.line1',0.5,{rotate:"0", y:0,background:"white"})
        gsap.to('.line2',0.5,{rotate:"0", y:0,background:"white"})
        gsap.to('#logo',{color:"white"})
        gsap.to('.menu-popup', {clipPath: "circle(50px at 100% -10%)" })
    }
}
menu.addEventListener('click', navToggele)