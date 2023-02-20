import snackbar from 'node-snackbar';
import { onMediaFileSelected, getImageURL } from '../../firebase/storage';
import Write from '../../firebase/write-database';
import { getUserID, getUserName, isUserSignedIn } from '../../firebase/auth';

const Publish = {
  async render() {
    return /* html */`
        <div class="publish-container">
  
          <div data-aos="zoom-in" data-aos-delay="100" class="d-flex justify-content-center align-items-center">
            <h2>Unggah Artikelmu</h2>
          </div>
  
        </div>
  
      <div data-aos="zoom-in" data-aos-delay="200" class="form-container">
      <div class="row">
          <div class="col-md-6">
              <img id='loading' hidden src='https://www.google.com/images/spin-32.gif?a' alt="loading">
              <div class="signup-form">
                  <form action="" class="mt-5 border p-4 bg-light shadow" id="form">
                      <div class="row">
                          <div data-aos="zoom-in" data-aos-delay="300" class="mb-3 col-md-12">
                                <label>Judul<span class="text-danger">*</span></label>
                                <input type="text" name="fname" class="form-control" id="judul" placeholder="Judul Artikel">
                          </div>

                          <div data-aos="zoom-in" data-aos-delay="500" class="mb-3 col-md-12">
                                <label for="textArea">Isi Artikel<span class="text-danger">*</span></label>
                                <textarea class="form-control"  rows="3" id="text" placeholder="Isi Artikel"></textarea>
                          </div>
                          
                          <div data-aos="zoom-in" data-aos-delay="600" class="mb-3 col-md-12">
                                <label class="form-label" for="customFile">Upload Gambar Artikel<span class="text-danger">*</span></label>
                                <input type="file" accept="image/*" class="form-control" id="customFile" />
                          </div>

                          <div data-aos="zoom-in" data-aos-delay="700" class="col-md-12">
                                <button class="btn btn-publish float-end" id="submit" type='button' disabled>Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </div>
        `;
  },

  async afterRender() {
    const formElement = document.getElementById('form');
    const mediaElement = document.getElementById('customFile');
    const submitButton = document.getElementById('submit');
    const titleElement = document.getElementById('judul');
    const textElement = document.getElementById('text');
    const loadingElement = document.getElementById('loading');

    // Enables or disables the submit button depending on the values of the input fields.
    function toggleButton() {
      if (titleElement.value && textElement.value && mediaElement.value && loadingElement.hasAttribute('hidden')) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'true');
      }
    }

    titleElement.addEventListener('change', toggleButton);
    textElement.addEventListener('change', toggleButton);
    mediaElement.addEventListener('change', (e) => {
      loadingElement.removeAttribute('hidden');
      onMediaFileSelected(e).then(() => {
        snackbar.show({
          text: 'Image uploaded!',
          pos: 'top-center',
          backgroundColor: '#18A0FB',
          textColor: 'white',
          actionTextColor: 'black',
          actionText: '<i class="fa-solid fa-xmark"></i>',
          duration: 3000,
          customClass: 'customSnackbar',
        });
        loadingElement.setAttribute('hidden', 'true');
        toggleButton();
      });
    });
    submitButton.addEventListener('click', (e) => {
      if (!isUserSignedIn()) {
        snackbar.show({
          text: 'Anda harus masuk untuk mengunggah!',
          pos: 'top-center',
          backgroundColor: '#18A0FB',
          textColor: 'white',
          actionTextColor: 'black',
          actionText: '<i class="fa-solid fa-xmark"></i>',
          duration: 3000,
          customClass: 'customSnackbar',
        });
      }
      const title = titleElement.value;
      const text = textElement.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
      const file = mediaElement.files[0];
      const id = Date.now();
      const author = getUserName();
      const uid = getUserID();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const date = new Date().toLocaleDateString('id-ID', options);

      getImageURL(file)
        .then((imgUrl) => { Write.itemPublish(id, title, text, imgUrl, author, uid, date ); })
        .then(() => {
          snackbar.show({
            text: 'Submit successful!',
            pos: 'top-center',
            backgroundColor: '#18A0FB',
            textColor: 'white',
            actionTextColor: 'black',
            actionText: '<i class="fa-solid fa-xmark"></i>',
            duration: 3000,
            customClass: 'customSnackbar',
          });
        });
      formElement.reset();
      toggleButton();
      e.preventDefault();
    });
  },
};

export default Publish;
