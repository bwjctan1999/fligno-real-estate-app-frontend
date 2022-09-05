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
      className="relative h-80 rounded-lg border-2 border-dashed border-TextSecondary lg:h-full "
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex h-full items-center justify-center">
          <p>Drop the files here ...</p>
        </div>
      ) : (
        <div className="top-0 bottom-0 left-0 right-0 h-full overflow-auto md:absolute">
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <div className="mb-4 flex flex-col items-center">
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
