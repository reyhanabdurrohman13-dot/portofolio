// Porto script (opsional efek animasi)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".info-card, .sosmed-link");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 200);
  });
});
