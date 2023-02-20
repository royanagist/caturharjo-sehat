import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

async function saveImage(file) {
  try {
    // Upload the image to Cloud Storage.
    const filePath = `article/${file.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, file);
  } catch (error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  }
}

async function getImageURL(file) {
  // Get Storage ref.
  const filePath = `article/${file.name}`;
  const newImageRef = ref(getStorage(), filePath);

  // Generate a public URL for the file.
  const publicImageUrl = await getDownloadURL(newImageRef);
  return publicImageUrl;
}

// Triggered when a file is selected via the media picker.
async function onMediaFileSelected(event) {
  event.preventDefault();
  const file = event.target.files[0];

  await saveImage(file);
}

export { onMediaFileSelected, getImageURL };
