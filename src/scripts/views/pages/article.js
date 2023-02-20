import { createArticleTemplate, createOneArticleTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import Read from '../../firebase/read-database';

const Article = {
  async render() {
    return /* html */`
    <!-- ======= Article Section ======= -->
    <section id="article" class="article">
        <div class="row article-container">

        </div>
    </section><!-- End Article Section -->
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (url.id) {
      const id = url.id;
      Read.oneItemList(id).then((snapshot) => {
        const articleContainer = document.querySelector('.article-container');
        const data = snapshot.val();
        articleContainer.innerHTML = createOneArticleTemplate(data);
      });
    } else {
      Read.allItemList().then((snapshot) => {
        const articleContainer = document.querySelector('.article-container');
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          articleContainer.innerHTML += createArticleTemplate(childData);
        });
      });
    }
  },

};

export default Article;
