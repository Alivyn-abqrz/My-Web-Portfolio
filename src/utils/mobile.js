const navMobile = () => {
  const btnBars = document.querySelector('.header__bars');
  const navMobile = document.querySelector('.mobile__nav');
  const linkMobile = document.querySelectorAll('.mobile__link');

  let mobileNavOpen = false;

  btnBars.addEventListener('click', ()=>{
    mobileNavOpen = !mobileNavOpen;
    if(mobileNavOpen){
      navMobile.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    }else{
      navMobile.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });
  linkMobile.forEach(link=> {
    link.addEventListener('click', () => {
      mobileNavOpen = false;
      navMobile.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};
export default navMobile;