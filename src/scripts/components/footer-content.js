class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h1 class="title-brand">Restto</h1>
          <p class="desc-brand">
            Dapatkan info mengenai restoran <br class="desktop" />
            terbaik di sekitarmu hanya di Restto.
          </p>
          <ul class="social-media">
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.instagram.com/dikhi_achmad/" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.linkedin.com/in/dikhiachmaddani/" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li class="social-item">
              <a class="social-link" href="https://github.com/DikhiAchmad" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-github"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <h1 class="menu-title">Menu</h1>
          <ul class="menu">
            <li class="item"><a class="link" href="#/home">Home</a></li>
            <li class="item"><a class="link" href="#/favorit-restourant">Favorite</a></li>
            <li class="item"><a class="link" href="https://www.linkedin.com/in/dikhiachmaddani/" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </div>
      </div>
      <hr class="line" />
      <p class="copyright">
        copyright <span id="date"></span> @ Dikhi Achmad Dani.
      </p>
    </footer>`;
  }
}

customElements.define('footer-content', FooterContent);
