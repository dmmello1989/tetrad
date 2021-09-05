const toggleMenu = () => {
  const menuHidden = document.querySelector(".menu--hidden");
  console.log(menuHidden)
  menuHidden.classList.toggle("active");
}

const changeTheme = (theme) => {
  const body = document.querySelector('body');
  body.classList.remove(...body.classList);
  body.classList.add(`body--${theme}`);
};