const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const chatbotScript = document.createElement('script');
chatbotScript.src = 'chatbot.js';
document.body.appendChild(chatbotScript);
const kwonPages = {
  en: ['Grandmaster Kwon', 'grandmaster-kwon.html'],
  ru: ['Гранд-мастер Квон', 'grandmaster-kwon-ru.html'],
  ka: ['დიდოსტატი კვონი', 'grandmaster-kwon-ka.html']
};
const registrationPages = {
  en: ['Online registration', 'registration.html?lang=en'],
  ru: ['Онлайн-регистрация', 'registration.html?lang=ru'],
  ka: ['ონლაინ რეგისტრაცია', 'registration.html?lang=ka']
};
const currentLanguage = document.documentElement.lang || 'en';
const kwonLink = document.createElement('a');
kwonLink.textContent = kwonPages[currentLanguage][0];
kwonLink.href = kwonPages[currentLanguage][1];
document.querySelector('.language-switch').before(kwonLink);
const registrationLink = document.createElement('a');
registrationLink.textContent = registrationPages[currentLanguage][0];
registrationLink.href = registrationPages[currentLanguage][1];
registrationLink.className = 'registration-nav-link';
document.querySelector('.language-switch').before(registrationLink);
