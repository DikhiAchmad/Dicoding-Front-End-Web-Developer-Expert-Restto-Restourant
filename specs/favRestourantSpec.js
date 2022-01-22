/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favRestourantContract';
import FavRestaurantIdb from '../src/scripts/data/restourant-idb';

describe('Favorite Restourant Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb);
});
