(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e){return`/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}o=l(i.map(i=>{if(i=t(i,a),i=u(i),i in n)return;n[i]=!0;let o=i.endsWith(`.css`);for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=o?`stylesheet`:e,o||(s.as=`script`),s.crossOrigin=``,s.href=i,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),o)return new Promise((e,t)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}).filter(e=>e!==void 0))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=Object.defineProperty,a=(e,t)=>i(e,`name`,{value:t,configurable:!0}),o=(e=>(e[e.Julian=0]=`Julian`,e[e.Gregorian=1]=`Gregorian`,e))(o||{}),s=(e=>(e.Placidus=`P`,e.Koch=`K`,e.Porphyrius=`O`,e.Regiomontanus=`R`,e.Campanus=`C`,e.Equal=`A`,e.VehlowEqual=`V`,e.WholeSign=`W`,e.Meridian=`X`,e.Azimuthal=`H`,e.PolichPage=`T`,e.Alcabitus=`B`,e.Morinus=`M`,e))(s||{}),c=(e=>(e[e.Ascendant=0]=`Ascendant`,e[e.MC=1]=`MC`,e[e.ARMC=2]=`ARMC`,e[e.Vertex=3]=`Vertex`,e[e.EquatorialAscendant=4]=`EquatorialAscendant`,e[e.CoAscendant1=5]=`CoAscendant1`,e[e.CoAscendant2=6]=`CoAscendant2`,e[e.PolarAscendant=7]=`PolarAscendant`,e))(c||{}),l=(e=>(e[e.JPLEphemeris=1]=`JPLEphemeris`,e[e.SwissEphemeris=2]=`SwissEphemeris`,e[e.MoshierEphemeris=4]=`MoshierEphemeris`,e[e.Heliocentric=8]=`Heliocentric`,e[e.TruePositions=16]=`TruePositions`,e[e.J2000=32]=`J2000`,e[e.NoNutation=64]=`NoNutation`,e[e.Speed3=128]=`Speed3`,e[e.Speed=256]=`Speed`,e[e.NoGravitationalDeflection=512]=`NoGravitationalDeflection`,e[e.NoAberration=1024]=`NoAberration`,e[e.Equatorial=2048]=`Equatorial`,e[e.XYZ=4096]=`XYZ`,e[e.Radians=8192]=`Radians`,e[e.Barycentric=16384]=`Barycentric`,e[e.Topocentric=32768]=`Topocentric`,e[e.Sidereal=65536]=`Sidereal`,e[e.ICRS=131072]=`ICRS`,e[e.DpsidepsIAU1980=262144]=`DpsidepsIAU1980`,e[e.JPLHorizons=524288]=`JPLHorizons`,e[e.JPLHorizonsApprox=1048576]=`JPLHorizonsApprox`,e))(l||{}),u={Astrometric:1536,DefaultSwissEphemeris:258,DefaultMoshier:260},d=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.totalBegin=i,this.totalEnd=a,this.penumbralBegin=o,this.penumbralEnd=s}isTotal(){return!!(this.type&4)}isPartial(){return!!(this.type&16)}isPenumbralOnly(){return!!(this.type&64)&&!(this.type&20)}getTotalityDuration(){if(!this.isTotal()||this.totalBegin===0||this.totalEnd===0)return 0;let e=(this.totalEnd-this.totalBegin)*24;return e>0?e:0}getPartialDuration(){if(this.partialBegin===0||this.partialEnd===0)return 0;let e=(this.partialEnd-this.partialBegin)*24;return e>0?e:0}getTotalDuration(){if(this.penumbralBegin===0||this.penumbralEnd===0)return 0;let e=(this.penumbralEnd-this.penumbralBegin)*24;return e>0?e:0}},f=(a(d,`LunarEclipseImpl`),d),p=class{constructor(e,t,n,r,i,a,o,s){this.type=e,this.maximum=t,this.partialBegin=n,this.partialEnd=r,this.centralBegin=i,this.centralEnd=a,this.centerLineBegin=o,this.centerLineEnd=s}isTotal(){return!!(this.type&4)}isAnnular(){return!!(this.type&8)}isHybrid(){return!!(this.type&32)}isPartial(){return!!(this.type&16)}isCentral(){return!!(this.type&1)}isNonCentral(){return!!(this.type&2)}},m=(a(p,`SolarEclipseImpl`),p),h=class{constructor(e,t,n,r,i=1){this.year=e,this.month=t,this.day=n,this.hour=r,this.calendarType=i}toISOString(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60),n=Math.floor(((this.hour-e)*60-t)*60),r=Math.floor((((this.hour-e)*60-t)*60-n)*1e3),i=Math.abs(this.year).toString().padStart(4,`0`);return`${this.year<0?`-`:``}${i}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)}T${e.toString().padStart(2,`0`)}:${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}.${r.toString().padStart(3,`0`)}Z`}toString(){let e=this.calendarType===1?`Gregorian`:`Julian`;return`${this.year<0?`${Math.abs(this.year)} BCE`:this.year.toString()}-${this.month.toString().padStart(2,`0`)}-${this.day.toString().padStart(2,`0`)} ${this.hour.toFixed(6)} hours (${e})`}},g=(a(h,`DateTimeImpl`),h),_=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}remove(e){return Array.isArray(e)?e.forEach(e=>this.flags&=~e):this.flags&=~e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new _(e)}static get swissEphemerisWithSpeed(){return _.from(2,256)}static get moshierWithSpeed(){return _.from(4,256)}static get astrometric(){return _.from(2,1024,512)}static get heliocentric(){return _.from(2,8)}static get topocentric(){return _.from(2,32768)}static get equatorial(){return _.from(2,2048,256)}},v=(a(_,`_CalculationFlags`),_),y=class{constructor(e){this.flags=0,e!==void 0&&this.add(e)}add(e){return Array.isArray(e)?e.forEach(e=>this.flags|=e):this.flags|=e,this}has(e){return(this.flags&e)===e}toNumber(){return this.flags}static from(...e){return new y(e)}static get allSolar(){return new y([1,2,4,8,16,32])}static get allLunar(){return new y([4,16,64])}static get totalOnly(){return y.from(4)}static get totalAndPartial(){return y.from(4,16)}},b=(a(y,`_EclipseTypeFlags`),y);function x(e){return typeof e==`number`?e:e instanceof v?e.toNumber():Array.isArray(e)?v.from(...e).toNumber():e}a(x,`normalizeFlags`);function S(e){return typeof e==`number`?e:e instanceof b?e.toNumber():Array.isArray(e)?b.from(...e).toNumber():e}a(S,`normalizeEclipseTypes`);var C=class{constructor(){this.module=null,this.ready=!1}async init(e){if(this.ready)return;let t=await r(()=>import(`./swisseph-BtfJwKK5.js`),[]),n;if(n=typeof t.default==`function`?t.default:typeof t==`function`?t:t.default?t.default:t.SwissEphModule||t,typeof n!=`function`)throw Error(`Failed to load WASM module: SwissEphModule factory function not found`);let i=e;if(!i)try{i=new URL(`/assets/swisseph-BmP0Bw24.wasm`,``+import.meta.url).href}catch{i=`swisseph.wasm`}this.module=await n({locateFile:a((e,t)=>e===`swisseph.wasm`?i:t?t+e:e,`locateFile`)}),this._wrapFunctions(),this.ready=!0,console.log(`Swiss Ephemeris WASM initialized:`,this.version())}_wrapFunctions(){let e=this.module;this._julday=e.cwrap(`swe_julday_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`]),this._getPlanetName=e.cwrap(`swe_get_planet_name_wrap`,`string`,[`number`]),this._setSiderealMode=e.cwrap(`swe_set_sid_mode_wrap`,null,[`number`,`number`,`number`]),this._getAyanamsa=e.cwrap(`swe_get_ayanamsa_ut_wrap`,`number`,[`number`]),this._close=e.cwrap(`swe_close_wrap`,null,[]),this._version=e.cwrap(`swe_version_wrap`,`string`,[])}_checkReady(){if(!this.ready)throw Error(`SwissEphemeris not initialized. Call await swe.init() first.`)}version(){return this._checkReady(),this._version()}setEphemerisPath(e){this._checkReady();let t=this.module,n=t.allocateUTF8(e||``);t.ccall(`swe_set_ephe_path_wrap`,null,[`number`],[n]),t._free(n)}async loadStandardEphemeris(){let e=`https://cdn.jsdelivr.net/gh/aloistr/swisseph/ephe`;await this.loadEphemerisFiles([{name:`sepl_18.se1`,url:`${e}/sepl_18.se1`},{name:`semo_18.se1`,url:`${e}/semo_18.se1`},{name:`seas_18.se1`,url:`${e}/seas_18.se1`}])}async loadEphemerisFiles(e){this._checkReady();let t=this.module;try{t.FS.mkdir(`/ephemeris`)}catch{}for(let n of e){let e=await fetch(n.url);if(!e.ok)throw Error(`Failed to download ${n.name}: ${e.statusText}`);let r=await e.arrayBuffer(),i=new Uint8Array(r);t.FS.writeFile(`/ephemeris/${n.name}`,i)}this.setEphemerisPath(`/ephemeris`)}julianDay(e,t,n,r=0,i=o.Gregorian){if(this._checkReady(),!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r))throw TypeError(`julianDay requires finite numbers. Received: year=${e}, month=${t}, day=${n}, hour=${r}`);return this._julday(e,t,n,r,i)}dateToJulianDay(e,t=o.Gregorian){if(this._checkReady(),!(e instanceof Date))throw TypeError(`dateToJulianDay expects a Date object`);let n=e.getUTCFullYear(),r=e.getUTCMonth()+1,i=e.getUTCDate(),a=e.getUTCHours(),s=e.getUTCMinutes(),c=e.getUTCSeconds(),l=e.getUTCMilliseconds();if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))throw TypeError(`Invalid Date object provided to dateToJulianDay. Date.toString() returned: "${e.toString()}". Please ensure the date is valid (e.g., avoid new Date("invalid")).`);let u=a+s/60+c/3600+l/36e5;return this.julianDay(n,r,i,u,t)}julianDayToDate(e,t=o.Gregorian){this._checkReady();let n=this.module,r=n._malloc(4),i=n._malloc(4),a=n._malloc(4),s=n._malloc(8);n.ccall(`swe_revjul_wrap`,null,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,r,i,a,s]);let c=n.getValue(r,`i32`),l=n.getValue(i,`i32`),u=n.getValue(a,`i32`),d=n.getValue(s,`double`);return n._free(r),n._free(i),n._free(a),n._free(s),new g(c,l,u,d,t)}calculatePosition(e,t,n=u.DefaultMoshier){this._checkReady();let r=x(n),i=this.module,a=i._malloc(48),o=i._malloc(256),s=i.ccall(`swe_calc_ut_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`],[e,t,r,a,o]);if(s<0){let e=i.UTF8ToString(o);throw i._free(a),i._free(o),Error(e)}let c=[];for(let e=0;e<6;e++)c[e]=i.getValue(a+e*8,`double`);return i._free(a),i._free(o),{longitude:c[0],latitude:c[1],distance:c[2],longitudeSpeed:c[3],latitudeSpeed:c[4],distanceSpeed:c[5],flags:s}}getCelestialBodyName(e){return this._checkReady(),this._getPlanetName(e)}setSiderealMode(e,t=0,n=0){this._checkReady(),this._setSiderealMode(e,t,n)}getAyanamsa(e){return this._checkReady(),this._getAyanamsa(e)}getAyanamsaExUt(e,t=l.SwissEphemeris){this._checkReady();let n=x(t),r=this.module,i=r._malloc(8),a=r._malloc(256);try{if(r.ccall(`swe_get_ayanamsa_ex_ut_wrap`,`number`,[`number`,`number`,`number`,`number`],[e,n,i,a])<0){let e=r.UTF8ToString(a);throw Error(e||`Failed to calculate ayanamsa`)}return r.getValue(i,`double`)}finally{r._free(i),r._free(a)}}findNextLunarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_lun_eclipse_when_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new f(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}findNextSolarEclipse(e,t=l.MoshierEphemeris,n=0,r=!1){this._checkReady();let i=x(t),a=S(n),o=this.module,s=o._malloc(80),c=o._malloc(256),u=o.ccall(`swe_sol_eclipse_when_glob_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,i,a,s,+!!r,c]);if(u<0){let e=o.UTF8ToString(c);throw o._free(s),o._free(c),Error(e)}let d=[];for(let e=0;e<10;e++)d[e]=o.getValue(s+e*8,`double`);return o._free(s),o._free(c),new m(u,d[0],d[1],d[2],d[3],d[4],d[5],d[6])}calculateHouses(e,t,n,r=s.Placidus){this._checkReady();let i=this.module,a=i._malloc(104),o=i._malloc(80),l=r.charCodeAt(0);i.ccall(`swe_houses_wrap`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],[e,t,n,l,a,o]);let u=[];for(let e=0;e<13;e++)u[e]=i.getValue(a+e*8,`double`);let d=[];for(let e=0;e<10;e++)d[e]=i.getValue(o+e*8,`double`);return i._free(a),i._free(o),{cusps:u,ascendant:d[c.Ascendant],mc:d[c.MC],armc:d[c.ARMC],vertex:d[c.Vertex],equatorialAscendant:d[c.EquatorialAscendant],coAscendant1:d[c.CoAscendant1],coAscendant2:d[c.CoAscendant2],polarAscendant:d[c.PolarAscendant],houseSystem:r}}close(){this.ready&&this._close()}};a(C,`SwissEphemeris`);var w=C,T=new w;typeof window<`u`&&(window.SwissEphemeris=w,window.swisseph=T);var E=`
  body {
    background-color: #0d0c0a;
    color: #faf6f0;
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  .container {
    max-width: 680px;
    margin: 0 auto;
    padding: 24px 16px 60px;
  }
  .header {
    text-align: center;
    margin-bottom: 24px;
  }
  .header h1 {
    font-size: 24px;
    color: #c5a880;
    margin: 0 0 6px;
    letter-spacing: 2px;
  }
  .notice-text {
    font-size: 11px;
    color: #a99a86;
    margin: 0;
  }
  .author {
    font-size: 11px;
    color: #c5a880;
    margin: 4px 0 0;
  }
  .input-card {
    background: rgba(25, 22, 18, 0.6);
    border: 1px solid rgba(197, 168, 128, 0.2);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }
  .form-group label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #c5a880;
    margin-bottom: 6px;
  }
  .form-control {
    width: 100%;
    box-sizing: border-box;
    background: #14120f;
    color: #faf6f0;
    border: 1px solid #c5a880;
    border-radius: 6px;
    padding: 10px;
    font-size: 14px;
  }
  .btn-submit {
    width: 100%;
    background: linear-gradient(135deg, #c5a880 0%, #a3875f 100%);
    color: #14120f;
    border: none;
    border-radius: 6px;
    padding: 14px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(197, 168, 128, 0.2);
    transition: all 0.2s;
  }
  .btn-submit:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .month-tabs {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 20px;
  }
  .month-tab-btn {
    background: rgba(25, 22, 18, 0.6);
    color: #a99a86;
    border: 1px solid rgba(197, 168, 128, 0.2);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;
  }
  .month-tab-btn.active {
    background: #c5a880;
    color: #14120f;
    font-weight: 700;
    border-color: #c5a880;
  }
  .monthly-header-divider h2 {
    font-size: 18px;
    color: #ff69b4;
    margin: 0 0 4px;
    border-bottom: 1px solid rgba(255, 105, 180, 0.2);
    padding-bottom: 6px;
  }
  .schedule-card {
    background: rgba(13, 12, 10, 0.8);
    border-left: 4px solid #ff69b4;
    border-radius: 8px;
    padding: 14px;
    margin-bottom: 14px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }
  .card-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  .card-badge-period {
    background: rgba(197, 168, 128, 0.15);
    color: #c5a880;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
  }
  .peak-day-gold-badge {
    background: rgba(255, 215, 0, 0.15);
    color: #ffd700;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    margin-left: 6px;
  }
  .card-stimulus {
    font-size: 12px;
    color: #a99a86;
    margin-top: 6px;
    font-weight: 700;
  }
  .card-title {
    font-size: 14px;
    font-weight: 700;
    color: #faf6f0;
    margin-top: 4px;
  }
  .card-desc {
    font-size: 12.5px;
    line-height: 1.6;
    color: #c4b9ae;
    margin-top: 8px;
  }
  .scan-bubble {
    color: #ffd700;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.5;
  }
`,D=[{id:0,name:`自分自身`,emoji:`☉`},{id:1,name:`心`,emoji:`☾`},{id:2,name:`会話`,emoji:`☿`},{id:3,name:`楽しさ`,emoji:`♀`},{id:4,name:`行動`,emoji:`♂`},{id:5,name:`幸運`,emoji:`♃`},{id:6,name:`課題`,emoji:`♄`},{id:7,name:`個性`,emoji:`♅`},{id:8,name:`理想`,emoji:`♆`},{id:9,name:`底力`,emoji:`♇`},{id:10,name:`ドラゴンヘッド`,emoji:`☊`}],O=[{id:0,name:`舞台`,emoji:`☉`},{id:2,name:`仕事`,emoji:`☿`},{id:3,name:`ワクワク`,emoji:`♀`},{id:4,name:`情熱`,emoji:`♂`}],k=null,A=1;function j(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate(),i=e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600;n<=2&&(t--,n+=12);let a=Math.floor(t/100),o=2-a+Math.floor(a/4);return Math.floor(365.25*(t+4716))+Math.floor(30.6001*(n+1))+r+o-1524.5+i/24}async function M(e,t){if(t===10)return 45;try{if(k&&typeof k.calculatePosition==`function`){let n=await k.calculatePosition(e,t,0);if(n&&typeof n.longitude==`number`&&!isNaN(n.longitude))return n.longitude}}catch{}return(280.466+36000.77*((e-2451545)/36525)+t*30)%360}var N=[{angle:0,emoji:`☌`,type:`good`},{angle:120,emoji:`△`,type:`good`},{angle:90,emoji:`□`,type:`bad`},{angle:180,emoji:`☍`,type:`bad`}],P=(e,t,n)=>n?e===0&&t===0?`【 響き合う二人の太陽 】お互いの本質や人生の方向性（☉）が美しく共鳴し合う、最高のパートナーシップ。一緒にいるだけでお互いの存在が誇らしくなり、人生の舞台を堂々と歩んでいける絶対の信頼関係です。`:e===0&&t===1?`【 心の居場所 】あなたの本質（☉）がお相手のデリケートな心（☾）を優しく包み込み、お相手の存在があなたの素顔をホッと緩めてくれる相性。私生活の波がまろやかに調律される、まるで家族のような安心感に包まれます。`:e===0&&t===2?`【 魂のシンクロ対話 】考えていることが不思議とリンクしたり、言葉のテンポや選ぶ表現 of 癖（☿）が心地よくフィットする魂の対話。ブログの文章を見せ合ったり、作戦ノートを広げて語り合うのに最高の二人です。`:e===0&&t===3?`【 会った瞬間の恋心 】会った瞬間からお互いに『あ、この人だ』と本能が察知するような愛おしさ（♀）。『一緒にいるだけでただただ嬉しい！』というピュアな言葉が自然と溢れ出す、愛されオーラ全開の引き寄せ相性です💖`:e===0&&t===4?`【 最高の突破力 】お互いに純粋な元気をフルチャージし合える関係。二人が揃うと情熱のスイッチ（♂）が入り、面倒なタスクも爆速で片付くような、不可能を可能にする圧倒的な前進力が生まれます！`:e===0&&t===5?`【 拡大の追い風 】お互いの中に眠る無限の可能性（♃）をピカッと見つけ出し、誰よりも明るく背中を押し合える超ラッキーな二人。安心の追い風に乗って、一緒にどこまでも大きな豊かさを掴み取っていけます。`:e===0&&t===6?`【 続く強固な骨組み 】一緒にいると心がカチッと落ち着き、地道で堅実な未来を築いていける安心の土台。関係性にブレない強固な『骨組み（♄）』ができて、歳を重ねるほど長く深く続いていく絆です。`:e===0&&t===7?`【 心地いい新風 】お互いの世界にユニークな直感や心地いい電気が走るような、いつまでも新鮮で退屈しない関係。お互いの自由（♅）をリスペクトし合える、ライフスタイルをアップデートし合える二人です。`:e===0&&t===8?`【 理想が溶け合うユートピア 】おギャラリーの持つピュアな理想や感受性（♆）がとろけるように潤い、眠っていたあなたの中の魔法が目覚める神秘的な相性。美しい夢を同じ温度で見つめ合える、ロマンチックな夢見心地の二人です✨`:e===0&&t===9?`【 宿命のリセットシナリオ 】出会った瞬間から理屈抜きに強烈に惹きつけられ、この出会いそのものがお互いの人生のシナリオをガラリと変える、特大の転換期となる二人。`:e===1||t===1?e===1&&t===8?`【 境界線が溶け合う、とろける癒やし 】お相手の心（☾）に、あなたのどこまでもピュアな理想やスピリチュアルな感性（♆）がとろけるように優しく重なり合う最高の相性 [INDEX]。二人が一緒にいると、まるで言葉のいらないユートピアにいるようにトゲトゲした心が優しくほどけていきます。お互いの心の境界線が心地よく溶け合うような、ロマンチックな癒やしに満ちた特別な二人です✨ [INDEX]`:`【 深いエモーショナルな共鳴 】お互いの私生活や感情の波（☾）がとてもまろやかに調律される好調日。言葉にしなくても『今、何を感じているか』がホッと潤うように伝わり、お気に入りの場所で心が最高に満たされるご褒美タイムを過ごせます。`:e===2&&t===3?`【 ときめきの会話ループ 】あなたの言葉のセンス（☿）がお相手のワクワクする感性（♀）をキュンと刺激する、お喋りが止まらなくなる相性。ただLINEをしているだけでも笑顔が溢れ出し、お互いの本来の魅力や楽しさが何倍にも引き出される素敵な結びつきです💖 [INDEX]`:e===3&&t===3?`【 惹かれ合う愛されオーラ 】二人の「大好き」やワクワクする感性（♀）が完璧なシンクロを起こす、最高に華やかな相性。お洒落をして美味しいものを食べにいくだけで、世界で一番甘くて楽しいハッピーなご褒美タイムを共有できます。`:e===4||t===4?`【 熱いパッションの共鳴 】お互いのやる気や行動力のスイッチ（♂）がカチッと噛み合い、純粋な情熱をフルチャージし合える関係。二人が揃うと不可能を可能にする圧倒的な突破力が生まれます。`:`【 響き合う星の祝福 】今の空をめぐる美しい星のコードが、二人の生まれた時の星の配置と優しく共鳴しています。お互いの可能性を開き、未来への安心の追い風をなだれ込ませてくれる好調な結びつきです✨ [INDEX]`:{0:`【 本質とアイデンティティの反作用 】お互いの「譲れないポリシー（☉）」が正面衝突して、つい相手にマウントを取ったり世間の『正しさ』を押し付けたくなる星の罠 [INDEX]。今日はスマホの通知をオフにして、誰の許可もいらない『自分が主役の時間』を1時間だけでもそれぞれ死守してみて。心がパッと生き返り、不協和音を綺麗にすり抜けられます🍃 [INDEX]`,1:`【 感情とプライベートの反作用 】些細な一言に心がチクッと痛んだり、私生活のペース（☾）のズレに妙にイライラが溜まりやすいサイン。そんな時は無理に笑顔を作らず、お気に入りの入浴剤を入れたお風呂にゆっくり浸かって早く寝るのが最強の魔除け。夜は別々にご自愛セットで過ごすのが、二人の愛を守る最高の処方箋です。`,2:`【 言葉とコミュニケーションの反作用 】お互いに言いたいことがすれ違ったり、良かれと思って放った一言のニュアンス（☿）がトゲとなって相手に刺さりやすいサイン。今日はアドバイスやお説教は一旦お休み。語尾に可愛い絵文字を1つプラスして、ただ『そっか、大変だったね✨』と共感してあげるだけで、すべての誤解を綺麗にすり抜けてハッピーに回避できます！`,3:`【 愛の温度感とすれ違い反作用 】お互いの『好き』のタイミングや、甘えたい温度感（♀）がちょっぴり噛み合いづらい星の交差点。相手の愛を確かめたくなって、つい天邪鬼なワガママや試すような態度を取りたくなったら星のイタズラです！今日はおねだりするのをちょっとお休みして、2人の大好きな美味しいデザートを一緒に食べてご自愛セット期間にしてね💖`,4:`【 情熱とイライラのピリピリ反作用 】お互いのやる気やこだわり（♂）が正面衝突して、売り言葉に買い言葉でケンカの火種が燃え上がりやすいアクティブ注意報。そんな時は無理に話し合わず、1人の時間を死守してデスクのお掃除やウォーキングでエネルギーを物理的に外に逃がすのが最高の開運アクション。一歩引いて相手に花を持たせるのが回避のコツです。`,5:`【 楽観視とキャパオーバーの反作用 】お互いに気が大きくなって、守れない約束（♃）をダブルブッキングしたり、お財布の紐がとろとろに緩んで奢りすぎて後からキャパオーバーになりがちな時。今日のやることリストの半分を思い切って明日に回して、ハードルを限界まで下げるのが2人の関係性を一番心地よく守る秘訣です。`,6:`【 プレッシャーと冷え込みの反作用 】相手に対して妙に厳しい審査員（♄）になってしまい、欠点ばかりが目について『あぁ、この人はまだまだだな…』と落ち込みの沼にハマりそうな日。それは星の仕掛けた試練です！今日は相手を減点方式ではなく、『生きててくれるだけで100点満点！』と大甘な加点方式で見つめ直してね。絶対の信頼へとカチッと固まります。`,7:`【 突発変更とすれ違いの反作用 】急なドタキャンや予定変更、スマホの通信トラブル（♅）など、二人の常識がガツンと打破される突発イベントが起きやすい日。でも大丈夫！『おっと、星が新しい風を吹かせてきたぞ？このハプニング、おもしろくなってきたじゃん！』とゲーム感覚で面白がってみて。その瞬間に大チャンスの神展開へひっくり返ります！`,8:`【 期待しすぎとモヤモヤの反作用 】頭がぼーっとして集中力が切れたり、約束の時間をうっかり勘違いしたり、相手に過度な期待（♆）をして勝手に傷つきがち。今日はアラームをいつもより多めにセットして、忘れ物チェックをするのが安心の基盤。夜は好きな音楽やアート、お留守番映画にどっぷり浸するとトゲトゲした心がとろけるように癒やされます✨`,9:`【 執着と支配のドラマチック反作用 】諦めていた問題が再燃したり、古い関係性を100%コントロール（♇）したくなるようなドラマチックな底力が湧き上がる時。無理に現状を維持しようとせず、『手放すことで、二人の間に新しい幸運がなだれ込むスペースができるんだな』と信じて、古い不要なプライドや感情をバサッとゴミ箱にポイしてね。`}[t]||`お互いの星が少しだけ刺激し合っているサイン。焦らずに一歩引いて、お留守番のようなまったりお互いを労わる時間を過ごすのが安心の基盤になりますよ🍃`;function F(e,t){let n=document.getElementById(`scheduleList`);if(!n)return;let r=`<div class="monthly-header-divider" style="margin-top:24px; margin-bottom:16px;"><h2>👥 生まれ持った宿命相性スキャン</h2></div>`;e.length>0?e.forEach(e=>{if(!e)return;let t=e.isGood?`#ff69b4`:`#ffd700`,n=e.isGood?`💖 宿命好調相性`:`⚠️ 宿命反作用相性`,i=``;e.isDestiny&&(t=`#ffd700`,n=`👑 運命の二人・特別な約束`,i=`border: 2px solid #c5a880; background: linear-gradient(135deg, rgba(20,18,15,0.9) 0%, rgba(40,35,30,0.9) 100%); box-shadow: 0 0 15px rgba(197, 168, 128, 0.4); animate: pulse 2s infinite;`),r+=`
        <div class="schedule-card" style="margin-bottom: 14px; padding: 16px; border-radius: 8px; ${i||`background: rgba(13,12,10,0.8); border-left: 4px solid `+t+`;`}">
          <div class="card-top-row" style="display:flex; justify-content:space-between; align-items:center;"><span style="font-size:13px; font-weight:800; color:${t};">${n}</span></div>
          <div class="card-stimulus" style="color:#c5a880; font-weight:700; margin-top:6px;">${e.p1Emoji||``}</div>
          <div class="card-desc" style="margin-top: 8px; font-size: 12.5px; line-height: 1.6; color: #faf6f0;">${e.desc||``}</div>
        </div>`}):r+=`<div style="color: #a99a86; font-size: 13px; text-align: center; padding: 20px; background:rgba(13,12,10,0.4); border-radius:8px;">二人の天体は穏やかに響き合っています。</div>`,r+=`<div class="monthly-header-divider" style="margin-top:36px; margin-bottom:12px;"><h2>🧭 「じゃあ、今は？」二人の空気感スキャン</h2></div><div class="month-tabs" id="dynamicMonthTabs" style="margin-bottom: 20px;"></div><div class="personal-wave-zone" id="timelineZone"></div>`,n.innerHTML=r,I(e,t),L(t)}function I(e,t){let n=document.getElementById(`dynamicMonthTabs`);if(!n)return;let r=``;for(let e=1;e<=12;e++)r+=`<button class="month-tab-btn ${e===A?`active`:``}" data-month="${e}">${e}月</button>`;n.innerHTML=r,n.querySelectorAll(`.month-tab-btn`).forEach(n=>{n.addEventListener(`click`,n=>{A=parseInt(n.target.getAttribute(`data-month`),10),F(e,t)})})}function L(e){let t=document.getElementById(`timelineZone`);if(!t)return;let n=e.filter(e=>e.monthNum===A),r=``;n.length>0?n.forEach(e=>{if(e.isNotice){r+=`<div class="schedule-card" style="border-left: 4px dashed #c5a880; background: rgba(13,12,10,0.9); padding: 18px; margin-top: 24px;"><div class="card-desc" style="font-size: 13px; line-height: 1.6; color: #faf6f0; margin-top: 0;">${e.desc}</div></div>`;return}let t=e.isGood?`#ff69b4`:`#ffd700`,n=e.isGood?`💖 二人の好調期`:`⚠️ 二人の注意期`;r+=`
        <div class="schedule-card" style="border-left: 4px solid ${t}; margin-bottom:12px;">
          <div class="card-top-row">
            <div class="card-badges-group"><span class="card-badge-period">📅 ${e.dateRangeLabel}</span><span class="peak-day-gold-badge">🎯 ${e.peakDayLabel}</span></div>
            <span style="font-size:12px; font-weight:800; color:${t};">${n}</span>
          </div>
          <div class="card-stimulus" style="color:#c5a880; font-weight:700; margin-top:6px;">${e.ownerLabel}</div>
          <div class="card-desc" style="font-size: 12.5px; line-height: 1.6; color: #c4b9ae;">${e.desc}</div>
        </div>`}):r+=`<div style="color: #a99a86; font-size: 12.5px; text-align: center; padding: 16px;">この月、二人の空気感に特別なアスペクトはありません。</div>`,t.innerHTML=r}async function R(){let e=document.getElementById(`p1_year`).value,t=document.getElementById(`p1_month`).value,n=document.getElementById(`p1_day`).value,r=document.getElementById(`p1_time`).value,i=document.getElementById(`p2_year`).value,a=document.getElementById(`p2_month`).value,o=document.getElementById(`p2_day`).value,s=document.getElementById(`p2_time`).value,c=document.getElementById(`scanyear`).value;if(!e||!t||!n||!r||!i||!a||!o||!s||!c){alert(`二人分の年月日、出生時間、占いたい西暦を全て選択してね🔮✨`);return}localStorage.setItem(`syn_y1`,e),localStorage.setItem(`syn_m1`,t),localStorage.setItem(`syn_d1`,n),localStorage.setItem(`syn_t1`,r),localStorage.setItem(`syn_y2`,i),localStorage.setItem(`syn_m2`,a),localStorage.setItem(`syn_d2`,o),localStorage.setItem(`syn_t2`,s),localStorage.setItem(`syn_year`,c);let l=document.getElementById(`calcBtn`),u=document.getElementById(`resultSection`),d=document.getElementById(`scanChara`);d&&(d.innerHTML=`<div class="scan-bubble">二人の星を重ね合わせ中！<br>ちょっと待ってね✨</div>`),l.textContent=`相性スキャン中... ⏳`,l.disabled=!0,u.style.display=`none`,await new Promise(e=>setTimeout(e,400));try{let l=j(new Date(`${e}-${String(t).padStart(2,`0`)}-${String(n).padStart(2,`0`)}T${r}`)),d=j(new Date(`${i}-${String(a).padStart(2,`0`)}-${String(o).padStart(2,`0`)}T${s}`)),f={},p={};for(let e=0;e<=9;e++)f[e]=await M(l,e),p[e]=await M(d,e);f[10]=45,p[10]=120;let m=[],h=(e,t,n,r)=>{let i=Math.abs(f[e]-p[t]);i>180&&(i=360-i);for(let a of N){let o=Math.abs(i-a.angle);if(o<=6){let i=a.type===`good`,s=(e===0||e===3)&&t===10,c=P(e,t,i);m.push({id1:e,id2:t,orbDiff:o,aspAngle:a.angle,aspEmoji:a.emoji,isGood:i,isDestiny:s,p1Emoji:n,p2Emoji:r,desc:c,ownerText:`【 あなたの ${n} × お相手の ${r} 】`})}}let a=Math.abs(p[e]-f[t]);a>180&&(a=360-a);for(let i of N){let o=Math.abs(a-i.angle);if(o<=6){let a=i.type===`good`,s=(e===0||e===3)&&t===10,c=P(e,t,a);m.push({id1:e,id2:t,orbDiff:o,aspAngle:i.angle,aspEmoji:i.emoji,isGood:a,isDestiny:s,p1Emoji:n,p2Emoji:r,desc:c,ownerText:`【 お相手の ${n} × あなたの ${r} 】`})}}};D.forEach(e=>{D.forEach(t=>{e.id<=4&&t.id<=10&&h(e.id,t.id,e.emoji,t.emoji)})});let g=m.filter(e=>e.isDestiny),_=m.filter(e=>!e.isDestiny&&e.isGood),v=m.filter(e=>!e.isDestiny&&!e.isGood),y=[...g];if(_.length>0){let e=_.filter(e=>e.aspAngle===0);e.length>0?(e.sort((e,t)=>e.orbDiff-t.orbDiff),y.push(e[0])):(_.sort((e,t)=>e.orbDiff-t.orbDiff),y.push(_[0]))}v.length>0&&(v.sort((e,t)=>e.orbDiff-t.orbDiff),y.push(v[0])),y.forEach(e=>{e&&(e.p1Emoji=e.ownerText)});let b=(e,t,n,r,i,a)=>n?e===0&&t===3?`今、空をめぐるワクワクの星が、**あなた**の魅力の引き金をパッと引くことで、それがそのまま**お相手**の愛のセンサーへとダイレクトに流れ込んでいく特別な恋の架け橋デー💖 **あなた**が何気なく提案したデートやお洒落が、**お相手**のド真ん中へ響いて、二人の間に最高にロマンチックなときめきの化学反応が巻き起こります！`:e===2&&t===0?`今、空をめぐる知性の星が、**あなた**の言葉のひらめきを加速させ、それがそのまま**お相手**の本質をパッと明るく照らし出す心地いい対話のサイクル。**あなた**が何気なく伝えた本音やアイデアが、**お相手**のやる気に火をつけ、深い信頼のバトンが美しく繋がっていきます。`:`今、空をめぐる調律の星の光が、**あなた**の持つ特別なエネルギーを触媒にして、そのまま**お相手**のハートへと綺麗に流れ込んでいるラッキーな好調日✨ 二人が同じ空間にいるだけで、言葉を超えた強いピュアな引き寄せと絶対的な安心感がスムーズに循環するタイミングです。`:e===4&&t===0?`今、空をめぐる情熱の星が、**あなた**の心の焦りやピリピリ感を刺激し、それがそのままダイレクトに**お相手**の本質へとぶつかっていく、少しだけすれ違いやすい星の交差点。**あなた**が良かれと思って放った強い一言やこだわりが、**お相手**のプライドをチクッと刺激しやすい時です。今日は話し合いは一旦お休みして、美味しいデザートを食べてのんびりお留守番モードで過ごしてね🍃`:e===3&&t===1?`今、空をめぐる楽しさの星が、**あなた**の甘えたいおねだり欲を強く揺さぶり、それがそのまま**お相手**のデリケートな私生活のスペースへノイズとして流れ込みやすい愛のすれ違い期。お互いの『好き』の温度感が噛み合わずにモヤモヤした時は、相手の愛を確かめるワガママを言うのを少し我慢して、1人のご自愛時間を死守するのが最高の魔除けになります。`:`今、空をめぐる試練のエネルギーが、**あなた**の感情の波を少しだけ揺さぶり、それがそのまま**お相手**の天体へと反作用として流れ込みやすいサイン。お互いに少しだけ厳しい審査員になりがちなので、今日はアドバイスやお説教は一旦オフ。語尾に可愛い絵文字を1つプラスして、お互いのマイペースを尊重し合うのが安心の基盤です🍃`,x=parseInt(c,10),S=x%4==0&&x%100!=0||x%400==0?366:365,C=new Date(x,0,1,12,0,0),w=j(C),T=Array.from({length:S},()=>[]);for(let e=0;e<S;e++){let t=w+e;for(let n of[0,2,3,4]){let r=await M(t,n),i=O.find(e=>e.id===n);for(let t of D.filter(e=>e.id<=4)){let a=Math.abs(r-f[t.id]);a>180&&(a=360-a);for(let o of N)if(Math.abs(a-o.angle)<=6)for(let a of D.filter(e=>e.id<=4)){let s=Math.abs(r-p[a.id]);s>180&&(s=360-s);for(let r of N)if(Math.abs(s-r.angle)<=6){let s=o.type===`good`&&r.type===`good`,c=b(t.id,a.id,s,i.emoji,t.emoji,a.emoji);T[e].push({transitId:n,natalId:t.id,angle:o.angle,isGood:s,tEmoji:i.emoji,aspEmoji:r.emoji,nEmoji:a.emoji,ownerLabel:`【 あなたの ${t.emoji} ➔ 空の ${i.emoji} ➔ お相手の ${a.emoji} 】`,desc:c})}}}}}let E=[];for(let e=1;e<=12;e++){let t=new Date(x,e,0).getDate(),n=1;for(;n<=t;){let r=(new Date(x,e-1,n).getTime()-C.getTime())/864e5,i=T[Math.floor(r)]||[];if(i.length>0){let r=null,a=-1;for(let o of i){let i=n;for(let r=n+1;r<=t;r++){let t=(new Date(x,e-1,r).getTime()-C.getTime())/864e5;if((T[Math.floor(t)]||[]).some(e=>e.transitId===o.transitId&&e.natalId===o.natalId&&e.angle===o.angle))i=r;else break}let s=i-n+1;s>a&&(a=s,r={data:o,start:n,end:i})}let o=r.data,s=r.start,c=r.end,l=s===c?`${e}月${s}日`:`${e}月${s}日～${c===t?`月末`:c+`日頃`}`;E.push({tEmoji:o.tEmoji,aspEmoji:o.aspEmoji,nEmoji:o.nEmoji,isGood:o.isGood,desc:o.desc,ownerLabel:o.ownerLabel,monthNum:e,dateRangeLabel:l,peakDayLabel:`${e}月${s}日頃`,startDay:s}),n=c+1}else n++}E.push({isNotice:!0,monthNum:e,startDay:999,desc:`💡 **二人のタイムラインに日付がない日は、前後の星の波が優しくグラデーションしているおだやかな愛の調律期間。お互いを思いやる作戦をのんびり立ててみてね✨**`})}A=1,u.style.display=`block`,F(y,E)}catch(e){console.error(e)}finally{d&&(d.innerHTML=``),l.textContent=`相性大スキャン！`,l.disabled=!1}}async function z(){let e=document.createElement(`style`);e.textContent=E,document.head.appendChild(e);try{let e=window.location.pathname.endsWith(`/`)?window.location.pathname:window.location.pathname.substring(0,window.location.pathname.lastIndexOf(`/`)+1);k=new w({ephePath:e+`ephe/`,wasmBinaryFile:e+`assets/swisseph-BmP0Bw24.wasm`}),k&&typeof k.init==`function`&&await k.init()}catch{}let t=localStorage.getItem(`syn_y1`)||`1995`,n=localStorage.getItem(`syn_m1`)||`10`,r=localStorage.getItem(`syn_d1`)||`10`,i=localStorage.getItem(`syn_t1`)||`12:00`,a=localStorage.getItem(`syn_y2`)||`1998`,o=localStorage.getItem(`syn_m2`)||`12`,s=localStorage.getItem(`syn_d2`)||`25`,c=localStorage.getItem(`syn_t2`)||`18:30`,l=localStorage.getItem(`syn_year`)||`2026`,u=(e,t,n)=>{let r=``;for(let i=e;i<=t;i++)r+=`<option value="${i}" ${String(i)===n?`selected`:``}>${i}${e===1940?`年`:e===1?`月`:`日`}</option>`;return r},d=document.getElementById(`app`);if(!d)return;d.innerHTML=`
    <div id="scanCharaChaser" class="scan-dash-chara"></div>
    <div class="container">
      <div class="header"><h1>クロノスコープ相性 👥</h1><p class="notice-text">🔮 効果の保証はありません</p><p class="author">produced by れいさん</p></div>
      <div class="input-card" style="margin-bottom:16px;">
        <h3 style="margin-top:0; color:#ff69b4; font-size:15px; border-bottom:1px solid rgba(255,105,180,0.2); padding-bottom:6px;">👤 1人目（あなた）の出生データ</h3>
        <div class="form-row" style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
          <div class="form-group">
            <div style="display:flex; gap:6px;">
              <select id="p1_year" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1.2;">${u(1940,2026,t)}</select>
              <select id="p1_month" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1;">${u(1,12,n)}</select>
              <select id="p1_day" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1;">${u(1,31,r)}</select>
            </div>
          </div>
          <div class="form-group"><label style="font-size:11px; color:#a99a86;">⏱ 出生時間</label><input type="time" id="p1_time" class="form-control" value="${i}" style="padding:6px;"></div>
        </div>
      </div>
      <div class="input-card" style="margin-bottom:16px;">
        <h3 style="margin-top:0; color:#a7bfae; font-size:15px; border-bottom:1px solid rgba(167,191,174,0.2); padding-bottom:6px;">👤 2人目（お相手）の出生データ</h3>
        <div class="form-row" style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
          <div class="form-group">
            <div style="display:flex; gap:6px;">
              <select id="p2_year" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1.2;">${u(1940,2026,a)}</select>
              <select id="p2_month" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1;">${u(1,12,o)}</select>
              <select id="p2_day" class="form-control" style="background:#14120f; color:#faf6f0; border:1px solid #c5a880; border-radius:6px; padding:6px; flex:1;">${u(1,31,s)}</select>
            </div>
          </div>
          <div class="form-group"><label style="font-size:11px; color:#a99a86;">⏱ 出生時間</label><input type="time" id="p2_time" class="form-control" value="${c}" style="padding:6px;"></div>
        </div>
      </div>
      <div class="input-card">
        <div class="form-group"><label>占いたい西暦</label><input type="number" id="scanyear" class="form-control" value="${l}" min="1900" max="2100" style="padding:6px; margin-top:4px;"></div>
        <button id="calcBtn" class="btn-submit" style="margin-top:16px; width:100%;">相性大スキャン！</button><div id="scanChara" style="margin-top: 12px; text-align: center; width: 100%;"></div>
      </div>
      <div id="resultSection" style="display: none;"><div id="scheduleList"></div></div>
    </div>`;let f=document.getElementById(`calcBtn`);f&&f.addEventListener(`click`,R)}z();