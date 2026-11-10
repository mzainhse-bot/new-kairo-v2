// auth.js - ملف مشترك لكل الصفحات
function toggleSidebar(){
  let s=document.getElementById('sidebar');
  if(!s) return;
  if(window.innerWidth<=900){ s.classList.toggle('open'); document.getElementById('overlay')?.classList.toggle('show'); }
  else { s.classList.toggle('closed'); document.querySelector('.main')?.classList.toggle('full'); }
}

// ✅ الخروج الصح - مرة واحدة لكل الصفحات
function logout(){
  localStorage.removeItem('safetyUser');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('safetyUserName');
  sessionStorage.clear();
  location.href='login.html?logout=1';
}

function getMe(){
  try{
    let u = JSON.parse(localStorage.getItem('safetyUser') || localStorage.getItem('currentUser') || 'null');
    if(u && u.name) return u;
  }catch(e){}
  return null;
}

function roleLabel(role){
  return role==='admin'||role==='manager' ? 'مدير' : role==='supervisor' ? 'مشرف' : role==='employee' ? 'موظف' : role==='visitor' ? 'زائر' : role||'';
}

function fillUserBox(me){
  if(!me) return;
  let sideName=document.getElementById('sideName');
  if(sideName) sideName.innerText=me.name;
  let sideRole=document.getElementById('sideRole');
  if(sideRole) sideRole.innerText=roleLabel(me.role);
  let sideImg=document.getElementById('sideImg');
  if(sideImg && (me.photo||me.img)) sideImg.src=me.photo||me.img;
  let topUser=document.getElementById('topUser');
  if(topUser) topUser.innerText=me.name;
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
