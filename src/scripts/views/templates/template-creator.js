/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */

const createArticleTemplate = (data) => /* html */`

    <div data-aos="zoom-in" data-aos-delay="100" class="col-lg-4 col-md-6 article-item">
        <div class="article-wrap">
            <img class="lazyload" data-src="${data.imgUrl}" title="${data.title}" tabindex="0">
            <div class="article-info">
                <h4>${data.title}</h4>
                <p>${data.text}</p>
                <a class='article-btn' href='#/article/${data.id}' >Lanjut baca</a>
            </div>
        </div>
    </div>
`;
const createOneArticleTemplate = (data) => /* html */`

    <div class="article-item container">
        <div class="detail-container">
            <img data-aos="zoom-in" class="lazyload img-fluid detail-img" data-src="${data.imgUrl}" title="${data.title}" tabindex="0">
            <div class='detail-title' >
                <h1 data-aos="zoom-in" data-aos-delay="400">${data.title}</h1>
                <h5 data-aos="zoom-in" data-aos-delay="600">Penulis: ${data.author}</h5>
                <p data-aos="zoom-in" data-aos-delay="800">${data.date}</p>
            </div>
            <div class="detail-info">
                <p data-aos="zoom-in" data-aos-delay="1000">${data.text}</p>
            </div>
        </div>
    </div>
`;
export {
  createArticleTemplate, createOneArticleTemplate
};
