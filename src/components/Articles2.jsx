const Articles2 = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.Title}</h2>
      <h3>{props.Subtitle}</h3>
      <img src="https://ychef.files.bbci.co.uk/1920x960/p0cxx951.jpeg" />
      <p>{props.Description}</p>
    </div>
  );
};
export default Articles2;
