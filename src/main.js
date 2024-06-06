import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/headerSticky.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/utils.css'


const top = document.getElementById('top');
const sticky = document.getElementById('header__sticky');
const mode = document.getElementById('mode')


window.addEventListener('scroll', function() {
    if (window.scrollY >= 500) {
        top.style.opacity = '1';
        

    } else {
        if (window.scrollY <= 500) {
            top.style.opacity= '0';
    }
}
});

window.addEventListener('scroll', function() {
    if (window.scrollY >= 100) {
        sticky.style.opacity = '1';
        

    } else {
        if (window.scrollY <= 100) {
        sticky.style.opacity= '0';
    }
}
});


mode.addEventListener("click", () => {
    console.log('da');
    document.body.style.backgroundColor.toggle = "var(--clr-light)";
    document.body.style.color = "var(--clr-dark)";

})
