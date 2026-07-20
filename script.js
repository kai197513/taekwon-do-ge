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
const holidayContent = {
  en: {badge:'Current holiday schedule',title:'Holiday training times',valid:'Valid until the next update',intro:'During the holidays, the following adjusted training times apply:',children:'Children',youth:'Teenagers & adults',days:'Tuesday · Thursday · Friday',check:'Please check this page regularly for the next schedule update.'},
  ru: {badge:'Актуальное расписание на каникулы',title:'Тренировки во время каникул',valid:'Действует до следующего обновления',intro:'Во время каникул действует следующее изменённое расписание:',children:'Дети',youth:'Подростки и взрослые',days:'Вторник · Четверг · Пятница',check:'Пожалуйста, регулярно проверяйте эту страницу — здесь появится следующее обновление расписания.'},
  ka: {badge:'არდადეგების მიმდინარე განრიგი',title:'ვარჯიშის დრო არდადეგებზე',valid:'ძალაშია შემდეგ განახლებამდე',intro:'არდადეგების პერიოდში მოქმედებს შემდეგი შეცვლილი განრიგი:',children:'ბავშვები',youth:'მოზარდები და ზრდასრულები',days:'სამშაბათი · ხუთშაბათი · პარასკევი',check:'გთხოვთ, რეგულარულად შეამოწმოთ ეს გვერდი განრიგის შემდეგი განახლებისთვის.'}
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
const holiday = holidayContent[currentLanguage] || holidayContent.en;
const scheduleLink = document.createElement('a');
scheduleLink.textContent = schedule.nav;
scheduleLink.href = '#holiday-schedule';
document.querySelector('.language-switch').before(scheduleLink);

const scheduleStyle = document.createElement('style');
scheduleStyle.textContent = `.holiday-poster{background:#0b0d0f;color:#fff;position:relative;overflow:hidden}.holiday-poster:after{content:"";position:absolute;width:340px;height:340px;border:70px solid #c4161c;border-radius:50%;right:-180px;top:-190px;opacity:.26}.holiday-inner{position:relative;z-index:1}.holiday-top{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:18px}.holiday-badge{display:inline-block;background:#c4161c;padding:8px 12px;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase}.holiday-valid{color:#ef777a;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px}.holiday-poster h2{max-width:850px}.holiday-intro{max-width:700px;color:#c9cbcd;font-size:17px}.holiday-times{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:32px}.holiday-time{border:1px solid #383b3e;background:#151719;padding:27px}.holiday-time span,.holiday-time strong,.holiday-time small{display:block}.holiday-time span{color:#ef777a;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1.3px}.holiday-time strong{font:700 34px "Barlow Condensed",Inter,sans-serif;margin:8px 0}.holiday-time small{color:#c4c6c8}.holiday-check{margin:24px 0 0;border-left:4px solid #c4161c;padding-left:14px;color:#bbb}.schedule-section{background:#f4f1eb}.schedule-heading{display:grid;grid-template-columns:1fr .8fr;gap:7vw;align-items:end;margin-bottom:42px}.schedule-heading>p{color:#62666a;font-size:17px}.schedule-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.schedule-card{background:#fff;padding:34px;border-top:5px solid #c4161c}.schedule-card h3{font-size:34px;margin-bottom:24px}.schedule-row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:13px 0;border-bottom:1px solid #ddd}.schedule-row span{font-weight:600}.schedule-row strong{white-space:nowrap}.schedule-note{margin:24px 0 0;padding:16px 18px;background:#101214;color:#fff}.schedule-note a{color:#fff;font-weight:700}@media(max-width:700px){.holiday-top{align-items:flex-start;flex-direction:column}.holiday-times,.schedule-heading,.schedule-grid{grid-template-columns:1fr}.holiday-time strong{font-size:29px}.schedule-heading{gap:18px}.schedule-card{padding:26px 21px}.schedule-row{align-items:flex-start;flex-direction:column;gap:2px}}`;
document.head.appendChild(scheduleStyle);
const scheduleSection = document.createElement('section');
scheduleSection.className = 'schedule-section section';
scheduleSection.id = 'schedule';
scheduleSection.innerHTML = `<div class="schedule-heading"><div><p class="eyebrow dark">${schedule.kicker}</p><h2>${schedule.title}</h2></div><p>${schedule.intro}</p></div><div class="schedule-grid"><article class="schedule-card"><h3>${schedule.children}</h3><div class="schedule-row"><span>${schedule.mon}</span><strong>19:00–20:00</strong></div><div class="schedule-row"><span>${schedule.tue}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.thu}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.fri}</span><strong>19:00–20:00</strong></div></article><article class="schedule-card"><h3>${schedule.youth}</h3><div class="schedule-row"><span>${schedule.mon}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.wed}</span><strong>20:00–21:00</strong></div><div class="schedule-row"><span>${schedule.fri}</span><strong>20:00–21:00</strong></div></article></div><p class="schedule-note">${schedule.note} <a href="https://wa.me/995591815217" target="_blank" rel="noopener">${schedule.contact}</a></p>`;
document.querySelector('#contact').before(scheduleSection);
const holidaySection = document.createElement('section');
holidaySection.className = 'holiday-poster section';
holidaySection.id = 'holiday-schedule';
holidaySection.innerHTML = `<div class="holiday-inner"><div class="holiday-top"><span class="holiday-badge">${holiday.badge}</span><span class="holiday-valid">${holiday.valid}</span></div><h2>${holiday.title}</h2><p class="holiday-intro">${holiday.intro}</p><div class="holiday-times"><article class="holiday-time"><span>${holiday.children}</span><strong>19:00–20:00</strong><small>${holiday.days}</small></article><article class="holiday-time"><span>${holiday.youth}</span><strong>20:00–21:00</strong><small>${holiday.days}</small></article></div><p class="holiday-check">${holiday.check}</p></div>`;
scheduleSection.before(holidaySection);
