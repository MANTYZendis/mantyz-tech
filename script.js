/* ==========================================================
   MANTYZ — things I build
   Zatím jen drobnost: zvýrazní v menu tu sekci, u které zrovna jsi.
   Až přibude obsah, přijde sem víc.
   ========================================================== */

const odkazyMenu = document.querySelectorAll(".nav a");
const sekce = [...odkazyMenu]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sekce.length) {
  const sledovac = new IntersectionObserver(
    (zaznamy) => {
      zaznamy.forEach((z) => {
        if (!z.isIntersecting) return;
        odkazyMenu.forEach((a) => {
          const aktivni = a.getAttribute("href") === "#" + z.target.id;
          a.style.color = aktivni ? "var(--azur)" : "";
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sekce.forEach((s) => sledovac.observe(s));
}
