(() => {
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const dropdowns = document.querySelectorAll(".dropdown");

  // Marca el enlace activo usando data-page del body
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    const currentLink = document.querySelector(`.menu a[data-page-link="${currentPage}"]`);
    if (currentLink) currentLink.classList.add("active-link");
  }

  if (isTouchDevice) {
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const isOpen = dropdown.classList.contains("active");
        dropdowns.forEach((d) => d.classList.remove("active"));
        if (!isOpen) dropdown.classList.add("active");
      });
    });
    document.addEventListener("click", (event) => {
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) dropdown.classList.remove("active");
      });
    });
  }
})();
