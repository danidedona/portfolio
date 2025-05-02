import Gallery from "react-photo-gallery";

const PhotoGrid = ({ photos, onImageClick }) => {
  return (
    <div className="mt-12">
      <Gallery
        photos={photos}
        direction="row"
        targetRowHeight={150}
        margin={8}
        onClick={({ photo }) => onImageClick?.(photo.src)}
      />
    </div>
  );
};

export default PhotoGrid;
