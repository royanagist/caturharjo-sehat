const DrawerInitiator = {
  init({
    button, drawer, home, about, article, publish, logout, login
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });
    home.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#/home`);
    });
    about.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#/about`);
    });
    article.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#/article`);
    });
    publish.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#/publish`);
    });
    login.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#/signin`);
    });
    logout.addEventListener('click', (event) => {
      if (drawer.classList.contains('navbar-mobile')){
        this._toggleDrawer(event, drawer, button);
      }
      window.location.replace(`${window.location.origin}/#`);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('navbar-mobile');
    drawer.classList.toggle('dropdown-active');
    button.classList.toggle('bi-list')
    button.classList.toggle('bi-x')
  },
};

export default DrawerInitiator;
