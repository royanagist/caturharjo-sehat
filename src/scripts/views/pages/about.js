import img1 from '../../../public/image/team/team-1.jpg'
import img2 from '../../../public/image/team/team-2.jpg'
import royanImg from '../../../public/image/team/royan.png'
import arnetaImg from '../../../public/image/team/arneta.jpg'
import adelaImg from '../../../public/image/team/adela.jpg'

const About = {
  async render() {
    return /* html */`
    
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">
            <div class="row content">
                    <div class="section-title">
                        <h2 data-aos="fade-right">Tentang Caturharjo Sehat</h2>
                    </div>
                <div>
                    <p data-aos="fade-left">
                    Caturharjo Sehat merupakan website sistem informasi kesehatan yang dikembangkan oleh tim KKN PPM UGM 2022 untuk membantu masyarakat Caturharjo untuk dapat memperoleh akses informasi kesehatan secara merata.
                    </p>
                    <h4 data-aos="fade-right">
                    Fitur utama Caturharjo Sehat:
                    </h4>
                    <ul>
                        <li data-aos="fade-left" ><i class="bi bi-check-square-fill"></i>Membaca Artikel Kesehatan</li>
                        <p data-aos="fade-right" >Website Caturharjo Sehat hadir untuk menyuguhkan artikel dan berita kesehatan yang dapat diakses bebas oleh masyarakat.</p>
                        <li data-aos="fade-left"><i class="bi bi-check-square-fill"></i>Mengunggah artikel kesehatan</li>
                        <p data-aos="fade-right" >Website Caturharjo Sehat hadir sebagai media yang memberikan kesempatan bagi masyarakat untuk menyalurkan dan berbagi informasi kesehatan dengan fitur mengunggah artikel kesehatan.</p>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2 data-aos="zoom-in" data-aos-delay="100">Team</h2>
                    <p data-aos="zoom-in" data-aos-delay="200">Website ini dibuat oleh Sub Unit 4 KKNPPM UGM Periode 4</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div data-aos="fade-right" data-aos-delay="100" class="member" >
                        <div class="pic"><img src=${royanImg} id="royan" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Royan Agist Ramadhan</h4>
                            <p class="role">Ilmu Komputer</p>
                            <div class="social">
                                <a href="https://www.instagram.com/royanagist/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div data-aos="fade-left" data-aos-delay="200" class="member">
                        <div class="pic"><img src=${adelaImg} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Made Adelasari Wirya Putri</h4>
                            <p class="role">Hubungan International</p>
                            <div class="social">
                                <a href="https://www.instagram.com/adelaasari"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div data-aos="fade-right" data-aos-delay="300" class="member">
                        <div class="pic"><img src=${img2} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Gaby</h4>
                            <p class="role">Hubungan International</p>
                            <div class="social">
                                <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div data-aos="fade-left" data-aos-delay="400" class="member">
                        <div class="pic"><img src=${arnetaImg} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Arneta Launuru</h4>
                            <p class="role">Manajemen</p>
                            <div class="social">
                                <a href="https://www.instagram.com/arnetalaunuru"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div data-aos="fade-left" data-aos-delay="400" class="member">
                        <div class="pic"><img src=${img1} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Zidan</h4>
                            <p class="role">Manajemen</p>
                            <div class="social">
                                <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div data-aos="fade-left" data-aos-delay="400" class="member">
                        <div class="pic"><img src=${img1} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Aziz</h4>
                            <p class="role">Hukum</p>
                            <div class="social">
                                <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div data-aos="fade-left" data-aos-delay="400" class="member">
                        <div class="pic"><img src=${img1} class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Nanda</h4>
                            <p class="role">Teknik Mesin</p>
                            <div class="social">
                                <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </section><!-- End Team Section -->
        `;
  },

  async afterRender() {
  },
};

export default About;
