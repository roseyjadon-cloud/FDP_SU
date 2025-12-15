document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('loginForm');
  const emailEl=document.getElementById('email');
  const pwEl=document.getElementById('password');
  const err=document.getElementById('error');
  const toggle=document.getElementById('togglePassword');

  toggle.addEventListener('click',()=>{
    if(pwEl.type==='password'){pwEl.type='text';toggle.textContent='Hide';toggle.setAttribute('aria-pressed','true')}else{pwEl.type='password';toggle.textContent='Show';toggle.setAttribute('aria-pressed','false')}
  });

  form.addEventListener('submit',function(e){
    e.preventDefault();
    err.textContent='';
    const email=emailEl.value.trim();
    const pw=pwEl.value;
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      err.textContent='Please enter a valid email';
      emailEl.focus();
      return;
    }
    if(!pw){err.textContent='Please enter your password';pwEl.focus();return}

    // Mock authentication (for demo). Replace with real API call.
    err.textContent='Signing in…';
    setTimeout(()=>{
      if(email.toLowerCase()==='user@example.com' && pw==='password'){
        window.location.href='index.html';
      } else {
        err.textContent='Invalid email or password';
      }
    },700);
  });
});
