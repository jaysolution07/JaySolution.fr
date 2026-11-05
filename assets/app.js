const API_URL = "https://script.google.com/macros/s/AKfycbykc8cEXF-RteRuRf6DzN-WQqOxihF6MdSosS_FKEiwWoHF212ngv32JKnkzH575yT1/exec";

/* ══════════ CONTENU DE SECOURS (fallback statique) ══════════
   Affiché immédiatement au chargement (voir le HTML #apps) ;
   remplacé par les données de l'API si celle-ci répond. */
const FALLBACK_APPS = [

  {
    "name": "EasyHygie",
    "description": "EasyHygie simplifie votre gestion HACCP au quotidien. Pilotez vos contrôles, suivez vos températures, gérez vos nettoyages et assurez votre traçabilité en temps réel, depuis une seule interface intuitive.",
    "image": "https://raw.githubusercontent.com/jaysolution07/EasyHygie/main/logoEH.png",
    "video": "",
    "phone": "0677718914",
    "category": "PMS & HACCP",
    "demo": "https://jaysolution07.github.io/EasyHygieDemo/",
    "type": "Application",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": 29.99
  },
  {
    "name": "EasyNutri",
    "description": "EazyNutri est un logiciel intelligent de calcul nutritionnel conçue pour les professionnels de l’alimentaire.\nCréez vos recettes en quelques clics, ajoutez vos ingrédients (simples ou composés), ou importez directement vos données depuis la table officielle CIQUAL (ANSES) pour garantir des valeurs nutritionnelles fiables et reconnues.\nObtenez instantanément les valeurs nutritionnelles détaillées, le poids total, les allergènes et la composition dans l’ordre pondéral.\nGénérez automatiquement des fiches techniques professionnelles conformes aux exigences HACCP, prêtes à être imprimées ou exportées en PDF.\nSimple, rapide et précise, EazyNutri transforme la gestion nutritionnelle en un outil accessible et puissant.",
    "image": "https://raw.githubusercontent.com/jaysolution07/EasyNutri/main/icon.svg",
    "video": "",
    "phone": "0677718914",
    "category": "Production & recettes",
    "demo": "https://jaysolution07.github.io/EasyNutriDemo/",
    "type": "Application",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": 29.99
  },
  {
    "name": "Module Nutrition Recette",
    "description": "Ce module Excel permet de formuler facilement vos recettes et de calculer automatiquement leurs valeurs nutritionnelles.\nAjoutez vos ingrédients, ajustez les quantités en quelques clics et obtenez instantanément les apports nutritionnels détaillés.\nL’outil génère également des fiches techniques complètes, prêtes à être utilisées en production ou pour vos obligations réglementaires.\nSimple, rapide et fiable, il vous fait gagner un temps précieux au quotidien.\n⚠️ Ce fichier contient des macros nécessaires à son fonctionnement. Elles sont sans risque et doivent être activées pour utiliser l’outil correctement.",
    "image": "https://raw.githubusercontent.com/jaysolution07/Module-Nutrition-Recette/main/vn.png",
    "video": "",
    "phone": "0677718914",
    "category": "Production & recettes",
    "demo": "https://raw.githubusercontent.com/jaysolution07/Module-Nutrition-Recette/main/Module%20Nutrition%20Recette%20demo.xlsm",
    "type": "Fichier Excel",
    "Prix ferme": 10,
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "Module HACCP",
    "description": "Ce module Excel permet de gérer facilement l’ensemble de vos obligations HACCP depuis une seule interface claire et intuitive. Suivi des analyses, gestion des non-conformités, contrôle des allergènes ou encore enregistrement de vos procédures d’hygiène : tout est centralisé pour vous faire gagner du temps et sécuriser votre activité.\nSaisissez rapidement vos données, consultez vos historiques en quelques clics et gardez une traçabilité complète de vos contrôles. Grâce aux rappels intégrés et aux outils de suivi, vous ne passez plus à côté d’une vérification importante.\nPensée pour les professionnels de la restauration et de l’agroalimentaire, ce logiciel vous aide à rester conforme aux exigences sanitaires tout en simplifiant votre organisation au quotidien.\n⚠️ Ce fichier contient des macros nécessaires à son fonctionnement. Elles sont sans risque et doivent être activées pour utiliser l’outil correctement.",
    "image": "https://raw.githubusercontent.com/jaysolution07/Module-HACCP/main/Capture%20d'%C3%A9cran%202025-10-27%20181527.png",
    "video": "",
    "phone": "0677718914",
    "category": "PMS & HACCP",
    "demo": "https://raw.githubusercontent.com/jaysolution07/Module-HACCP/main/Module%20HACCP%20demo.xlsm",
    "type": "Fichier Excel",
    "Prix ferme": 10,
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "Tableau de Bord des Ventes Excel demo",
    "description": "Ce tableau de bord Excel permet de visualiser rapidement les performances commerciales de votre activité. Grâce à une interface claire et dynamique, vous accédez en un coup d’œil aux indicateurs clés : chiffre d’affaires global, répartition entre ventes professionnelles et boutique, ainsi que la région la plus performante.\nSuivez l’évolution de votre chiffre d’affaires dans le temps grâce à des graphiques intuitifs, identifiez vos meilleurs clients, vos produits les plus vendus et vos formats les plus performants. Un classement des commerciaux vous permet également d’analyser les performances individuelles.\nLes filtres intégrés (commerciaux, périodes, produits) offrent une analyse personnalisée et facilitent la prise de décision. Cet outil est idéal pour piloter votre activité, optimiser vos ventes et gagner en visibilité sur vos résultats.\n⚠️ Ce fichier contient des macros nécessaires à son fonctionnement. Elles sont sans risque et doivent être activées pour utiliser l’outil correctement.",
    "image": "https://raw.githubusercontent.com/jaysolution07/Tableau-de-Bord-des-Ventes-Excel/main/Capture%20d'%C3%A9cran%202025-10-27%20182958.png",
    "video": "",
    "phone": "0677718914",
    "category": "Pilotage",
    "demo": "https://raw.githubusercontent.com/jaysolution07/Tableau-de-Bord-des-Ventes-Excel/main/Tableau%20de%20Bord%20des%20Ventes%20Excel%20demo.xlsm",
    "type": "Fichier Excel",
    "Prix ferme": 5,
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "Exemple : Site web Pro couturière Douce Grâce",
    "description": "Je conçois des sites web professionnels sur mesure, modernes, rapides et optimisés pour mettre en valeur votre activité.\nQue ce soit pour un artisan, une entreprise, un indépendant, une location saisonnière ou une marque, chaque site est pensé pour inspirer confiance, présenter vos services avec impact et convertir vos visiteurs en clients.",
    "image": "https://raw.githubusercontent.com/jaysolution07/JaySolution.fr/main/assets/douceg.png",
    "video": "",
    "phone": "0677718914",
    "category": "Site web",
    "demo": "https://jaysolution07.github.io/DouceGrace.fr/",
    "type": "Site web",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "Exemple : Mon site web Pro",
    "description": "Je conçois des sites web professionnels sur mesure, modernes, rapides et optimisés pour mettre en valeur votre activité.\nQue ce soit pour un artisan, une entreprise, un indépendant, une location saisonnière ou une marque, chaque site est pensé pour inspirer confiance, présenter vos services avec impact et convertir vos visiteurs en clients.",
    "image": "https://jaysolution07.github.io/JaySolution.fr/assets/jaysol.png",
    "video": "",
    "phone": "0677718914",
    "category": "Site web",
    "demo": "https://jaysolution07.github.io/JaySolution.fr/",
    "type": "Site web",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "Exemple : App sur mesure de contrôle du plan de maîtrise sanitaire Tempclean",
    "description": "Cette démonstration présente un exemple concret de logiciel web métier développée sur mesure pour une entreprise afin de digitaliser ses process internes et fluidifier son organisation au quotidien.\nConçue pour s’adapter parfaitement aux besoins du terrain, cette solution permet de centraliser les suivis, sécuriser les données, automatiser les contrôles et offrir une expérience simple, rapide et professionnelle sur mobile, tablette et ordinateur.\nChaque projet que je développe est pensé comme un véritable outil de productivité et de croissance, avec une interface moderne, une logique métier précise et des automatisations qui répondent exactement aux contraintes du client.\nCette démo illustre le niveau de personnalisation que je peux apporter à votre entreprise à travers des logiciels métier sur mesure, plateformes internes, outils de gestion ou solutions digitales spécifiques, avec un seul objectif : vous faire gagner du temps, améliorer vos performances et professionnaliser votre image.",
    "image": "https://raw.githubusercontent.com/jaysolution07/TempClean/main/logo.png",
    "video": "",
    "phone": "0677718914",
    "category": "PMS & HACCP",
    "demo": "https://jaysolution07.github.io/Demo-TempClean/",
    "type": "Application",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "InterMaster",
    "description": "InterMaster est une plateforme web de gestion des interventions. Elle permet de centraliser les demandes, attribuer et planifier les interventions, gérer les utilisateurs et leurs droits, suivre l’avancement des tâches, consulter les statistiques et conserver un historique des opérations. Le logiciel intègre également la gestion de photos, la synchronisation des données et une interface responsive adaptée aux ordinateurs, tablettes et smartphones.",
    "image": "https://raw.githubusercontent.com/jaysolution07/Demo-InterMaster/main/intermaster.png",
    "video": "",
    "phone": "0677718914",
    "category": "Pilotage",
    "demo": "https://jaysolution07.github.io/Demo-InterMaster/",
    "type": "Application",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  },
  {
    "name": "CRM LabOra",
    "description": "Labora — Votre CRM pour piloter simplement votre activité commerciale. Centralisez vos clients, prospects, rendez-vous, devis et contrats dans une plateforme unique, intuitive et accessible partout.",
    "image": "https://raw.githubusercontent.com/jaysolution07/LabOra-demo/main/lab.png",
    "video": "",
    "phone": "0677718914",
    "category": "Pilotage",
    "demo": "https://jaysolution07.github.io/LabOra-demo/",
    "type": "Application",
    "Prix ferme": "",
    "Prix à partir de": "",
    "abonnement ferme": "",
    "abonnement à partir de": ""
  }
];
const SITE_PHONE = "0677718914";
// Libellés orientés métier — seules les VALEURS de filtrage (app.category / app.type) sont conservées telles quelles.
const TYPE_LABELS = {
  'Application': 'Logiciels métier',
  'Fichier Excel': 'Outils Excel',
  'Site web': 'Sites web (en complément)'
};
const CATEGORY_LABELS = {
  'HACCP': 'PMS & HACCP',
  'Production': 'Production & recettes',
  'Stock': 'Gestion de stock',
  'Tracabilite': 'Traçabilité'
};
const PLACEHOLDER_SVG = `<svg class="card-placeholder-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="32" cy="23" r="20" fill="none" stroke="#19c37d" stroke-width="1.2" opacity="0.25" stroke-dasharray="4 3"/>
  <rect x="15" y="9" width="34" height="25" rx="4" fill="none" stroke="#19c37d" stroke-width="2.5"/>
  <line x1="32" y1="34" x2="32" y2="41" stroke="#19c37d" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="24" y1="41" x2="40" y2="41" stroke="#19c37d" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="21" y="14" width="9" height="7" rx="1.5" fill="#19c37d" opacity="0.75"/>
</svg>`;

