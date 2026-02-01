let currentLang = "pt";
let activeFilter = "ALL";

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const CV_BY_LANG = {
  pt: "Gabriel_Tessaro_Favareto_CV_PT-BR.pdf",
  en: "Gabriel_Tessaro_Favareto_CV_EN.pdf",
  es: "Gabriel_Tessaro_Favareto_CV_ES.pdf"
};


/* =========================
   THEME (dark/light)
========================= */
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if(btn) btn.textContent = theme === "light" ? "☀️" : "🌙";
}

function getPreferredTheme(){
  const saved = localStorage.getItem("theme");
  if(saved === "light" || saved === "dark") return saved;

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
}

/* =========================
   I18N
========================= */
function t(path){
  const parts = path.split(".");
  let obj = CONTENT[currentLang];
  for (const p of parts) obj = obj?.[p];
  return obj ?? path;
}

function setLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  // marca o idioma selecionado
  $$(".lang .chip").forEach(b => {
    if(!b.dataset.lang) return;
    b.classList.toggle("chip--active", b.dataset.lang === lang);
  });

  // traduz textos
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // placeholder busca
  const search = $("#search");
  if(search) search.placeholder = CONTENT[currentLang].ui.searchPlaceholder;

  renderAll();
}

/* =========================
   UI helpers
========================= */
function createChip(text, cls="chip2"){
  const span = document.createElement("span");
  span.className = cls;
  span.textContent = text;
  return span;
}

/* =========================
   RENDER SECTIONS
========================= */
function renderHeroTags(){
  const wrap = $("#heroTags");
  if(!wrap) return;
  wrap.innerHTML = "";
  DATA.heroTags.forEach(tag => wrap.appendChild(createChip(tag, "tag")));
}

function renderSkills(){
  const grid = $("#skillsGrid");
  if(!grid) return;

  grid.innerHTML = "";
  DATA.skills.forEach(block => {
    const div = document.createElement("div");
    div.className = "panel";
    div.innerHTML = `<h3>${block.title}</h3>`;

    const ul = document.createElement("ul");
    ul.className = "list";
    block.items.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    });

    div.appendChild(ul);
    grid.appendChild(div);
  });
}

function renderExperience(){
  const tl = $("#timeline");
  if(!tl) return;

  tl.innerHTML = "";
  DATA.experience.forEach(x => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="item__top">
        <div class="item__role">${x.role}</div>
        <div class="item__meta">${x.where} • ${x.when}</div>
      </div>
    `;

    const ul = document.createElement("ul");
    x.bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });

    div.appendChild(ul);
    tl.appendChild(div);
  });
}

function renderCourses(){
  const grid = $("#coursesGrid");
  if(!grid) return;

  grid.innerHTML = "";
  DATA.courses.forEach(c => {
    const div = document.createElement("div");
    div.className = "panel";
    div.innerHTML = `
      <h3 style="margin:0 0 8px">${c.group}</h3>
      <ul class="list" style="margin-top:0"></ul>
    `;
    const ul = div.querySelector("ul");
    c.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    grid.appendChild(div);
  });
}

function getAllTech(){
  const set = new Set();
  DATA.projects.forEach(p => (p.tech || []).forEach(t => set.add(t)));
  return ["ALL", ...Array.from(set).sort()];
}

function renderFilters(){
  const filters = $("#filters");
  if(!filters) return;

  filters.innerHTML = "";
  getAllTech().forEach(k => {
    const btn = document.createElement("button");
    btn.className = "filter" + (activeFilter === k ? " filter--active" : "");
    btn.textContent = k === "ALL" ? "All" : k;

    btn.onclick = () => {
      activeFilter = k;
      renderFilters();
      renderProjects();
    };

    filters.appendChild(btn);
  });
}

function matchProject(p, q){
  if (!q) return true;

  const hay = [
    p.title?.[currentLang] ?? "",
    p.desc?.[currentLang] ?? "",
    ...(p.tech || [])
  ].join(" ").toLowerCase();

  return hay.includes(q.toLowerCase());
}

function renderProjects(){
  const grid = $("#projectsGrid");
  const search = $("#search");
  if(!grid || !search) return;

  const q = search.value.trim();
  grid.innerHTML = "";

  const items = DATA.projects
    .filter(p => activeFilter === "ALL" ? true : (p.tech || []).includes(activeFilter))
    .filter(p => matchProject(p, q));

  items.forEach(p => {
    const card = document.createElement("article");
    card.className = "project";

    // monta os botões dinamicamente
    let actions = "";

    if (p.links?.code && p.links.code !== "#") {
      actions += `
        <a class="btn" href="${p.links.code}" target="_blank" rel="noreferrer">
          Code
        </a>
      `;
    }

    if (p.links?.demo && p.links.demo !== "#") {
      actions += `
        <a class="btn btn--ghost" href="${p.links.demo}" target="_blank" rel="noreferrer">
          Demo
        </a>
      `;
    }

    card.innerHTML = `
      <h3>${p.title[currentLang]}</h3>
      <p>${p.desc[currentLang]}</p>
      <div class="chips"></div>
      <div class="actions">
        ${actions}
      </div>
    `;

    const chips = card.querySelector(".chips");
    (p.tech || []).forEach(x => chips.appendChild(createChip(x)));

    grid.appendChild(card);
  });
}

function setLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  $$(".lang .chip").forEach(b => {
    if(!b.dataset.lang) return;
    b.classList.toggle("chip--active", b.dataset.lang === lang);
  });

  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  const search = $("#search");
  if(search) search.placeholder = CONTENT[currentLang].ui.searchPlaceholder;

  const cvLink = $("#cvLink");
  if (cvLink && CV_BY_LANG[lang]) {
    cvLink.href = CV_BY_LANG[lang];
  }

  renderAll();
}



function renderCaseChips(){
  const wrap = $("#caseChips");
  if(!wrap) return;

  wrap.innerHTML = "";
  ["Java","Spring","JWT","Docker","MySQL"].forEach(x => wrap.appendChild(createChip(x)));
}

function renderAll(){
  renderHeroTags();
  renderFilters();
  renderProjects();
  renderSkills();
  renderCourses();
  renderExperience();
  renderCaseChips();
}

/* =========================
   INIT
========================= */
function init(){
  // theme init
  applyTheme(getPreferredTheme());
  $("#themeToggle")?.addEventListener("click", toggleTheme);

  // se NÃO escolheu manualmente, acompanha o sistema
  const mq = window.matchMedia?.("(prefers-color-scheme: light)");
  mq?.addEventListener?.("change", (e) => {
    const saved = localStorage.getItem("theme");
    if(saved) return;
    applyTheme(e.matches ? "light" : "dark");
  });

  // year
  $("#year").textContent = new Date().getFullYear();

  // lang buttons
  $$(".lang .chip").forEach(btn => {
    if(!btn.dataset.lang) return;
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // search
  $("#search")?.addEventListener("input", renderProjects);

  // default lang
  setLang("pt");
}

init();
