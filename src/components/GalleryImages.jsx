export default function GalleryImages({ photos }) {
  return (
    <div className="container">
      <div className="main-content">
        {photos.map((photo, index) =>
          index === 8 && photo.width <= 700 ? null : (
            <img
              key={photo.id}
              src={
                index === 0 || index === 8
                  ? photo.urls.regular
                  : photo.urls.small
              }
              alt={photo.alt_description}
              className={`photo-${index}`}
            />
          )
        )}
      </div>
    </div>
  );
}
