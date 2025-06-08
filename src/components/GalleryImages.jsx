export default function GalleryImages({ photos }) {
  if (photos.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "50px" }}>
        <p>No photos available. Please try a different input.</p>
      </div>
    );
  }

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
