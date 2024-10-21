import "./list.css";

export default function List(props) {
  return (
    <div className="List">
      <img src={props.Img} alt={props.productName} />
      <p>{props.productName}</p>
      <button id="btn-1"> Edit </button>
      <button id="btn-2"> Remove </button>
    </div>
  );
}

