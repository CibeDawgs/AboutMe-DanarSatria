// Jalankan animasi saat halaman dimuat
window.addEventListener("load", () => {
  const card = document.querySelector(".card");
  const avatar = document.querySelector(".avatar img");
  const subtitle = document.querySelector(".subtitle");
  const links = document.querySelector(".links");
  const socials = document.querySelector(".socials");

  setTimeout(() => card.classList.add("active"), 200);
  setTimeout(() => avatar.classList.add("active"), 700);
  setTimeout(() => subtitle.classList.add("active"), 900);
  setTimeout(() => links.classList.add("active"), 1100);
  setTimeout(() => socials.classList.add("active"), 1300);
});