let navMenuLink = document.querySelectorAll('.nav-menu-link');

let pathname = window.location.pathname;

console.log(navMenuLink);
console.log(pathname);

navMenuLink.forEach((navLink) => {
  const navLinkPathname = new URL(navLink.href).pathname;
  if (pathname === navLinkPathname) navLink.classList.add('active');
});
