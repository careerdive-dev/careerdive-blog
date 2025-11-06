// Function to render navbar on all pages
function renderNavbar() {
  // Determine the correct path to index.html based on current location
  const isInPosts = window.location.pathname.includes("/posts/");
  const homeLink = isInPosts ? "../index.html" : "index.html";

  const navbarHTML = `
    <header class="navbar">
      <div class="nav-container">
        <a href="${homeLink}" class="logo">
          커리어다이브<span class="highlight">blog</span>
        </a>
      </div>
    </header>
  `;

  // Insert navbar at the beginning of body
  const body = document.body;
  if (body) {
    body.insertAdjacentHTML("afterbegin", navbarHTML);
  }
}

// Initialize navbar when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderNavbar);
} else {
  renderNavbar();
}
