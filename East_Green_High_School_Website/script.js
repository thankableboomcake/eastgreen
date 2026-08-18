const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if(menuButton && navLinks){menuButton.addEventListener('click',()=>{navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',navLinks.classList.contains('open'));});}

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.course').forEach(c=>c.hidden=!(f==='all'||c.dataset.subject===f));
}));

const resourceSearch=document.querySelector('#resourceSearch');
if(resourceSearch){resourceSearch.addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('.resource').forEach(r=>r.hidden=!r.innerText.toLowerCase().includes(q));});}
