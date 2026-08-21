const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("quoteForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thanks — your enquiry is ready to send. Connect this form to your email/CRM to receive submissions.";
  note.style.fontWeight = "700";
  form.reset();
});