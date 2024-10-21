import "./list.css";

export default function List({ Img, productName, quantity, price, onEdit, onDelete }) {
  return (
    <div className="List">
      <img src={Img} alt={productName} />
      <p className="list-name">{productName}</p>
      <p className="list-quantity">Quantity: {quantity}</p>
      <p className="list-price">Price: ₱{price}</p> {/* Display formatted price */}
      <button className="edit-button" onClick={onEdit}>Edit</button> {/* Edit button */}
      <button className="remove-button" onClick={onDelete}>Delete</button> {/* Delete button */}
    </div>
  );
}
