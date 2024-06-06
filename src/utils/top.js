

const top = () => {

    const top = document.getElementById('top');


    window.addEventListener('scroll', function() {
        if (window.scrollY >= 500) {
            top.style.opacity = '1';
            
    
        } else {
            if (window.scrollY <= 500) {
                top.style.opacity= '0';
        }
    }
    });
}

export default top;