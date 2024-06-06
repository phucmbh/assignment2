let navMenuLink = document.querySelectorAll('.nav-menu-link');

let pathname = window.location.pathname;

console.log(navMenuLink);
console.log(pathname);

navMenuLink.forEach((navLink) => {
  const navPathname = new URL(navLink.href).pathname;
  if (pathname === navPathname || pathname === '/')
    navLink.classList.add('active');
});