// ✅ Les filtres fonctionnent dès le chargement, sur le contenu de secours
window.ALL_APPS = FALLBACK_APPS;

function hideLoader(){
  const loader = document.getElementById('apps-loader');
  if (loader) loader.style.display = 'none';
}

function imgError(img){
  const wrap = img.parentElement;
  if (!wrap || wrap.dataset.fallback) return;
  wrap.dataset.fallback = '1';
  wrap.innerHTML = PLACEHOLDER_SVG;
}

function populateFilters(apps, explicitCategories){
  const cats  = explicitCategories || [...new Set(apps.map(a => a.category).filter(Boolean))];
  const types = [...new Set(apps.map(a => a.type).filter(Boolean))];

  const catSelect = document.getElementById('category-filter');
  catSelect.innerHTML = '<option value="">Toutes les catégories</option>';
  cats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = CATEGORY_LABELS[cat] || cat;
    catSelect.appendChild(opt);
  });

  const typeSelect = document.getElementById('type-filter');
  typeSelect.innerHTML = '<option value="">Tous les types</option>';
  types.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = TYPE_LABELS[t] || t;
    typeSelect.appendChild(opt);
  });
}

function getFiltered(){
  const cat = document.getElementById('category-filter').value;
  const typ = document.getElementById('type-filter').value;
  return window.ALL_APPS.filter(app =>
    (!cat || app.category === cat) &&
    (!typ || app.type === typ)
  );
}

