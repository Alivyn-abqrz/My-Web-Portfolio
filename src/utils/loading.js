const loader =()=>{
window.addEventListener("load", ()=>{
  const loader = document.querySelector(".loading")
  loader.classList.add("loading--hidden");
  document.querySelector(".loading").addEventListener("transitioned", ()=>{
    document.body.removeChild(document.querySelector(".loading"));
  });
});
};
export default loader;