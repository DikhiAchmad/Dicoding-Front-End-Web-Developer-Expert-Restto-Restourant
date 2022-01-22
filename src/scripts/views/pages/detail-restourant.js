import { restaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restourant-source';
import Preloader from '../templates/preloader-template';
import PostReview from '../../utils/post-review';
import FavRestaurantIdb from '../../data/restourant-idb';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestourant = {
  async render() {
    return `
        <div id="preload"></div>
        <div id="likeButtonContainer"></div>
        <div id="detail" class="detail-restourant">
          <h1 class="detail-title">Details Restaurant</h1>
          <p class="detail-desc">detail informasi terkait restorant.</p>
          
          <div id="detail-restaurant"></div>
          <div class="form-review">
            <form>
              <div class="input">
                <label for="inputName" class="form-label">Name</label>
                <input name="name" type="text" class="form-input" id="inputName">
              </div>
              <div class="input">
                <label for="inputReview" class="form-label">Review</label>
                <input name="review" type="text" class="form-input" id="inputReview">
              </div>
              <button id="submit" type="submit" class="button">Submit</button>
            </form>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.getElementById('preload');
    const containerRestaurant = document.getElementById('detail-restaurant');
    const mainResto = document.querySelector('.detail-restourant');
    loading.innerHTML = Preloader();
    mainResto.style.display = 'none';

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      containerRestaurant.innerHTML += restaurantDetailTemplate(data.restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavRestaurantIdb,
        data,
      });

      mainResto.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      mainResto.style.display = 'block';
      loading.style.display = 'none';
      containerRestaurant.innerHTML = `<h1 class="error">Error : ${err}, swipe up to refresh!</h1>`;
    }

    const btnSubmit = document.querySelector('#submit');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default DetailRestourant;
