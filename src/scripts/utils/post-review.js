import RestaurantSource from '../data/restourant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.wrapper-reviews');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
          <div class="reviews-card">
              <i class="fa-solid fa-user-large"></i>
              <h1 class="card-title">${name}</h1>
              <p class="card-desc">${review}</p>
              <p class="card-date">${date}</p>
          </div>
        </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
