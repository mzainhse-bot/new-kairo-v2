// auth.js - Shared file for all pages
// Rule: Read AR + EN, Display EN only, Save EN only

function toggleSidebar(){
  let s=document.getElementById('sidebar');
  if(!s) return;
  if(window.innerWidth<=900){ s.classList.toggle('open'); document.getElementById('overlay')?.classList.toggle('show'); }
  else { s.classList.toggle('closed'); document.querySelector('.main')?.classList.toggle('full'); }
}

// ✅ Correct Logout - once for all pages
function logout(){
  try{
    if(window.firebase && firebase.auth) firebase.auth().signOut();
  }catch(e){}
  localStorage.removeItem('safetyUser');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('safetyUserName');
  sessionStorage.clear();
  location.href='login.html?logout=1';
}

function getMe(){
  try{
    let u = JSON.parse(localStorage.getItem('safetyUser') || localStorage.getItem('currentUser') || 'null');
    if(u && (u.name || u.email)) return u;
  }catch(e){}
  return null;
}

// === TRANSLATION MAP: Read AR + EN, Display EN only ===
const ROLE_MAP = {
  'مدير':'Manager', 'manager':'Manager', 'admin':'Manager', 'Manager':'Manager', 'Admin':'Manager',
  'مشرف':'Supervisor', 'supervisor':'Supervisor', 'Supervisor':'Supervisor',
  'موظف':'Employee', 'employee':'Employee', 'Employee':'Employee',
  'زائر':'Visitor', 'visitor':'Visitor', 'Visitor':'Visitor'
};

function roleLabel(role){
  if(!role) return 'Employee';
  let r = String(role).trim();
  // Return English label even if old data was Arabic
  return ROLE_MAP[r] || ROLE_MAP[r.toLowerCase()] || r;
}

// Normalize role for logic checks (Manager / Supervisor / Employee / Visitor)
function normRole(role){
  return roleLabel(role);
}

function isManagerUser(me){
  return me && normRole(me.role) === 'Manager';
}

function fillUserBox(me){
  if(!me) return;
  let sideName=document.getElementById('sideName');
  if(sideName) sideName.innerText=me.name || me.email || 'Employee';
  let sideRole=document.getElementById('sideRole');
  if(sideRole) sideRole.innerText=roleLabel(me.role);
  let sideImg=document.getElementById('sideImg');
  if(sideImg && (me.photo||me.img||me.photoURL)) sideImg.src=me.photo||me.img||me.photoURL;
  let topUser=document.getElementById('topUser');
  if(topUser) topUser.innerText=me.name || me.email || '';
  let page=location.pathname.split('/').pop().replace('.html','')||'index';
  document.querySelectorAll('.sidebar a[data-page]').forEach(a=>{ if(a.dataset.page===page) a.classList.add('active'); });
}

function requireLogin(){
  let me=getMe();
  if(!me){
    location.href='login.html';
    return null;
  }
  fillUserBox(me);
  return me;
}
