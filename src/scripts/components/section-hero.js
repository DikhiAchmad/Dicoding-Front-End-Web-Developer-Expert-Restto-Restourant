class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <picture class="background">
          <source media="(max-width: 600px)" srcset="./images/hero-image_3-small.jpg" class="background" alt="banner">
            <img
                class="background"
                src="./images/hero-image_3-large.jpg"
                alt="banner"
            />
          </picture>
            <div class="desc-hero">
                <h1 class="title">Restto</h1>
                <h2 class="desc">
                Restto akan membantu kamu untuk mencari restoran
                <br class="desktop" />
                terbaik di sekitarmu dengan mudah. yuk mulai!
                </h2>
            </div>
        </div>
        `;
  }
}

customElements.define('section-hero', Hero);
