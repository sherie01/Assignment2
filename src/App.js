import "./styles.css";
import Header from "./Header.js";
import Add from "./Add.js";
import List from "./List.js";
import Modal from "./Modal.js";
import { useState } from "react";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState({ name: "", quantity: "", price: "", image: "", editIndex: null });

  // Open modal for adding a new item
  const openModal = () => {
    setModalOpen(true);
  };

  // Open modal for editing an existing item
  const openEditModal = (index) => {
    const itemToEdit = listItems[index];
    setItem({ ...itemToEdit, editIndex: index });
    setModalOpen(true);
  };

  // Close modal and reset the form
  const closeModal = () => {
    setModalOpen(false);
    setItem({ name: "", quantity: "", price: "", image: "", editIndex: null }); // Reset item when modal closes
  };

  // Add or Update item
  const handleAddItem = () => {
    if (item.name.trim() !== "" && item.quantity.trim() !== "" && item.price.trim() !== "") {
      const newItem = { ...item, price: parseFloat(item.price) }; // Ensure price is a number
      const updatedItems = item.editIndex !== null
        ? listItems.map((_, index) => (index === item.editIndex ? newItem : _)) // Update item
        : [...listItems, newItem]; // Add new item

      setListItems(updatedItems);
      closeModal(); // Close modal after adding/updating
    }
  };

  // Delete item from list
  const handleDeleteItem = (index) => {
    const updatedItems = listItems.filter((_, i) => i !== index); // Remove the item at the index
    setListItems(updatedItems);
  };

  return (
    <> 
      <Header />
      <Add openModal={openModal} />
      {listItems.map((listItem, index) => (
        <List
          key={index}
          Img={listItem.image || "image/avocado.png"} // Default image if none provided
          productName={listItem.name}
          quantity={listItem.quantity}
          price={listItem.price.toLocaleString(undefined, { minimumFractionDigits: 2 })} // Format price
          onEdit={() => openEditModal(index)} // Pass index to openEditModal
          onDelete={() => handleDeleteItem(index)} // Pass index to handleDeleteItem
        />
      ))}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddItem}
          item={item}
          setItem={setItem}
        />
      )}
    </>
  );
}

export default App;
