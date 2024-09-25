const darkMode = () => {
  const themeBtns = document.querySelectorAll('#theme-toggle');
// state
  const theme = localStorage.getItem('theme');
// On mount
  theme && document.body.classList.add(theme);
// Handlers
const handletheme =()=>{
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')){
    localStorage.setItem('theme','light-mode');
  }else{
    localStorage.removeItem('theme');
    document.body.removeAttribute('class')
  };
};
  themeBtns.forEach(btn => 
    btn.addEventListener('click', handletheme)
  );
};

export default darkMode;
