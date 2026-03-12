// ===== Плавное появление страницы =====
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// ===== Новости "Новые / Все" с LocalStorage =====
const newBtn = document.getElementById("newBtn");
const allBtn = document.getElementById("allBtn");
const newsContainer = document.getElementById("newsContainer");

const newBtnMobile = document.getElementById("newBtnMobile");
const allBtnMobile = document.getElementById("allBtnMobile");
const newsContainerMobile = document.getElementById("newsContainerMobile");

const originalNews = newsContainer.innerHTML;

const allNews = `
<article class="sidebar-item">
    <div class="news-date">01.03.2026</div>
    <h3>В Resident Evil Requiem обнаружили сразу пять систем защиты</h3>
</article>
<article class="sidebar-item">
    <div class="news-date">28.02.2026</div>
    <h3>Авторы Ghost of Yotei раскрыли детали режима Legends</h3>
</article>
<article class="sidebar-item">
    <div class="news-date">27.02.2026</div>
    <h3>Появился трейлер фанатского мода GTA: Carcer City</h3>
</article>
<article class="sidebar-item">
    <div class="news-date">26.02.2026</div>
    <h3>Киберспортивную организацию kONO по CS2 обвинили в мошенничестве</h3>
</article>
<article class="sidebar-item">
    <div class="news-date">25.02.2026</div>
    <h3>Pokemon Pokopia не смогла сбить Resident Evil Requiem с первого места</h3>
</article>
<article class="sidebar-item">
    <div class="news-date">24.02.2026</div>
    <h3>Игроки прошли Resident Evil Requiem свыше 8,7 млн раз</h3>
</article>
`;

function setNewsTab(tab, container, btnNew, btnAll) {
    if(tab === "all") {
        container.innerHTML = allNews;
        btnAll.classList.add("active");
        btnNew.classList.remove("active");
    } else {
        container.innerHTML = originalNews;
        btnNew.classList.add("active");
        btnAll.classList.remove("active");
    }
    localStorage.setItem("newsTab", tab);
}

// ПК
const savedTab = localStorage.getItem("newsTab") || "new";
setNewsTab(savedTab, newsContainer, newBtn, allBtn);
allBtn.addEventListener("click", () => setNewsTab("all", newsContainer, newBtn, allBtn));
newBtn.addEventListener("click", () => setNewsTab("new", newsContainer, newBtn, allBtn));

// Мобильная версия
setNewsTab(savedTab, newsContainerMobile, newBtnMobile, allBtnMobile);
allBtnMobile.addEventListener("click", () => setNewsTab("all", newsContainerMobile, newBtnMobile, allBtnMobile));
newBtnMobile.addEventListener("click", () => setNewsTab("new", newsContainerMobile, newBtnMobile, allBtnMobile));

// ===== Плавный переход между страницами =====
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});

// ===== Мобильное меню =====
const menuToggle = document.querySelector(".menu-toggle");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const closeMobileBtn = document.querySelector(".close-mobile-sidebar");

if(menuToggle && mobileSidebar) {
    menuToggle.addEventListener("click", () => {
        mobileSidebar.style.display = "block";
    });
}

