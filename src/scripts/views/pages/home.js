import heroImage from '../../../public/image/hero6.jpg'

const Home = {
  async render() {
    return /* html */`
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="zoom-in" data-aos-delay="100">MAJU BERSAMA, SEHAT BERSAMA</h1>
          <h2 data-aos="zoom-in" data-aos-delay="200">Berbagi informasi kesehatan bersama guna mewujudkan desa sehat melalui peningkatan kualitas kesehatan bersama Caturharjo Sehat</h2>
          <h2 data-aos="zoom-in" data-aos-delay="200">Klik mulai untuk membaca artikel pertamamu!</h2>
          <div data-aos="zoom-in" data-aos-delay="300" class="d-flex">
            <a href="#/article" class="btn-get-started scrollto">Mulai</a>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src=${heroImage} class="img-fluid animated" alt="">
        </div>
      </div>
    </div>
  </section><!-- End Hero -->
    
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
