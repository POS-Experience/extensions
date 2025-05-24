(function(){"use strict";var n=document.createElement("style");n.textContent=`@charset "UTF-8";:host{display:block;position:relative;padding:16px;background:#f5f5f5;min-height:100%;overflow:visible}.breadcrumb{display:flex;align-items:center;gap:8px;font-size:14px;color:#aaa;padding:10px 20px}.breadcrumb .crumb:before{content:"›";margin:0 6px;color:#ccc}.nav-card{display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;padding:12px 20px;background:#f9f9f9;border-radius:25px;box-shadow:0 0 8px #0000000d;margin-bottom:16px;gap:12px}.nav-card .nav-btn{background:none;border:none;font-size:24px;cursor:pointer;color:#999}.nav-card .nav-btn:hover{color:#1976d2}.nav-card .nav-item{flex:1 1 auto;text-align:center;padding:8px 16px;border-radius:20px;font-size:14px;cursor:pointer;color:#555;transition:all .2s ease;white-space:nowrap}.nav-card .nav-item:hover{background-color:#e1ecf9;color:#1976d2}.nav-card .nav-item.active{font-weight:700;background-color:#d4e8ff;color:#1976d2;box-shadow:inset 0 0 4px #00000014}.nav-card .nav-item.active:hover{background-color:#c5dcf7;transform:scale(1.04);box-shadow:0 4px 12px #1976d233}.nav-card .nav-item.settings{display:flex;justify-content:center;align-items:center;gap:6px}.settings-card{position:absolute;top:90px;right:40px;background:#fffd;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border-radius:12px;padding:12px;box-shadow:0 4px 12px #0000001a;min-width:220px;z-index:1000}.settings-card ul{list-style:none;margin:0;padding:0}.settings-card ul li{padding:10px;display:flex;align-items:center;gap:8px;cursor:pointer;border-radius:6px;transition:background .2s ease}.settings-card ul li:hover{background:#e6f0fa}.settings-card ul li i{color:#1976d2}.dashboard-background{position:relative;margin:20px;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px #00000014}.dashboard-background img{width:100%;height:auto;display:block;-o-object-fit:cover;object-fit:cover}
/*$vite$:1*/`,document.head.appendChild(n);const e=`<!-- tb-app-nav-panel.component.html -->
<nav class="breadcrumb">
  <span class="crumb">🏠</span>
  <span class="crumb">Global</span>
  <span class="crumb">Local</span>
  <span class="crumb">Device</span>
</nav>

<!-- Hauptpanel -->
<section class="nav-card">
  <button class="nav-btn" (click)="goBackDashboard()">&laquo;</button>

  <div class="nav-item">Info</div>
  <div class="nav-item">Alarm</div>
  <div class="nav-item active">Dashboard</div>
  <div class="nav-item">Geräte-View</div>

  <div class="nav-item settings" (click)="toggleSettingsMenu()">
    <i class="pi pi-cog"></i> Einstellung
    <i class="pi pi-chevron-down"></i>
  </div>
</section>

<!-- Submenü (z. B. unterhalb sichtbar) -->
<div class="settings-card" *ngIf="settingsMenuVisible">
  <ul>
    <li (click)="onSelect('kalender')"><i class="pi pi-calendar"></i> Kalender</li>
    <li (click)="onSelect('infos')"><i class="pi pi-info-circle"></i> Infos</li>
    <li (click)="onSelect('terminal')"><i class="pi pi-terminal"></i> Terminal</li>
    <li (click)="onSelect('dashboard')"><i class="pi pi-th-large"></i> Dashboard</li>
    <li (click)="onSelect('back')"><i class="pi pi-arrow-left"></i> Zurück</li>
  </ul>
</div>

<!-- Hintergrundbild -->
<div class="dashboard-background">
  <img src="https://media.licdn.com/dms/image/v2/D4E3DAQEiB9SaLOOl7g/image-scale_191_1128/image-scale_191_1128/0/1684756384902/p_o_s_the_instore_experience_cover?e=2147483647&v=beta&t=h3cjebSvSR_CSxD9APQJPOVWB7JWKgccTERit18cvb4" alt="POS Dashboard" />
</div>
`;self.PosTemperatureController=function(a,i){a.$scope.message="🌡️ Temperatur läuft!",a.$container[0].innerHTML=e,console.log("✅ Widget geladen: pos-temperature")}})();
