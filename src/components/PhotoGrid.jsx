import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PhotoGrid = ({ images, columns = 3, onImageClick }) => {
  return (
    <section className="mt-16">
      <div className="w-full max-w-screen-xl mx-auto px-2">
        <ImageList variant="masonry" cols={columns} gap={12}>
          {images.map((src, i) => (
            <ImageListItem key={i}>
              <img
                src={src}
                alt={`Masonry collage ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl shadow-md cursor-pointer"
                onClick={() => onImageClick?.(src)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
};

export default PhotoGrid;
