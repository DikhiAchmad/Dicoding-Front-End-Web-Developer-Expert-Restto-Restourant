import CONFIG from '../../globals/config';
import shortDescription from '../../utils/short-description';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-card">
        <img class="card-img lazyload"
        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId : './images/placeholder-small.jpg'}" alt="${restaurant.name}"/>
        <div class="card-body">
            <a class="card-title" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            <div class="card_location-rating">
                <span class="location">
                  <i class="fa-solid fa-location-dot"></i> ${restaurant.city}
                </span>
                <span class="rating">
                  <i class="fa-solid fa-star"></i> ${restaurant.rating}
                </span>
            </div>
            <p class="card-desc">
                ${shortDescription.short(restaurant.description, 75)}
            </p>
            <a class="btn-link" href="${`/#/detail-restourant/${restaurant.id}`}">Lihat Selengkapnya</a>
        </div>
    </article>
`;

const createSkeletonItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
        <article class="post-card">
            <img class="card-img lazyload"
            data-src="./images/placeholder-small.jpg"/>
            <div class="card-body">
            <a class="card-title" href="#">Dani Restto</a>
            <div class="card_location-rating">
                <span class="location">
                  <i class="fa-solid fa-location-dot"></i> Kota
                </span>
                <span class="rating">
                  <i class="fa-solid fa-star"></i> rating
                </span>
            </div>
            <p class="card-desc">
                ${shortDescription.short('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus libero nemo sint eum saepe eligendi beatae explicabo ea quidem ipsam, accusamus')}
            </p>
            <a class="btn-link" href="#">Lihat Selengkapnya</a>
            </div>
        </article>
    `;
  }
  return template;
};

const restaurantDetailTemplate = (detail) => `
  <div id="detail">
    <div class="detail-body">
      <img class="image lazyload" data-src="${detail.pictureId ? CONFIG.BASE_IMAGE_URL + detail.pictureId : './images/placeholder-small.jpg'}" alt="${detail.name}">
      <div class="wrapper">
        <h1 class="title-restourant">${detail.name}</h1>
        <div class="location-rating">
          <span class="location">
            <i class="fa-solid fa-location-dot"></i> ${detail.address}, ${detail.city}
          </span>
          <span class="rating">
            <i class="fa-solid fa-star"></i> ${detail.rating}
          </span>
        </div>
        <p class="desc">${shortDescription.short(detail.description, 580)}</p>

        <ul class="categories">
        ${detail.categories.map((element) => `<li>${element.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="detail-information">
      <h1 class="menu-title">Menu</h1>
      <p class="menu-desc">berikut menu yang ada di restorant ini.</p>
      <div class="wrapper-info">
        <div class="info-food">
          <h1 class="info-title">Makanan</h1>
          <ul class="info-body">
          ${detail.menus.foods.map((element) => `<li>${element.name}</li>`).join('')}
          </ul>
        </div>
        <div class="info-drink">
          <h1 class="info-title">Minuman</h1>
          <ul class="info-body">
          ${detail.menus.drinks.map((element) => `<li>${element.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="reviews-section">
        <h1 class="reviews-title">Reviews</h1>
        <div class="wrapper-reviews">
        ${detail.customerReviews.map((element) => `
          <div class="reviews-card">
          <i class="fa-solid fa-user-large"></i>
              <h1 class="card-title">${element.name}</h1>
              <p class="card-desc">${element.review}</p>
              <p class="card-date">${element.date}</p>
          </div>
        `).join('')}
        </div>
      </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-bookmark-o"" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createSkeletonItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  restaurantDetailTemplate,
};