if(closeMobileBtn) {
    closeMobileBtn.addEventListener("click", () => {
        mobileSidebar.style.display = "none";
    });
}

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    // --- Новости ---
    const newsData = [
        {date:'12.03.2026', title:'Главным инвестором Highguard предположительно оказался холдинг Tencent'},
        {date:'11.03.2026', title:'The Elder Scrolls 5: Skyrim получила долгожданные 60 fps на Nintendo Switch 2'},
        {date:'10.03.2026', title:'Новым криптидом в Fallout 76 станет Бигфут — его добавят в 24 сезоне'},
        {date:'09.03.2026', title:'Уютный выживач Outbound получил демо и геймплейный трейлер'},
        {date:'08.03.2026', title:'«Кошачий» рогалик Mewgenics продался тиражом в миллион копий'},
        {date:'07.03.2026', title:'Шутер Marathon получил свежий геймплейный трейлер'}
    ];

    const allNewsData = [
        {date:'01.03.2026', title:'В Resident Evil Requiem обнаружили сразу пять систем защиты'},
        {date:'28.02.2026', title:'Авторы Ghost of Yotei раскрыли детали режима Legends'},
        {date:'27.02.2026', title:'Появился трейлер фанатского мода GTA: Carcer City'},
        {date:'26.02.2026', title:'Киберспортивную организацию kONO по CS2 обвинили в мошенничестве'},
        {date:'25.02.2026', title:'Pokemon Pokopia не смогла сбить Resident Evil Requiem с первого места'},
        {date:'24.02.2026', title:'Игроки прошли Resident Evil Requiem свыше 8,7 млн раз'}
    ];

    function renderNews(container, newsArray){
        container.innerHTML = '';
        newsArray.forEach(n=>{
            container.innerHTML += `<article class="sidebar-item"><div class="news-date">${n.date}</div><h3>${n.title}</h3></article>`;
        });
    }

    const newsContainer = document.getElementById("newsContainer");
    const newsContainerMobile = document.getElementById("newsContainerMobile");

    // Инициализация новостей (ПК и мобильные)
    const savedTab = localStorage.getItem("newsTab") || 'new';
    if(savedTab === 'all'){
        renderNews(newsContainer, allNewsData);
        renderNews(newsContainerMobile, allNewsData);
    } else{
        renderNews(newsContainer, newsData);
        renderNews(newsContainerMobile, newsData);
    }

    // Кнопки "Новые / Все"
    const newBtn = document.getElementById("newBtn");
    const allBtn = document.getElementById("allBtn");
    const newBtnMobile = document.getElementById("newBtnMobile");
    const allBtnMobile = document.getElementById("allBtnMobile");

    function setTab(tab){
        if(tab === 'all'){
            renderNews(newsContainer, allNewsData);
            renderNews(newsContainerMobile, allNewsData);
            allBtn.classList.add('active');
            allBtnMobile.classList.add('active');
            newBtn.classList.remove('active');
            newBtnMobile.classList.remove('active');
        } else {
            renderNews(newsContainer, newsData);
            renderNews(newsContainerMobile, newsData);
            newBtn.classList.add('active');
            newBtnMobile.classList.add('active');
            allBtn.classList.remove('active');
            allBtnMobile.classList.remove('active');
        }
        localStorage.setItem("newsTab", tab);
    }

    newBtn.addEventListener('click', ()=>setTab('new'));
    allBtn.addEventListener('click', ()=>setTab('all'));
    newBtnMobile.addEventListener('click', ()=>setTab('new'));
    allBtnMobile.addEventListener('click', ()=>setTab('all'));

    // --- Плавный переход между страницами ---
    document.querySelectorAll(".nav-link").forEach(link=>{
        link.addEventListener("click", e=>{
            e.preventDefault();
            const href = link.getAttribute("href");
            document.body.classList.remove("loaded");
            setTimeout(()=>window.location.href=href,600);
        });
    });

    // --- Мобильное меню ---
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileSidebar = document.querySelector(".mobile-sidebar");
    const closeMobileBtn = document.querySelector(".close-mobile-sidebar");

    menuToggle?.addEventListener("click", ()=> mobileSidebar.style.display='block');
    closeMobileBtn?.addEventListener("click", ()=> mobileSidebar.style.display='none');
});

// ======== Выделение активной страницы ========
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname; // получаем путь страницы, например: /index.html

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (currentPath.endsWith(href)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileSidebar = document.querySelector(".mobile-sidebar");
    const closeMobileBtn = document.querySelector(".close-mobile-sidebar");

    // Открыть меню
    if (menuToggle && mobileSidebar) {
        menuToggle.addEventListener("click", (e) => {
            e.preventDefault();
            mobileSidebar.style.display = "block";
            // Запрещаем скролл основной страницы при открытом меню
            document.body.style.overflow = "hidden";
        });
    }

    // Закрыть меню
    if (closeMobileBtn && mobileSidebar) {
        closeMobileBtn.addEventListener("click", () => {
            mobileSidebar.style.display = "none";
            // Возвращаем скролл
            document.body.style.overflow = "auto";
        });
    }
});