function wireFilters(){
  document.getElementById('category-filter').onchange = () => renderApps(getFiltered());
  document.getElementById('type-filter').onchange     = () => renderApps(getFiltered());
}

const APPS_CACHE_KEY = 'jay_apps_cache_v1';

function applyApiApps(data){
  const list = data.apps || data;
  if (!Array.isArray(list) || list.length === 0) return false;

  window.ALL_APPS = list;
  populateFilters(list, data.categories);
  wireFilters();
  renderApps(list);
  hideLoader();

  // ✅ on mémorise la liste : prochaines visites ultra-rapides, même si l'API est lente
  try { localStorage.setItem(APPS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data })); } catch(e) {}
  return true;
}

async function loadApps(triedOnce){
  if (API_URL.includes("URL_APPS_SCRIPT")) { hideLoader(); return; }

  // 1️⃣ la liste intégrée en dur est déjà affichée ; si une version en cache existe, on l'affiche immédiatement
  try {
    const cached = JSON.parse(localStorage.getItem(APPS_CACHE_KEY) || 'null');
    if (cached && cached.data && applyApiApps(cached.data)) { /* l'API rafraîchit ensuite en arrière-plan */ }
  } catch(e) {}

  // 2️⃣ appel API avec timeout (l'API peut démarrer à froid plusieurs secondes)
  try {
    let res;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try { res = await fetch(API_URL, { signal: ctrl.signal }); }
    finally { clearTimeout(timer); }

    if (!res.ok) throw new Error('HTTP ' + res.status);
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) throw new Error('Réponse non JSON : ' + contentType);

    const data = await res.json();
    applyApiApps(data);
  } catch(e) {
    // ✅ en cas d'échec : la liste intégrée en dur reste affichée (jamais de section vide)
    console.warn('Apps non rafraîchies — liste intégrée affichée :', e);
    if (!triedOnce) {
      // l'API Google Apps Script répond souvent après quelques secondes : on retente une fois
      setTimeout(() => loadApps(true), 6000);
    }
  }
  hideLoader();
}

