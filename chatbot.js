/* Traditional Taekwon-Do Kutaisi: free multilingual website assistant */
(() => {
  const css = `.tkd-chat-button{position:fixed;right:20px;bottom:20px;z-index:100;width:62px;height:62px;border:0;border-radius:50%;background:#c4161c;color:#fff;font-size:26px;cursor:pointer;box-shadow:0 12px 34px #0006}.tkd-chat{position:fixed;right:20px;bottom:94px;z-index:100;width:min(380px,calc(100vw - 28px));max-height:calc(100vh - 120px);display:flex;flex-direction:column;background:#fff;border-radius:17px;overflow:hidden;box-shadow:0 22px 65px #0006;opacity:0;transform:translateY(12px);pointer-events:none;transition:.2s}.tkd-chat.open{opacity:1;transform:none;pointer-events:auto}.tkd-chat-head{display:flex;align-items:center;justify-content:space-between;background:#0b0d0f;color:#fff;padding:15px 17px;border-bottom:4px solid #c4161c}.tkd-chat-head strong{font-family:Arial,sans-serif;font-size:18px;text-transform:uppercase}.tkd-chat-head span{display:block;color:#bbb;font-size:11px}.tkd-chat-close{border:0;background:none;color:#fff;font-size:25px;cursor:pointer}.tkd-chat-body{padding:17px;overflow:auto;background:#f4f1eb}.tkd-chat-message{padding:11px 13px;margin-bottom:11px;background:#fff;border-radius:13px 13px 13px 4px;font:14px/1.45 Arial,sans-serif;box-shadow:0 2px 9px #0001}.tkd-chat-answer{border-left:3px solid #c4161c}.tkd-chat-options{display:flex;flex-wrap:wrap;gap:7px;margin:9px 0 14px}.tkd-chat-option{border:1px solid #ccd0d2;background:#fff;border-radius:999px;padding:8px 11px;font:600 12px Arial,sans-serif;cursor:pointer}.tkd-chat-option:hover{border-color:#c4161c;color:#c4161c}.tkd-chat-wa{display:block;padding:12px;border-radius:9px;background:#166534;color:#fff;text-align:center;text-decoration:none;font:bold 14px Arial,sans-serif}.tkd-chat-note{text-align:center;color:#777;font:10px Arial,sans-serif;margin:9px 0 0}@media(max-width:560px){.tkd-chat-button{right:13px;bottom:13px}.tkd-chat{right:13px;bottom:85px}}`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const phone = '995591815217';
  const data = {
    en: {
      status: 'Online assistant', hello: 'Hello! 👋 Welcome to Traditional Taekwon-Do Kutaisi. How can I help you?', choose: 'Choose a question:',
      qs: [['trial','🥋 Free trial class'],['ages','👨‍👩‍👧 Ages & beginners'],['schedule','🕒 Training schedule'],['price','💳 Training fees'],['location','📍 Location'],['bring','🎒 What should I bring?']],
      a: {trial:'Your first trial class is completely free. Beginners are always welcome. Book directly with us on WhatsApp.',ages:'We offer training for children, teenagers and adults. No previous experience is required.',schedule:'Please ask us on WhatsApp for the current training schedule. We will help you find the right group.',price:'We will gladly send you the current training fees on WhatsApp. Your first trial class is free.',location:'2nd Floor, Taekwon-Do Kutaisi Headquarters, 7 Joseb Grishashvili Street, Kutaisi, Georgia.',bring:'Comfortable sportswear and water are enough. A uniform is not required for your trial.'},
      wa:'Book or ask on WhatsApp', msg:'Hello, I am interested in Traditional Taekwon-Do and a free trial class.', note:'Automatic assistant · Personal help via WhatsApp'
    },
    ru: {
      status:'Онлайн-помощник', hello:'Здравствуйте! 👋 Добро пожаловать в Traditional Taekwon-Do Kutaisi. Чем я могу помочь?', choose:'Выберите вопрос:',
      qs:[['trial','🥋 Бесплатная тренировка'],['ages','👨‍👩‍👧 Возраст и начинающие'],['schedule','🕒 Расписание'],['price','💳 Стоимость'],['location','📍 Адрес'],['bring','🎒 Что взять с собой?']],
      a:{trial:'Первая пробная тренировка полностью бесплатна. Запишитесь через WhatsApp.',ages:'Мы проводим занятия для детей, подростков и взрослых. Предыдущий опыт не требуется.',schedule:'Уточните актуальное расписание в WhatsApp. Мы поможем подобрать подходящую группу.',price:'Актуальную стоимость мы сообщим в WhatsApp. Первая пробная тренировка бесплатна.',location:'2-й этаж, Taekwon-Do Kutaisi, ул. Иосифа Гришашвили, 7, Кутаиси, Грузия.',bring:'Для первого занятия достаточно удобной спортивной одежды и воды. Добок не требуется.'},
      wa:'Написать в WhatsApp', msg:'Здравствуйте! Я интересуюсь Traditional Taekwon-Do и бесплатной пробной тренировкой.', note:'Автоматический помощник · Личная консультация в WhatsApp'
    },
    ka: {
      status:'ონლაინ ასისტენტი', hello:'გამარჯობა! 👋 კეთილი იყოს თქვენი მობრძანება Traditional Taekwon-Do Kutaisi-ში. როგორ დაგეხმაროთ?', choose:'აირჩიეთ შეკითხვა:',
      qs:[['trial','🥋 უფასო საცდელი ვარჯიში'],['ages','👨‍👩‍👧 ასაკი და დამწყებები'],['schedule','🕒 ვარჯიშის განრიგი'],['price','💳 ვარჯიშის საფასური'],['location','📍 მისამართი'],['bring','🎒 რა უნდა მოვიტანო?']],
      a:{trial:'პირველი საცდელი ვარჯიში სრულიად უფასოა. ჩაეწერეთ WhatsApp-ის საშუალებით.',ages:'ვარჯიშები ტარდება ბავშვებისთვის, მოზარდებისა და ზრდასრულებისთვის. გამოცდილება საჭირო არ არის.',schedule:'მიმდინარე განრიგისთვის მოგვწერეთ WhatsApp-ზე. დაგეხმარებით შესაბამისი ჯგუფის შერჩევაში.',price:'მიმდინარე საფასურის შესახებ ინფორმაციას WhatsApp-ზე მოგაწვდით. პირველი ვარჯიში უფასოა.',location:'მე-2 სართული, Taekwon-Do Kutaisi, იოსებ გრიშაშვილის ქუჩა 7, ქუთაისი, საქართველო.',bring:'პირველი ვარჯიშისთვის საკმარისია კომფორტული სპორტული ტანსაცმელი და წყალი. დობოკი საჭირო არ არის.'},
      wa:'მოგვწერეთ WhatsApp-ზე', msg:'გამარჯობა! მაინტერესებს Traditional Taekwon-Do და უფასო საცდელი ვარჯიში.', note:'ავტომატური ასისტენტი · პირადი დახმარება WhatsApp-ზე'
    }
  };
  let lang = ['en','ru','ka'].includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
  const button = document.createElement('button');
  const chat = document.createElement('section');
  button.className = 'tkd-chat-button'; button.type = 'button'; button.setAttribute('aria-label','Open chat'); button.textContent = '💬';
  chat.className = 'tkd-chat'; chat.setAttribute('role','dialog');
  chat.innerHTML = '<div class="tkd-chat-head"><div><strong>Taekwon-Do Kutaisi</strong><span></span></div><button class="tkd-chat-close" aria-label="Close chat">×</button></div><div class="tkd-chat-body"></div>';
  document.body.append(chat, button);
  const body = chat.querySelector('.tkd-chat-body');
  const status = chat.querySelector('.tkd-chat-head span');
  const esc = s => s.replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  function render(key) {
    const t = data[lang]; status.textContent = t.status;
    body.innerHTML = '<div class="tkd-chat-message">'+esc(t.hello)+'</div>'+(key?'<div class="tkd-chat-message tkd-chat-answer">'+esc(t.a[key])+'</div>':'')+'<div class="tkd-chat-options"><button class="tkd-chat-option" data-l="en">English</button><button class="tkd-chat-option" data-l="ru">Русский</button><button class="tkd-chat-option" data-l="ka">ქართული</button></div><div class="tkd-chat-message">'+esc(t.choose)+'</div><div class="tkd-chat-options">'+t.qs.map(q=>'<button class="tkd-chat-option" data-q="'+q[0]+'">'+esc(q[1])+'</button>').join('')+'</div><a class="tkd-chat-wa" target="_blank" rel="noopener" href="https://wa.me/'+phone+'?text='+encodeURIComponent(t.msg)+'">'+esc(t.wa)+'</a><p class="tkd-chat-note">'+esc(t.note)+'</p>';
    body.querySelectorAll('[data-l]').forEach(b => b.onclick = () => {lang=b.dataset.l;render();});
    body.querySelectorAll('[data-q]').forEach(b => b.onclick = () => render(b.dataset.q));
    body.scrollTop = 0;
  }
  const open = value => {chat.classList.toggle('open',value);button.textContent=value?'×':'💬';};
  button.onclick = () => open(!chat.classList.contains('open'));
  chat.querySelector('.tkd-chat-close').onclick = () => open(false);
  document.addEventListener('keydown', e => {if(e.key==='Escape') open(false);});
  render();
  if(!sessionStorage.getItem('tkdChatShown')) setTimeout(() => {open(true);sessionStorage.setItem('tkdChatShown','1');},4500);
})();
