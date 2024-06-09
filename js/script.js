var navMenuLink = document.querySelectorAll('.nav-menu-link');

var pathname = window.location.pathname;

console.log(navMenuLink);
console.log(pathname);

navMenuLink.forEach((navLink) => {
  const navLinkPathname = new URL(navLink.href).pathname;
  if (pathname === navLinkPathname) navLink.classList.add('active');
});

for (let index = 0; index < navMenuLink.length; index++) {
  const navLinkPathname = new URL(navLink.href).pathname;
  if (pathname === navLinkPathname) navLink.classList.add('active');
}