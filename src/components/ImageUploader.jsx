import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import IconAddImage from "../assets/icons/IconAddImage";

export default function ImageUploader() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const file = reader.result;
        setImages((imgs) => [...imgs, file]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 border-TextSecondary rounded-lg relative h-80 lg:h-full "
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex justify-center items-center h-full">
          <p>Drop the files here ...</p>
        </div>
      ) : (
        <div className="h-full md:absolute top-0 bottom-0 left-0 right-0 overflow-auto">
          <div className="text-center w-full h-full flex flex-col justify-center items-center p-4">
            <div className="flex flex-col items-center mb-4">
              <IconAddImage />
              <p>Drag and Drop Images here</p>
              <p> or click to select files</p>
            </div>

            <div className="grid grid-cols-3 gap-4 overflow-y-scroll">
              {images.map((img) => (
                <img src={img} className="rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
