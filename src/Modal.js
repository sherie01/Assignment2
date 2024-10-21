import "./modal.css";

export default function Modal() {
  return (
    <div id="addItemModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeAddItemModal()">&times;</span>
            <h2>Add Grocery Item</h2>
                <form id="add-item-form">
                        <input type="text" id="product-name" placeholder="Product Name" required>
                        <input type="text" id="brand" placeholder="Brand" required>
                        <input type="number" id="price" placeholder="Price" required>
                        <input type="text" id="weight" placeholder="Weight/Volume" required>
                        <input type="number" id="quantity" placeholder="Quantity" required>
                        <input type="text" id="store" placeholder="Store" required>
                        <input type="file" id="image" accept="image/*">
                        <select id="category">
                            <option value="Fruit">Fruit</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Dairy">Dairy</option>
                        </select>
                        <button type="submit">Add Item</button>
                </form>
        </div>
    </div>
  );
}