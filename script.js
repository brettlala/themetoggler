const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const listItems = document.querySelectorAll('li')
const home_list = document.querySelector('.home-list');
const about_list = document.querySelector('.about-list');
const contact_list = document.querySelector('.contact-list');

listItems.forEach(item => addEventListener('click', addBg));

function addBg(e) {
    if(e.target.classList.contains('about-list')) {
       about_list.classList.add('current');
       home_list.classList.remove('current');
       contact_list.classList.remove('current');

       about.classList.add('show');
       home.classList.remove('show');
       contact.classList.remove('show');
    }
    if(e.target.classList.contains('home-list')) {
       home_list.classList.add('current');
       about_list.classList.remove('current');
       contact_list.classList.remove('current');

       home.classList.add('show');
       about.classList.remove('show');
       contact.classList.remove('show');
    }
    if(e.target.classList.contains('contact-list')) {
       contact_list.classList.add('current');
       home_list.classList.remove('current');
       about_list.classList.remove('current');

       contact.classList.add('show');
       home.classList.remove('show');
       about.classList.remove('show');
    }
}



