class ImageUploader {
  
  async upload(file) {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "job3swnj");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/hyeokjin/image/upload`,
      {
        method: "POST",
        body: formData
      });
    
    return await res.json();
  }
}

export default ImageUploader