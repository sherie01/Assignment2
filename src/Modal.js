import React from 'react'; 
import "./modal.css"; 

const Modal = ({ isOpen, onClose, onSubmit, item, setItem }) => {

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSubmit(); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setItem({ ...item, image: imageUrl }); 
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {}
        <h2 className="modal-title">{item.editIndex !== null ? "Edit Item" : "Add New Item"}</h2> {}
        <form onSubmit={handleSubmit} className="modal-form"> {}
          <input
            type="text" 
            value={item.name} 
            onChange={(e) => setItem({ ...item, name: e.target.value })} 
            placeholder="Product Name" 
            className="modal-input" 
            required 
          />
          <input
            type="number" 
            value={item.quantity} 
            onChange={(e) => setItem({ ...item, quantity: e.target.value })} 
            placeholder="Quantity" 
            className="modal-input" 
            required 
          />
          <input
            type="number" 
            value={item.price} 
            onChange={(e) => setItem({ ...item, price: e.target.value })} 
            placeholder="Price" 
            className="modal-input" 
            required 
          />
          <input
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="modal-input" 
          />
          {item.image && <img src={item.image} alt="Product" className="uploaded-image" />} {}
          <button type="submit" className="modal-submit-button"> {}
            {item.editIndex !== null ? "Update" : "Add Item"} {}
          </button>
          <button type="button" className="modal-close-button" onClick={onClose}>Close</button> {}
        </form>
      </div>
    </div>
  );
};

export default Modal; 