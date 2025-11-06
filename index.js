
/* --- tiny JS: counters, testimonials carousel, form validation (client-side only) --- */
(function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // counters
  const counts = document.querySelectorAll('.count');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e=>{
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.dataset.target || 0;
          let start = 0;
          const dur = 1000;
          const step = (ts)=>{
            if(!start) start = ts;
            const progress = Math.min((ts-start)/dur,1);
            el.textContent = Math.floor(progress*target);
            if(progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
          };
          requestAnimationFrame(step);
          o.unobserve(el);
        }
      });
    }, {threshold:0.4});
    counts.forEach(c => obs.observe(c));
  } else {
    counts.forEach(c => c.textContent = c.dataset.target || '0');
  }

  

  // contact form (simulated)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      status.textContent = 'Sending…';
      setTimeout(()=>{
        status.textContent = 'Thanks — we received your message!';
        form.reset();
      },1200);
    });
  }
})();

// Lightbox functionality
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightbox.classList.add('active');
    lightboxImg.src=img.src;
  });
});
document.getElementById('closeBtn').addEventListener('click',()=>{
  lightbox.classList.remove('active');
});
lightbox.addEventListener('click',e=>{
  if(e.target===lightbox){lightbox.classList.remove('active');}
});
document.getElementById('year').textContent=new Date().getFullYear();

// contact us
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();

  if(!name || !email || !msg){
    status.style.color = 'red';
    status.textContent = '⚠️ Please fill in all required fields.';
    return;
  }

  status.style.color = 'green';
  status.textContent = '✅ Message sent successfully! We’ll get back to you soon.';
  form.reset();
});

// footer 
document.getElementById('year').textContent = new Date().getFullYear();


  