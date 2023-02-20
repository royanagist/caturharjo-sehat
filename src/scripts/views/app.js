import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import LogoutInitiator from '../utils/logout-initiator';

class App {
  constructor({
    button, drawer, content, home, about, article, publish, login, logout
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._logout = logout;
    this._home = home;
    this._about = about;
    this._article = article;
    this._publish = publish;
    this._logout = logout;
    this._login = login;
    

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      home: this._home,
      about: this._about,
      article: this._article,
      publish: this._publish,
      logout: this._logout,
      login: this._login,
    });
    LogoutInitiator.init({
      logout: this._logout,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const current = document.querySelector('.active');
    current.classList.remove('active');

    switch (url) {
      case '/home':
        document.getElementById('home').className += ' active';
        break;
      case '/about':
        document.getElementById('about').className += ' active';
        break;
      case '/article':
        document.getElementById('article').className += ' active';
        break;
      case '/article/:id':
        document.getElementById('article').className += ' active';
        break;
      case '/signin':
        document.getElementById('logo').className += ' active';
        break;
      case '/publish':
        document.getElementById('publish').className += ' active';
        break;
      default:
        document.getElementById('home').className += ' active';
        break;
    }
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
