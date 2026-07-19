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

const currentLanguage = document.documentElement.lang || 'en';
const kwonLink = document.createElement('a');
kwonLink.textContent = kwonPages[currentLanguage][0];
kwonLink.href = kwonPages[currentLanguage][1];
document.querySelector('.language-switch').before(kwonLink);
