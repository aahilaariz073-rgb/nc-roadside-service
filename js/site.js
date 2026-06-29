/* ============================================================
   NC ROADSIDE SERVICE — shared site behaviour
   ============================================================ */
(function () {
  const PHONE = "(704) 594-5353";
  const TEL = "+17045945353";

  const NAV = [
    { label: "Home",          href: "index.html",        n: "01" },
    { label: "Services",      href: "services.html",     n: "02", drop: "svc" },
    { label: "Service Areas", href: "service-areas.html",n: "03", drop: "area" },
    { label: "About",         href: "about.html",        n: "04" },
    { label: "Blog",          href: "blog.html",         n: "05" },
    { label: "Contact",       href: "contact.html",      n: "06" },
  ];

  const AREAS = [
    {label:"Charlotte",   slug:"area-charlotte-nc.html"},
    {label:"Belmont",     slug:"area-belmont-nc.html"},
    {label:"Concord",     slug:"area-concord-nc.html"},
    {label:"Gastonia",    slug:"area-gastonia-nc.html"},
    {label:"Matthews",    slug:"area-matthews-nc.html"},
    {label:"Mint Hill",   slug:"area-mint-hill-nc.html"},
    {label:"Pineville",   slug:"area-pineville-nc.html"},
    {label:"Huntersville",slug:"area-huntersville-nc.html"},
    {label:"Harrisburg",  slug:"area-harrisburg-nc.html"},
    {label:"Stallings",   slug:"area-stallings-nc.html"},
    {label:"Weddington",  slug:"area-weddington-nc.html"},
    {label:"Salisbury",   slug:"area-salisbury-nc.html"},
  ];

  const SERVICES = [
    "Jump Starts & Battery","Flat Tire Change","Fuel Delivery","Lockout Service",
    "Winch-Out & Recovery","Mobile Tire Repair","Mobile Mechanic","Fleet & Commercial"
  ];

  /* service items with icons + one-liners for the mega-menu */
  const SVC_ITEMS = [
    { href:"service-jump-start.html",    label:"Jump Starts & Battery",  desc:"Dead battery? Boosted or swapped on the spot.",
      ico:'<svg viewBox="0 0 24 24"><path d="M7 7h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M22 10v4M9 8l-1 4h3l-1 4"/></svg>' },
    { href:"service-flat-tire.html",     label:"Flat Tire Change",        desc:"Spare mounted & torqued to spec, fast.",
      ico:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>' },
    { href:"service-fuel-delivery.html", label:"Fuel Delivery",           desc:"Out of gas? We bring enough to reach the pump.",
      ico:'<svg viewBox="0 0 24 24"><path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M3 21h14"/><path d="M15 9h2.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 0 2 2 2 2 0 0 0 2-2V8l-3-3"/></svg>' },
    { href:"service-lockout.html",       label:"Lockout Service",         desc:"Keys locked in? Back inside with zero damage.",
      ico:'<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
    { href:"service-winch-out.html",     label:"Winch-Out & Recovery",    desc:"Ditch, mud or snow — we pull you right out.",
      ico:'<svg viewBox="0 0 24 24"><path d="M3 7h7l3 4M3 7v8h2"/><circle cx="8" cy="17" r="2"/><path d="M10 17h5"/><path d="M17 5a3 3 0 1 1-.1 6"/><path d="M14 8h3"/></svg>' },
    { href:"service-tire-repair.html",   label:"Mobile Tire Repair",      desc:"Plug, patch or replace at your exact location.",
      ico:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/><circle cx="12" cy="12" r="2"/></svg>' },
    { href:"service-mobile-mechanic.html",label:"Mobile Mechanic",        desc:"On-site diagnostics and minor repairs.",
      ico:'<svg viewBox="0 0 24 24"><path d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.2L4 15.3 7.7 19l5.6-5.6a3.5 3.5 0 0 0 4.2-4.9l-2.3 2.3-2-2 2.3-2.3Z"/></svg>' },
    { href:"service-fleet.html",         label:"Fleet & Commercial",      desc:"Priority accounts for business fleets.",
      ico:'<svg viewBox="0 0 24 24"><path d="M3 14V6a1 1 0 0 1 1-1h10v9M14 8h3.5l2.5 3v3h-2"/><path d="M2 14h12"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>' },
  ];

  const I = {
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2.1Z"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="m6 9 6 6 6-6"/></svg>',
    pin_sm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  };

  function currentFile() {
    const p = location.pathname.split("/").pop();
    return p && p.length ? p : "index.html";
  }

  /* ── Services mega-menu ── */
  function buildSvcDrop() {
    const grid = SVC_ITEMS.map(s => `
      <a class="drop-svc-item" href="${s.href}">
        <span class="dsi-ico">${s.ico}</span>
        <span class="dsi-text"><b>${s.label}</b><span>${s.desc}</span></span>
      </a>`).join("");
    return `
    <div class="nav-drop svc-drop" role="menu">
      <div class="drop-head">
        <span class="drop-eyebrow">24/7 Emergency Services</span>
        <a href="services.html" class="drop-viewall">View all services →</a>
      </div>
      <div class="drop-svc-grid">${grid}</div>
    </div>`;
  }

  /* ── Service Areas dropdown ── */
  function buildAreaDrop() {
    const cities = AREAS.map(a => `
      <a class="drop-area-item" href="${a.slug}">${I.pin_sm}${a.label}</a>`).join("");
    return `
    <div class="nav-drop area-drop" role="menu">
      <div class="drop-head">
        <span class="drop-eyebrow">Greater Charlotte Metro, NC</span>
        <a href="service-areas.html" class="drop-viewall">Coverage map →</a>
      </div>
      <div class="drop-area-grid">${cities}</div>
    </div>`;
  }

  function buildHeader() {
    const cur = currentFile();
    const isServiceDetail = cur.indexOf("service-") === 0 && cur !== "service-areas.html";
    const isActive = (href) => href === cur || (href === "services.html" && isServiceDetail);

    const links = NAV.map(x => {
      const cls = isActive(x.href) ? " active" : "";
      if (x.drop === "svc") return `
        <span class="nav-has-drop">
          <a href="${x.href}" class="nav-drop-trigger${cls}" aria-haspopup="true">${x.label}${I.chev}</a>
          ${buildSvcDrop()}
        </span>`;
      if (x.drop === "area") return `
        <span class="nav-has-drop">
          <a href="${x.href}" class="nav-drop-trigger${cls}" aria-haspopup="true">${x.label}${I.chev}</a>
          ${buildAreaDrop()}
        </span>`;
      return `<a href="${x.href}" class="${cls.trim()}">${x.label}</a>`;
    }).join("");

    const drawerLinks = NAV.map(x => `<a href="${x.href}"><span>${x.n}</span>${x.label}</a>`).join("");

    return `
    <div class="utility">
      <div class="wrap">
        <span class="live u-hide"><span class="led"></span> DISPATCH ONLINE · 24/7 EMERGENCY RESPONSE</span>
        <div class="u-right">
          <span class="u-hide">CHARLOTTE METRO · NC</span>
          <a href="tel:${TEL}">${PHONE}</a>
        </div>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="wrap">
        <a href="index.html" class="brand">
          <img class="mark" src="assets/logo.png" alt="NC Roadside Service LLC logo">
          <span class="bt"><b>NC Roadside Service<i>LLC</i></b></span>
        </a>
        <nav class="nav-main" role="navigation" aria-label="Main navigation">${links}</nav>
        <div class="header-cta">
          <a class="header-phone" href="tel:${TEL}"><b>${PHONE}</b></a>
          <a href="contact.html" class="btn btn-amber">Request Service</a>
          <button class="menu-btn" id="menuBtn" aria-label="Open menu">${I.menu}</button>
        </div>
      </div>
    </header>
    <div class="drawer" id="drawer" aria-hidden="true">
      <div class="d-top">
        <a href="index.html" class="brand"><img class="mark" src="assets/logo.png" alt="NC Roadside Service LLC"><span class="bt"><b>NC Roadside Service<i>LLC</i></b></span></a>
        <button class="d-close" id="drawerClose" aria-label="Close menu">&times;</button>
      </div>
      <nav>${drawerLinks}</nav>
      <div class="d-cta">
        <a href="tel:${TEL}" class="btn btn-amber btn-lg btn-block">${I.phone} Call ${PHONE}</a>
        <a href="contact.html" class="btn btn-line btn-lg btn-block" style="margin-top:10px">Request Service Online</a>
      </div>
    </div>`;
  }

  function buildFooter() {
    const y = new Date().getFullYear();
    const svc = SVC_ITEMS.map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join("");
    const ar = AREAS.map(a => `<li><a href="${a.slug}">${a.label}, NC</a></li>`).join("");
    return `
    <footer class="site-footer" itemscope itemtype="https://schema.org/AutomotiveBusiness">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="brand">
              <img class="mark" src="assets/logo.png" alt="NC Roadside Service LLC" itemprop="logo">
              <span class="bt"><b>NC Roadside Service<i>LLC</i></b></span>
            </a>
            <p itemprop="description">24/7 emergency roadside assistance for drivers and fleets across the greater Charlotte metro — jump starts, tires, lockouts, fuel, recovery, and mobile mechanic. Fast, fair, always one call away.</p>
          </div>
          <div class="foot-col">
            <h4>Our Services</h4>
            <ul>${svc}</ul>
          </div>
          <div class="foot-col">
            <h4>Service Areas</h4>
            <ul>${ar}</ul>
          </div>
          <div class="foot-col">
            <h4>Reach Us</h4>
            <div class="foot-nap">
              <span class="np">${I.phone}<span><b><a href="tel:${TEL}" itemprop="telephone">${PHONE}</a></b><br>24/7 emergency dispatch</span></span>
              <span class="np">${I.pin}<span><b itemprop="addressLocality">Belmont, NC</b><br>Serving the Charlotte metro</span></span>
              <span class="np">${I.clock}<span><b>Open 24 / 7 / 365</b><br>No holidays, no hold music</span></span>
            </div>
            <a href="contact.html" class="btn btn-line" style="margin-top:20px">Request a Free Quote</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${y} NC ROADSIDE SERVICE LLC · ALL RIGHTS RESERVED</span>
          <span>LICENSED &amp; INSURED · SERVING CHARLOTTE METRO, NC</span>
        </div>
      </div>
    </footer>
    <div class="callbar"><a href="tel:${TEL}">${I.phone} Call Now · ${PHONE}</a></div>`;
  }

  function init() {
    const h = document.getElementById("site-header-mount");
    const f = document.getElementById("site-footer-mount");
    if (h) h.innerHTML = buildHeader();
    if (f) f.innerHTML = buildFooter();

    /* shrink header on scroll */
    const header = document.getElementById("siteHeader");
    const onScroll = () => { if (header) header.classList.toggle("shrink", window.scrollY > 30); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* mobile drawer */
    const drawer = document.getElementById("drawer");
    const mb = document.getElementById("menuBtn");
    const dc = document.getElementById("drawerClose");
    if (mb) mb.addEventListener("click", () => { drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); });
    if (dc) dc.addEventListener("click", () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); });
    if (drawer) drawer.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); }));

    /* close dropdowns when clicking outside */
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-has-drop")) {
        document.querySelectorAll(".nav-drop").forEach(d => d.classList.remove("open"));
      }
    });

    /* keyboard: Escape closes any open dropdown */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") document.querySelectorAll(".nav-drop").forEach(d => d.classList.remove("open"));
    });

    /* scroll reveals */
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

    /* request form */
    document.querySelectorAll("form[data-request]").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const scope = form.closest(".form-card") || form.parentElement;
        const ok = scope ? scope.querySelector("[data-ok]") : null;
        if (ok) { form.style.display = "none"; ok.style.display = "flex"; }
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
/* ===== GHL Lead Popup (added separately) ===== */
(function(){
  var DELAY = 4000;            // 4 seconds
  var ONCE_KEY = "ncrs_lead_popup_seen";

  function buildPopup(){
    // don't show if already seen this session, or if a popup already exists
    try { if (sessionStorage.getItem(ONCE_KEY)) return; } catch(e){}
    if (document.getElementById("ncrs-lead-overlay")) return;

    // inject styles once
    if (!document.getElementById("ncrs-lead-styles")){
      var st = document.createElement("style");
      st.id = "ncrs-lead-styles";
      st.textContent =
        "#ncrs-lead-overlay{position:fixed;inset:0;background:rgba(10,15,25,.72);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .25s ease}"+
        "#ncrs-lead-overlay.show{opacity:1}"+
        "#ncrs-lead-box{position:relative;background:#fff;border-radius:14px;width:100%;max-width:480px;max-height:90vh;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);transform:translateY(12px);transition:transform .25s ease}"+
        "#ncrs-lead-overlay.show #ncrs-lead-box{transform:translateY(0)}"+
        "#ncrs-lead-head{background:#142A47;color:#fff;padding:18px 22px;font-family:'Anton',sans-serif;font-size:20px;letter-spacing:.02em;text-transform:uppercase}"+
        "#ncrs-lead-head small{display:block;font-family:'Spline Sans Mono',monospace;font-size:11px;letter-spacing:.1em;color:#F4BC3F;margin-top:4px;text-transform:uppercase;font-weight:400}"+
        "#ncrs-lead-close{position:absolute;top:12px;right:14px;width:32px;height:32px;border:none;border-radius:50%;background:rgba(255,255,255,.18);color:#fff;font-size:20px;line-height:1;cursor:pointer;z-index:2}"+
        "#ncrs-lead-close:hover{background:rgba(255,255,255,.32)}"+
     "#ncrs-lead-body{padding:0;overflow-y:auto;max-height:80vh}"+
        "#ncrs-lead-body iframe{width:100%;height:900px;border:none;display:block}";
      document.head.appendChild(st);
    }

    var overlay = document.createElement("div");
    overlay.id = "ncrs-lead-overlay";
    overlay.innerHTML =
      '<div id="ncrs-lead-box">'+
        '<button id="ncrs-lead-close" aria-label="Close">&times;</button>'+
        '<div id="ncrs-lead-head">Truck down? Get help fast.<small>24/7 &middot; Charlotte Metro &middot; (704) 594-5353</small></div>'+
        '<div id="ncrs-lead-body">'+
          '<iframe src="https://api.leadconnectorhq.com/widget/form/kVCI4tPfHr2SxUpttvbl" '+
          'id="inline-kVCI4tPfHr2SxUpttvbl" title="NC Roadside Services" '+
          'data-form-id="kVCI4tPfHr2SxUpttvbl"></iframe>'+
        '</div>'+
      '</div>';
    document.body.appendChild(overlay);

    // load GHL embed script once
    if (!document.getElementById("ncrs-ghl-embed")){
      var sc = document.createElement("script");
      sc.id = "ncrs-ghl-embed";
      sc.src = "https://link.msgsndr.com/js/form_embed.js";
      document.body.appendChild(sc);
    }

    requestAnimationFrame(function(){ overlay.classList.add("show"); });

    function close(){
      overlay.classList.remove("show");
      try { sessionStorage.setItem(ONCE_KEY, "1"); } catch(e){}
      setTimeout(function(){ if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 280);
    }
    document.getElementById("ncrs-lead-close").addEventListener("click", close);
    overlay.addEventListener("click", function(e){ if (e.target === overlay) close(); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") close(); });
  }

  function start(){ setTimeout(buildPopup, DELAY); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
