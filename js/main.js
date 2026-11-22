(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Russian texts (the English ones are the text already in the page) ---------- */
  var RU = {
    skip: "Перейти к содержимому",
    nav_about: "Обо мне", nav_projects: "Проекты", nav_skills: "Навыки", nav_experience: "Опыт", nav_contact: "Контакты",
    aria_theme: "Сменить цветовую тему", aria_menu: "Открыть меню",
    status: "Готова приступить сразу · офис или удалённо",
    eyebrow: "Backend-разработчик · Москва",
    hero_title: "Создаю надёжные <em>API</em> и веб-приложения на Laravel.",
    hero_lead: "Я Руба, backend-разработчик в Москве. Пишу REST API и веб-приложения на Laravel и MySQL и люблю покрывать написанное тестами.",
    cta_projects: "Мои проекты", cta_cv: "Скачать резюме",
    code_caption: "Из Maracaibo Furniture: сервер сам считает сумму и проверяет остатки внутри транзакции.",
    about_kicker: "Обо мне", about_title: "Backend — просто и понятно.",
    about_p1: "Я окончила Дамасский университет по специальности «информационные технологии» (ITE) и с 2021 года пишу backend на Laravel.",
    about_p2: "Много лет я также преподавала программирование, математику и английский, поэтому умею просто объяснять технические вещи. Сейчас живу в Москве и учу русский язык.",
    f_loc: "Город", f_loc_v: "Москва, Россия",
    f_edu: "Образование", f_edu_v: "Бакалавр, информационные технологии (ITE), Дамасский университет, 2021",
    f_lang: "Языки", f_lang_v: "Арабский (родной), английский (C1), русский (A1)",
    f_work: "Ищу работу", f_work_v: "Backend-разработчик Laravel / PHP, офис в Москве или удалённо",
    proj_kicker: "Проекты", proj_title: "Что я сделала",
    proj_intro: "Три проекта, на которых я отрабатывала реальные задачи backend. У каждого есть README на GitHub, у двух — рабочее демо.",
    p1_desc: "Небольшой менеджер проектов. Регистрация, проекты и канбан-доска с перетаскиванием задач; порядок карточек сохраняется. REST API с токен-авторизацией, изоляцией данных пользователей и тестами PHPUnit.",
    p1_note: "Демо-аккаунт: demo@example.com / password. Первая загрузка может занять минуту.",
    p2_desc: "Интернет-магазин мебели с REST API для товаров и заказов. Цены и остатки проверяются на сервере в транзакции, панель администратора защищена токенами, при оформлении заказа можно выбрать оплату при получении или банковский перевод.",
    p2_note: "Первая загрузка может занять минуту, а данные сбрасываются при перезапуске сервера.",
    p3_desc: "Сайт ресторана в Москве: главная, меню, расположение и контакты, сделан на Laravel Blade. Вынесла CSS и JavaScript в отдельные файлы и уменьшила папку с изображениями с 44 МБ до 2,6 МБ.",
    live: "Демо", code: "Код на GitHub",
    skills_kicker: "Навыки", skills_title: "С чем я работаю",
    s_backend: "Backend", s_db: "Базы данных", s_migrations: "Миграции", s_test: "Тестирование", s_feature: "Feature-тесты",
    s_tools: "Инструменты", s_docker: "Docker (базовый уровень)",
    exp_kicker: "Опыт", exp_title: "Где я работала",
    e1_title: "Backend-разработчик (фриланс), Laravel",
    e1_a: "Разрабатывала REST API и CRUD-модули для клиентских веб-приложений.",
    e1_b: "Проектировала схемы MySQL и связи между таблицами в архитектуре MVC.",
    e1_c: "Интегрировала API с фронтенд-приложениями.",
    e2_title: "Преподаватель: программирование, математика и английский",
    e2_a: "Вела занятия по основам программирования, математике и английскому языку для учеников разного уровня.",
    e2_b: "Разбивала технические темы на понятные шаги и развивала у учеников навыки решения задач.",
    c_title: "Давайте работать вместе",
    c_text: "Я ищу позицию backend-разработчика Laravel / PHP. Лучший способ связаться со мной — электронная почта.",
    footer: "Сделано на чистых HTML, CSS и JavaScript"
  };
  var TITLE = { en: document.title, ru: "Руба Бунаи | Backend-разработчик (Laravel / PHP)" };

  /* remember the English text that is in the page */
  var EN = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) { EN[el.dataset.i18nHtml] = el.innerHTML; });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { EN[el.dataset.i18nAria] = el.getAttribute("aria-label"); });

  function setLang(lang) {
    var dict = lang === "ru" ? RU : EN;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = dict[el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = dict[el.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", dict[el.dataset.i18nAria]); });
    root.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    var cv = document.getElementById("cv-link");
    if (cv) cv.setAttribute("href", "assets/cv/Ruba-Bounai-CV-" + (lang === "ru" ? "RU" : "EN") + ".pdf");
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage not available */ }
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  var start = saved || ((navigator.language || "").toLowerCase().indexOf("ru") === 0 ? "ru" : "en");
  if (start === "ru") setLang("ru");

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  /* ---------- theme ---------- */
  document.getElementById("theme").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- reveal on scroll ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
