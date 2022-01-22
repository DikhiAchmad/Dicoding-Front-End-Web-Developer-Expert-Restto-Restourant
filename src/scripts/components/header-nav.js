class HeaderNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header id="header" class="header">
      <nav class="navbar">
        <a href="/" class="navbar-brand">Restto</a>
        <button class="hamburger" aria-label="hamburger menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#/home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#/favorit-restourant" class="nav-link">Favorite</a>
          </li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/dikhiachmaddani/" class="nav-link" target="_blank" rel="noreferrer">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
      `;
  }
}

customElements.define('header-nav', HeaderNav);
