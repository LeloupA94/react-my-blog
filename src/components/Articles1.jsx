const Articles1 = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.Title}</h2>
      <h3>{props.Subtitle}</h3>
      <img src="https://www.francaisaletranger.fr/wp-content/uploads/2022/11/Montreal.jpg" />
      <p>{props.Description}</p>
    </div>
  );
};
export default Articles1;
