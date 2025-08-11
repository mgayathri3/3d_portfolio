const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-shadow-smoke">
            {title}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
