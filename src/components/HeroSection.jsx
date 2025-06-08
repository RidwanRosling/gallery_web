export default function HeroSection() {
  return (
    <div className="header-container">
      <div className="header-text">
        <h1 className="header-h1">
          Welcome to the Enchanting Archipelago of Indonesia
        </h1>
        <p className="sub-header-p">
          Experience the unmatched beauty of Indonesia — a nation of thousands
          of islands, <br /> home to golden beaches, tropical rainforests, and
          ancient traditions. <br /> Let every corner of the archipelago inspire
          your journey.
        </p>
      </div>
      <div className="header-image">
        <img
          src="/indonesia.svg"
          alt="Peta Indonesia"
          className="indonesia-map"
        />
      </div>
    </div>
  );
}
