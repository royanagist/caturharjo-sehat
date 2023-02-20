import '../styles/main.css'
import '../styles/home.css'
import '../styles/signin.css'
import '../styles/about.css'
import '../styles/article.css'
import '../styles/publish.css'
import logoImg from '../public/image/logo2.png'
import footerImg from '../public/image/logo3.png'
import 'node-snackbar/dist/snackbar.min.css';
import AOS from 'aos';
import App from './views/app';
import { initFirebaseAuth } from './firebase/auth';
import 'aos/dist/aos.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import swRegister from './utils/sw-register';


const app = new App({
  button: document.querySelector('.button'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  logout: document.querySelector('#logout'),
  login: document.querySelector('#signin'),
  home: document.querySelector('#home'),
  about: document.querySelector('#about'),
  article: document.querySelector('#article'),
  publish: document.querySelector('#publish'),

});
/**
 * Easy selector helper function
 */
  const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = select('#header')
let selectTopbar = select('#topbar')
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 10) {
      selectHeader.classList.add('header-scrolled')
      if (selectTopbar) {
        selectTopbar.classList.add('topbar-scrolled')
      }
    } else {
      selectHeader.classList.remove('header-scrolled')
      if (selectTopbar) {
        selectTopbar.classList.remove('topbar-scrolled')
      }
    }
  }
  window.addEventListener('load', headerScrolled)
  onscroll(document, headerScrolled)
}

const containerLogo = document.querySelector('.logo-img');
const containerFooter = document.querySelector('.footer-img');
containerLogo.src = logoImg;
containerFooter.src = footerImg;

initFirebaseAuth();

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
//   swRegister();
});

