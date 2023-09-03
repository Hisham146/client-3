import axios from "axios";
import Compressor from "compressorjs";

const upload = async (file) => {
  try {
    const compressedFile = await new Promise((resolve) => {
      new Compressor(file, {
        quality: 0.7, // Adjust the quality as needed
        maxWidth: 1200, // Maximum width for resized image
        maxHeight: 900, // Maximum height for resized image
        async success(result) {
          // Calculate new dimensions while maintaining aspect ratio
          const image = new Image();
          image.src = URL.createObjectURL(result);

          await new Promise((imgResolve) => {
            image.onload = () => {
              const newWidth = Math.min(image.width, 1200);
              const newHeight = (newWidth * image.height) / image.width;
              const canvas = document.createElement("canvas");
              canvas.width = newWidth;
              canvas.height = newHeight;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(image, 0, 0, newWidth, newHeight);
              canvas.toBlob((blob) => {
                const compressedBlob = new Blob([blob], { type: file.type });
                resolve(new File([compressedBlob], file.name, { type: file.type }));
              }, file.type, 0.7); // Adjust quality as needed
              imgResolve();
            };
          });
        },
        error(err) {
          console.log("Compression error:", err);
          resolve(file); // Fallback to original file if compression fails
        },
      });
    });

    const data = new FormData();
    data.append("file", compressedFile);
    data.append("upload_preset", "Demofyp");

    const res = await axios.post("https://api.cloudinary.com/v1_1/dlzitfdzv/image/upload", data);

    if (res.data && res.data.url) {
      const url = res.data.url.replace("http://", "https://");
      console.log("After URL:", url);
      return url;
    } else {
      console.log("No valid URL property found in the response.");
    }
  } catch (err) {
    console.log(err);
  }
};

export default upload;
