// Tatlı okyanus sahnesi: gökyüzü, güneş, bulutlar, martılar, dalgalar,
// sağda sandalda balık tutan turuncu maskot. Yalnız CSS animasyonu, script yok.
export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<style>
@keyframes drift { from { transform: translateX(-300px) } to { transform: translateX(1900px) } }
@keyframes waveA { from { transform: translateX(0) } to { transform: translateX(-400px) } }
@keyframes waveC { from { transform: translateX(0) } to { transform: translateX(-300px) } }
@keyframes waveB { from { transform: translateX(-400px) } to { transform: translateX(0) } }
@keyframes bob { 0%,100% { transform: translateY(0) rotate(-1.5deg) } 50% { transform: translateY(9px) rotate(1.5deg) } }
@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(6px) } }
@keyframes blink { 0%,92%,100% { transform: scaleY(1) } 95% { transform: scaleY(.1) } }
@keyframes ripple { 0% { transform: scale(.3); opacity: .8 } 100% { transform: scale(1.6); opacity: 0 } }
@keyframes jump { 0%,55% { transform: translate(0,0) rotate(0); opacity: 0 }
  58% { opacity: 1 } 70% { transform: translate(-70px,-120px) rotate(-40deg) }
  84% { transform: translate(-140px,0) rotate(-110deg); opacity: 1 } 86%,100% { opacity: 0; transform: translate(-140px,10px) rotate(-120deg) } }
