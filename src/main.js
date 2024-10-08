import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/headerSticky.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/contact.css'
import '../styles/components/examples.css'
import '../styles/components/footer.css'
import '../styles/components/mobile-nav.css'
import '../styles/components/resume.css'
import '../styles/components/gallery.css'
import '../styles/utils.css'

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/mode'


mobileNav();
darkMode();


import top from './utils/top';
top();


lightGallery(document.querySelector('.gallery'), {
    thumbnail: true,
});










let splide = new Splide( '.splide', {
    type   : 'loop',
  } );
  
  splide.mount();

/*
npm run build
git add -A
git commit -m "description"
git push
*/