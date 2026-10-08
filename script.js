document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "×" : "☰";
    });
  }

  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");
  const productField = document.getElementById("productField");
  if (product && productField) productField.value = product;

  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Sun Sai Chemics Product Enquiry - " + (data.get("product") || "General Enquiry"));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nProduct / Requirement: ${data.get("product")}\n\nMessage:\n${data.get("message")}`
      );
      status.textContent = "Your email application will open with the enquiry prepared. Add the client's official email in the mailto link before launch.";
      // IMPORTANT: replace CLIENT_EMAIL@example.com with the client's verified email before final publishing.
      window.location.href = `mailto:CLIENT_EMAIL@example.com?subject=${subject}&body=${body}`;
    });
  }
});