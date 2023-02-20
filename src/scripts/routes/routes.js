import Home from '../views/pages/home';
import SignIn from '../views/pages/signin';
import About from '../views/pages/about';
import Article from '../views/pages/article';
import Publish from '../views/pages/publish';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/article/:id': Article,
  '/article': Article,
  '/signin': SignIn,
  '/publish': Publish,
};

export default routes;
