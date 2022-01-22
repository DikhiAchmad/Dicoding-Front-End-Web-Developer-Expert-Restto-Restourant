import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavRestaurantIdb from '../../data/restourant-idb';

const FavoritRestourant = {
  async render() {
    return `
      <div id="content">
      <div class="favorite">
        <h1 class="favorite-title">Restaurant Favorite</h1>
        <p class="favorite-desc">Beberapa Restoran Favorite kamu.</p>
        <div id="posts" class="posts"></div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const data = await FavRestaurantIdb.getAllRestaurants();
    const posts = document.querySelector('#posts');
    if (data.length === 0) {
      posts.innerHTML = `
      <h1 class="error">You dont have any Favorite Restaurant.</h1>
      `;
    }
    const totalRest = data.length;
    data.forEach((restaurant) => {
      posts.innerHTML += createRestaurantItemTemplate(restaurant, totalRest);
    });
  },
};

export default FavoritRestourant;
