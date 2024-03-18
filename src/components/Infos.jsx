import Picture from "../assets/moi.jpeg";
const Infos = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.Title}</h2>
      <img src={Picture} alt="" />
      <p>{props.Description}</p>
    </div>
  );
};
export default Infos;