@keyframes bubble { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: .7 } 100% { transform: translateY(-260px); opacity: 0 } }
@keyframes swim { from { transform: translateX(1800px) } to { transform: translateX(-300px) } }
@keyframes flap { 0%,100% { transform: scaleY(1) } 50% { transform: scaleY(-.6) } }
@keyframes sparkle { 0%,100% { opacity: .15 } 50% { opacity: .9 } }
@keyframes sunglow { 0%,100% { transform: scale(1) } 50% { transform: scale(1.06) } }
.cloud { animation: drift linear infinite }
.wa { animation: waveC 9s linear infinite }
.wb { animation: waveB 13s linear infinite }
.wc { animation: waveA 17s linear infinite }
.boat { animation: bob 4.5s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 80% }
.bobber { animation: float 2.2s ease-in-out infinite }
.eye { animation: blink 5s infinite; transform-box: fill-box; transform-origin: center }
.rip { animation: ripple 2.2s ease-out infinite; transform-box: fill-box; transform-origin: center }
.jumper { animation: jump 7s ease-in-out infinite }
.bub { animation: bubble 6s ease-in infinite }
.swim { animation: swim linear infinite }
.gull { animation: drift 38s linear infinite }
.wing { animation: flap .9s ease-in-out infinite; transform-box: fill-box; transform-origin: center }
.spk { animation: sparkle 3s ease-in-out infinite }
.sun { animation: sunglow 6s ease-in-out infinite; transform-box: fill-box; transform-origin: center }
.dock { transition: transform .4s }
@media (max-aspect-ratio: 3/2) { .dock { transform: translateX(-150px) } }
@media (max-aspect-ratio: 13/10) { .dock { transform: translateX(-250px) } }
@media (max-aspect-ratio: 11/10) { .dock { transform: translateX(-350px) } }
@media (max-aspect-ratio: 9/10) { .dock { transform: translateX(-425px) } }
@media (max-aspect-ratio: 3/4) { .dock { transform: translateX(-500px) } }
@media (max-aspect-ratio: 3/5) { .dock { transform: translateX(-550px) } }
@media (max-aspect-ratio: 1/2) { .dock { transform: translateX(-600px) } }
@media (prefers-reduced-motion: reduce) { * { animation: none !important } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9fd8ef"/><stop offset=".55" stop-color="#cdeef7"/><stop offset="1" stop-color="#ffe7d6"/>
  </linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4fb3d4"/><stop offset=".45" stop-color="#2a86b3"/><stop offset="1" stop-color="#14527e"/>
  </linearGradient>
  <radialGradient id="sunG"><stop offset="0" stop-color="#fff6c9"/><stop offset=".6" stop-color="#ffd98a"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient>
  <g id="cl"><ellipse cx="0" cy="0" rx="70" ry="26" fill="#fff"/><circle cx="-30" cy="-14" r="28" fill="#fff"/><circle cx="18" cy="-22" r="36" fill="#fff"/><circle cx="50" cy="-6" r="22" fill="#fff"/></g>
  <g id="fish"><ellipse cx="0" cy="0" rx="22" ry="12"/><path d="M18 0 L36 -12 L36 12 Z"/><circle cx="-11" cy="-3" r="2.6" fill="#173042"/></g>
</defs>

<rect width="1600" height="1000" fill="url(#sky)"/>
<g class="sun"><circle cx="230" cy="170" r="150" fill="url(#sunG)"/><circle cx="230" cy="170" r="62" fill="#ffe9a3"/></g>

<g opacity=".95">
  <g class="cloud" style="animation-duration:70s;animation-delay:-10s"><use href="#cl" x="0" y="140"/></g>
  <g class="cloud" style="animation-duration:95s;animation-delay:-55s"><g transform="translate(0 250) scale(.7)"><use href="#cl"/></g></g>
  <g class="cloud" style="animation-duration:80s;animation-delay:-35s"><g transform="translate(0 70) scale(.55)"><use href="#cl"/></g></g>
</g>

<g class="gull" style="animation-delay:-12s" fill="none" stroke="#3c5866" stroke-width="3" stroke-linecap="round">
  <g class="wing"><path d="M0 200 q12 -12 24 0 q12 -12 24 0"/></g>
  <g class="wing" style="animation-delay:-.3s"><path d="M60 230 q9 -9 18 0 q9 -9 18 0"/></g>
</g>

<rect y="560" width="1600" height="440" fill="url(#sea)"/>
<g fill="#ffffff">
  <rect class="spk" x="420" y="600" width="40" height="3" rx="1.5"/>
  <rect class="spk" style="animation-delay:-1s" x="760" y="640" width="28" height="3" rx="1.5"/>
  <rect class="spk" style="animation-delay:-2s" x="150" y="680" width="34" height="3" rx="1.5"/>
  <rect class="spk" style="animation-delay:-1.6s" x="1000" y="610" width="24" height="3" rx="1.5"/>
</g>

<g class="swim" style="animation-duration:46s;animation-delay:-8s" fill="#ffb36b" opacity=".75"><use href="#fish" x="0" y="840"/></g>
<g class="swim" style="animation-duration:60s;animation-delay:-30s" fill="#8fe0d1" opacity=".7"><g transform="translate(0 900) scale(.8)"><use href="#fish"/></g></g>
<g class="swim" style="animation-duration:52s;animation-delay:-22s" fill="#ffd36e" opacity=".6"><g transform="translate(0 790) scale(.6)"><use href="#fish"/></g></g>

<g fill="none" stroke="#e6f7ff" stroke-width="2.5" opacity=".7">
  <circle class="bub" cx="300" cy="980" r="6"/>
  <circle class="bub" style="animation-delay:-2s" cx="320" cy="990" r="4"/>
  <circle class="bub" style="animation-delay:-4s" cx="880" cy="985" r="5"/>
  <circle class="bub" style="animation-delay:-3s" cx="620" cy="995" r="3.5"/>
</g>

<g class="wc" opacity=".55"><path fill="#7cc9e2" d="M0 575 q50 -18 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 V620 H0 Z"/></g>
<g class="wb" opacity=".5"><path fill="#3e9ec7" d="M0 640 q100 -26 200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 V700 H0 Z"/></g>

<!-- Sağda sabit duran sandal ve maskot -->
<g class="dock">
  <g transform="translate(1060 0)">
    <!-- olta ipi ve şamandıra -->
    <path d="M247 368 Q170 420 118 590" fill="none" stroke="#3a4d57" stroke-width="2"/>
    <g class="bobber"><circle cx="118" cy="592" r="9" fill="#ff5f57"/><path d="M109 592 a9 9 0 0 0 18 0 Z" fill="#fff"/></g>
    <ellipse class="rip" cx="118" cy="602" rx="26" ry="6" fill="none" stroke="#e6f7ff" stroke-width="2"/>
    <g class="jumper" style="transform-box:view-box"><g fill="#ffb36b" transform="translate(70 605)"><use href="#fish" transform="scale(.9)"/></g></g>

    <g class="boat">
      <!-- maskot -->
      <g transform="translate(330 470)">
        <rect x="-10" y="70" width="12" height="26" rx="4" fill="#c4643f"/>
        <rect x="26" y="70" width="12" height="26" rx="4" fill="#c4643f"/>
        <rect x="-38" y="-10" width="104" height="86" rx="20" fill="#d97757"/>
        <rect x="-54" y="22" width="22" height="16" rx="7" fill="#d97757"/>
        <rect x="60" y="22" width="22" height="16" rx="7" fill="#d97757"/>
        <rect class="eye" x="-8" y="16" width="10" height="22" rx="5" fill="#2b1d17"/>
        <rect class="eye" x="28" y="16" width="10" height="22" rx="5" fill="#2b1d17"/>
        <ellipse cx="-18" cy="48" rx="9" ry="5" fill="#f2a58b" opacity=".8"/>
        <ellipse cx="50" cy="48" rx="9" ry="5" fill="#f2a58b" opacity=".8"/>
        <path d="M6 50 q8 8 16 0" fill="none" stroke="#2b1d17" stroke-width="3" stroke-linecap="round"/>
        <!-- balıkçı şapkası -->
        <path d="M-50 -8 q64 -26 128 0 z" fill="#f4d35e"/>
        <rect x="-26" y="-44" width="80" height="38" rx="16" fill="#f4d35e"/>
        <rect x="-26" y="-18" width="80" height="8" fill="#e0b93f"/>
      </g>
      <!-- olta kamışı (maskotun elinde) -->
      <path d="M268 498 L247 368" stroke="#7a4b2a" stroke-width="5" stroke-linecap="round"/>
      <circle cx="262" cy="466" r="6" fill="#9aa6ad"/>
      <!-- sandal -->
      <path d="M210 560 Q215 620 300 628 L430 628 Q500 622 520 560 Z" fill="#b5653a"/>
      <path d="M210 560 L520 560 L514 576 L216 576 Z" fill="#8c4826"/>
      <path d="M228 598 L506 598" stroke="#9c5430" stroke-width="3"/>
      <path d="M200 556 L530 556" stroke="#f6efe4" stroke-width="7" stroke-linecap="round"/>
      <!-- küçük kova -->
      <path d="M450 512 L486 512 L480 556 L456 556 Z" fill="#5fb6d6"/>
      <ellipse cx="468" cy="512" rx="18" ry="5" fill="#3e8fb0"/>
      <path d="M462 506 l6 -14 l6 14" fill="#ffb36b"/>
    </g>
    <path d="M190 640 q40 -10 80 0 t80 0 t80 0 t80 0" fill="none" stroke="#e6f7ff" stroke-width="3" opacity=".6"/>
  </g>
</g>

<g class="wa" opacity=".9"><path fill="#1f6f9c" d="M0 760 q75 -30 150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 t150 0 V1000 H0 Z"/></g>
<g class="wb" style="animation-duration:11s" opacity=".95"><path fill="#155a86" d="M0 860 q100 -28 200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 V1000 H0 Z"/></g>
</svg>`
