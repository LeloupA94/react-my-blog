import Photo from "../assets/montreal.jpeg";
const Articles = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.Title}</h2>
      <h3>{props.Subtitle}</h3>
      <img src={Photo} alt="" />
      <p>{props.Description}</p>
    </div>
  );
};
export default Articles;
