import Home from '../views/pages/home';
import FavoritRestourant from '../views/pages/favorite-restourant';
import DetailRestourant from '../views/pages/detail-restourant';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit-restourant': FavoritRestourant,
  '/detail-restourant/:id': DetailRestourant,
};

export default routes;