/* Vocabulaire : on parle de « logiciel » plutôt que d'« application » */
/* Vocabulaire : « logiciel » plutôt que « application » */
/* Vocabulaire : « logiciel » plutôt que « application » */
/* Vocabulaire : « logiciel » plutôt que « application » */
/* Vocabulaire : « logiciel » plutôt que « application » */
function wording(str){
  if (!str) return str;
  var out = str
    .replace(/\bune seule application\b/g, 'un seul logiciel')
    .replace(/\bUne seule application\b/g, 'Un seul logiciel')
    .replace(/\bd[’']application\b/g, 'de logiciel')
    .replace(/\bD[’']application\b/g, 'De logiciel')
    .replace(/\bUne application\b/g, 'Un logiciel')
    .replace(/\bune application\b/g, 'un logiciel')
    .replace(/\bCette application\b/g, 'Ce logiciel')
    .replace(/\bcette application\b/g, 'ce logiciel')
    .replace(/\bL[’']application\b/g, 'Le logiciel')
    .replace(/\bl[’']application\b/g, 'le logiciel')
    .replace(/\bApplications\b/g, 'Logiciels')
    .replace(/\bapplications\b/g, 'logiciels')
    .replace(/\bApplication\b/g, 'Logiciel')
    .replace(/\bapplication\b/g, 'logiciel');

  var fem = {
    'conçue': 'conçu', 'conçues': 'conçus',
    'développée': 'développé', 'développées': 'développés',
    'pensée': 'pensé', 'pensées': 'pensés',
    'dédiée': 'dédié', 'dédiées': 'dédiés',
    'adaptée': 'adapté', 'adaptées': 'adaptés',
    'intuitive': 'intuitif', 'intelligente': 'intelligent'
  };
  var re = /\b(logiciels?)([^.!?]{0,70}?)\b(conçue|conçues|développée|développées|pensée|pensées|dédiée|dédiées|adaptée|adaptées|intuitive|intelligente)\b/g;
  for (var pass = 0; pass < 3; pass++) {
    out = out.replace(re, function(m, head, middle, word){
      return head + middle + fem[word];
    });
  }
  return out;
}

function renderApps(apps){
  const container = document.getElementById('apps');
  container.innerHTML = '';

  const grouped = {};

  // ✅ on groupe les apps par catégorie
  apps.forEach(app => {
    const type = app.type || "Autres";
if (!grouped[type]) grouped[type] = [];
grouped[type].push(app);
  });

  // ✅ on affiche chaque catégorie avec son bloc
  Object.entries(grouped).forEach(([type, items]) => {
    const typeLabel = TYPE_LABELS[type] || type;
    const section = document.createElement('div');
    section.className = 'category-block reveal';

    section.innerHTML = `
      <div class="category-header">
        <h3>${typeLabel}</h3>
        <div class="category-line"></div>
      </div>
      <div class="category-grid"></div>
    `;

    const grid = section.querySelector('.category-grid');

    items.forEach((app, index) => {
      const div = document.createElement('div');
      div.className = 'card reveal';
      if (index >= 2) div.style.display = 'none';
      div.innerHTML = `
        ${app.image
          ? `<div class="card-img-wrap"><img src="${app.image}" alt="JaySolution — ${app.name}" loading="lazy" onerror="imgError(this)"></div>`
          : `<div class="card-img-wrap">${PLACEHOLDER_SVG}</div>`}
        <div class="card-body">
          <h3>${app.name}</h3>

<div class="card-price">
  ${
    app["Prix ferme"]
      ? `${app["Prix ferme"]} €`
      : app["Prix à partir de"]
      ? `À partir de ${app["Prix à partir de"]} €`
      : app["abonnement ferme"]
      ? `${app["abonnement ferme"]} € / mois`
      : app["abonnement à partir de"]
      ? `À partir de ${app["abonnement à partir de"]} € / mois`
      : 'Demander un devis'
  }
</div>

<p class="desc">${wording(app.description)}</p>
<span class="read-more">Afficher plus ↓</span>

          ${extractYouTubeId(app.video) ? `
            <iframe 
              src="https://www.youtube.com/embed/${extractYouTubeId(app.video)}"
              title="${app.name} — Démo vidéo JaySolution"
              allowfullscreen
              loading="lazy"
            ></iframe>
          ` : ``}

          <div class="card-actions">
            <button class="btn btn-outline" onclick="window.location.href='tel:${app.phone || SITE_PHONE}'">Appeler</button>
            ${app.demo ? `<button class="btn btn-outline" onclick="handleDemo('${app.type}','${app.demo}')">
  ${
    app.type === 'Fichier Excel'
      ? 'Télécharger la démo'
      : app.type === 'Site web'
      ? 'Voir le site'
      : 'Démo'
  }
</button>` : ''}
            <button class="btn btn-primary" onclick="openForm('${app.name}')">Contacter</button>
          </div>
        </div>
      `;

      grid.appendChild(div);
    });
if (items.length > 2) {
  const moreBtn = document.createElement('button');
  moreBtn.className = 'btn btn-outline';
  moreBtn.style.marginTop = '20px';
  moreBtn.textContent = `Voir plus (${items.length - 2})`;

  moreBtn.onclick = () => {
    const hiddenCards = grid.querySelectorAll('.card');
    const expanded = moreBtn.dataset.expanded === 'true';

    hiddenCards.forEach((card, i) => {
      if (i >= 2) {
        card.style.display = expanded ? 'none' : '';
      }
    });

    moreBtn.dataset.expanded = !expanded;
    moreBtn.textContent = expanded
      ? `Voir plus (${items.length - 2})`
      : 'Voir moins ↑';
  };

  section.appendChild(moreBtn);
}
    container.appendChild(section);
  });

  observeReveal();
}
function extractYouTubeId(url){
  if(!url) return null;

  let m = url.match(/v=([^&]+)/);
  if(m) return m[1];

  m = url.match(/youtu\.be\/([^?]+)/);
  if(m) return m[1];

  // sécurité : si c'est trop court ou bizarre → on refuse
  if(url.length < 6) return null;

  return url;
}

function openForm(appName = ""){
  const modal = document.getElementById('overlay');
  const title = modal.querySelector('h3');
  const sub   = modal.querySelector('.modal-sub');
  const msg   = document.getElementById('message');

  if(appName){
    title.textContent = appName;
    sub.textContent   = "Vous êtes intéressé par cette solution — réponse sous 24h";
    msg.placeholder   = `Je souhaite en savoir plus sur ${appName}…`;
    msg.value         = "";
  } else {
    title.textContent = "Parlons de votre process";
    sub.textContent   = "Réponse sous 24h";
    msg.placeholder   = "Décrivez votre process : stock, HACCP, production, traçabilité…";
    msg.value         = "";
  }

  modal.classList.add('active');
}
function closeForm(){ document.getElementById('overlay').classList.remove('active'); }

function handleOverlayClick(e){
  if (e.target === document.getElementById('overlay')) closeForm();
}
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;

  toast.style.borderColor = isError
    ? 'rgba(255,80,80,0.35)'
    : 'rgba(25,195,125,0.25)';

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
async function sendForm(){
  const appTitle = document.getElementById('overlay').querySelector('h3').textContent;

  const payload = {
    name:    document.getElementById('name').value,
    email:   document.getElementById('email').value,
    phone:   document.getElementById('phone').value,
    message: document.getElementById('message').value,
    app:     appTitle !== "Parlons de votre process" ? appTitle : ""
  };

  // ✅ UX instantanée
  showToast('✅ Votre demande a bien été envoyée.');
  closeForm();

  // ✅ envoi arrière-plan
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).catch(() => {
    setTimeout(() => {
      showToast("⚠️ Petit souci lors de l'envoi. Merci de réessayer.", true);
    }, 500);
  });
}

// Scroll reveal
function observeReveal(){
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(el => obs.observe(el));
}

observeReveal();
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('read-more')) {
    const btn = e.target;
    const text = btn.previousElementSibling;

    text.classList.toggle('expanded');

    if (text.classList.contains('expanded')) {
      btn.textContent = "Afficher moins ↑";
    } else {
      btn.textContent = "Afficher plus ↓";
    }
  }
});
function handleDemo(type, url) {
  if (type === 'Fichier Excel') {
    const a = document.createElement('a');
    a.href = url; a.download = ''; a.click();
  } else {
    window.open(url, '_blank', 'noopener');
  }
}
// ✅ démarrage : le contenu de secours est visible immédiatement, l'API vient l'enrichir
// le bloc réalisations n'existe que sur l'accueil
if (document.getElementById('apps')) {
  populateFilters(FALLBACK_APPS);
  wireFilters();
  hideLoader();
  loadApps();
}

// ✅ Menu mobile (hamburger)
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    });
  });
}
document.querySelectorAll('.legal-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const content = document.getElementById(target);

    const isOpen = content.classList.contains('active');

    // reset tout
    document.querySelectorAll('.legal-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.legal-toggle').forEach(el => el.classList.remove('active'));

    // si c'était fermé → on ouvre
    if (!isOpen) {
      content.classList.add('active');
      btn.classList.add('active');
    }
  });
});