import "./add.css";

export default function Add({ openModal }) {
  return (
    <div className="Add">
      <button onClick={openModal}> Add Item </button>
    </div>
  );
}
