import { createRestaurantItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restourant-source';
import Preloader from '../templates/preloader-template';

const Home = {
  async render() {
    return `
    <div id="preload"></div>
    <div id="content">
        <section class="content">
          <article class="headline">
            <div class="headline-image">
              <img class="lazyload" data-src="./images/hero-image_1-small.jpg" alt="headline" />
            </div>
            <div class="headline-content">
              <h1 class="headline-title">Restto</h1>
              <p class="headline-description">
                Restto, adalah website untuk mencari dan menemukan restoran
                favorit anda, anda dapat mencari makanan, minuman favorit anda,
                selain itu anda juga dapat melihat review dari restoran yang
                anda cari dan anda juga dapat menyimpan daftar versi restoran
                terbaik anda.
              </p>
            </div>
          </article>
        </section>
        <div class="explore">
          <h1 class="explore-title">Explore Restaurant</h1>
          <p class="explore-desc">Beberapa restoran pilihan.</p>
          <div id="posts" class="posts">
            ${createSkeletonItemTemplate(20)}
          </div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const loading = document.getElementById('preload');
    const main = document.getElementById('content');
    const posts = document.getElementById('posts');
    loading.innerHTML = Preloader();
    main.style.display = 'none';
    posts.innerHTML = '';

    try {
      const data = await RestaurantSource.listRestaurant();
      data.restaurants.forEach((restaurant) => {
        posts.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      posts.style.display = 'block';
      posts.innerHTML = `<h1 class="error">Error : ${err}, swipe up to refresh!</h1>`;
    }
  },
};

export default Home;
