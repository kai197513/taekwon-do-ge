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
const scheduleContent = {
  en: {
    nav: 'Schedule', kicker: 'Weekly training schedule', title: 'Training times',
    intro: 'Regular weekly classes for children, teenagers and adults. Beginners are always welcome.',
    children: 'Children', youth: 'Teenagers & adults',
    mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday',
    note: 'Please arrive 10 minutes before class.', contact: 'Questions about the right group? Contact us on WhatsApp.'
  },
  ru: {
    nav: 'Расписание', kicker: 'Еженедельное расписание', title: 'Время тренировок',
    intro: 'Регулярные еженедельные занятия для детей, подростков и взрослых. Новички всегда приветствуются.',
    children: 'Дети', youth: 'Подростки и взрослые',
    mon: 'Понедельник', tue: 'Вторник', wed: 'Среда', thu: 'Четверг', fri: 'Пятница',
    note: 'Пожалуйста, приходите за 10 минут до начала занятия.', contact: 'Не знаете, какая группа подходит? Напишите нам в WhatsApp.'
  },
  ka: {
    nav: 'განრიგი', kicker: 'ყოველკვირეული განრიგი', title: 'ვარჯიშის დრო',
    intro: 'რეგულარული ყოველკვირეული ვარჯიშები ბავშვებისთვის, მოზარდებისა და ზრდასრულებისთვის. დამწყებებს ყოველთვის მივესალმებით.',
    children: 'ბავშვები', youth: 'მოზარდები და ზრდასრულები',
    mon: 'ორშაბათი', tue: 'სამშაბათი', wed: 'ოთხშაბათი', thu: 'ხუთშაბათი', fri: 'პარასკევი',
    note: 'გთხოვთ, ვარჯიშამდე 10 წუთით ადრე მობრძანდეთ.', contact: 'არ იცით, რომელი ჯგუფია თქვენთვის? მოგვწერეთ WhatsApp-ზე.'
  }
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
const schedule = scheduleContent[currentLanguage] || scheduleContent.en;
const scheduleLink = document.createElement('a');
scheduleLink.textContent = schedule.nav;
scheduleLink.href = '#schedule';
document.querySelector('.language-switch').before(scheduleLink);

const scheduleStyle = document.createElement('style');
scheduleStyle.textContent = `.schedule-section{background:#f4f1eb}.schedule-heading{display:grid;grid-template-columns:1fr .8fr;gap:7vw;align-items:end;margin-bottom:42px}.schedule-heading>p{color:#62666a;font-size:17px}.schedule-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.schedule-card{background:#fff;padding:34px;border-top:5px solid #c4161c}.schedule-card h3{font-size:34px;margin-bottom:24px}.schedule-row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:13px 0;border-bottom:1px solid #ddd}.schedule-row span{font-weight:600}.schedule-row strong{white-space:nowrap}.schedule-note{margin:24px 0 0;padding:16px 18px;background:#101214;color:#fff}.schedule-note a{color:#fff;font-weight:700}@media(max-width:700px){.schedule-heading,.schedule-grid{grid-template-columns:1fr}.schedule-heading{gap:18px}.schedule-card{padding:26px 21px}.schedule-row{align-items:flex-start;flex-direction:column;gap:2px}}`;
document.head.appendChild(scheduleStyle);
const scheduleSection = document.createElement('section');
scheduleSection.className = 'schedule-section section';
scheduleSection.id = 'schedule';
scheduleSection.innerHTML = `<div class="schedule-heading"><div><p class="eyebrow dark">${schedule.kicker}</p><h2>${schedule.title}</h2></div><p>${schedule.intro}</p></div><div class="schedule-grid"><article class="schedule-card"><h3>${schedule.children}</h3><div class="schedule-row"><span>${schedule.mon}</span><strong>19:00–20:00</strong></div><div class="schedule-row"><span>${schedule.tue}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.thu}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.fri}</span><strong>19:00–20:00</strong></div></article><article class="schedule-card"><h3>${schedule.youth}</h3><div class="schedule-row"><span>${schedule.mon}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.wed}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.fri}</span><strong>20:00–21:00</strong></div></article></div><p class="schedule-note">${schedule.note} <a href="https://wa.me/995591815217" target="_blank" rel="noopener">${schedule.contact}</a></p>`;
document.querySelector('#contact').before(scheduleSection);
