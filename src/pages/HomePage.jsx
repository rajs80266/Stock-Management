import React, { useState } from "react";
import Modal from 'react-modal';
import './style.css';

const HomePage = () => {
    const [data, setData] = useState([
      { id: 1, productName: 'Product 1', stock: 7, price: 10 },
      { id: 2, productName: 'Product 2', stock: 5, price: 20 },
    ]);

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editProductName, setEditProductName] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editStock, setEditStock] = useState('');
  
    const openEditModal = ({id, productName, price, stock}) => {
        setEditId(id);
        setEditProductName(productName);
        setEditPrice(price);
        setEditStock(stock);
        setEditModalIsOpen(true);
      };
    
      const closeEditModal = () => {
        setEditModalIsOpen(false);
      };

    const handleDelete = (id) => {
      console.log(`Delete button clicked for ID: ${id}`);
    };
  
    return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Modal"
        className="ModalContent"
        overlayClassName="Overlay"
      >
        <h2 className="ModalHeader">Edit Product</h2>
        <h3>Id: {editId}</h3>
        <label className="ModalLabel" htmlFor="editProductName">Product Name:</label>
        <input
          type="text"
          id="editProductName"
          value={editProductName}
          className="ModalInput"
          onChange={(e) => setEditProductName(e.target.value)}
        />

        <label className="ModalLabel" htmlFor="editStock">Price:</label>
        <input
          type="number"
          id="editPrice"
          value={editPrice}
          className="ModalInput"
          onChange={(e) => setEditPrice(e.target.value)}
        />

        <label className="ModalLabel" htmlFor="editStock">Stock:</label>
        <input
          type="number"
          id="editStock"
          value={editStock}
          className="ModalInput"
          onChange={(e) => setEditStock(e.target.value)}
        />

        <button onClick={() => {}} className="ModalButton">Save Changes</button>
        <button onClick={closeEditModal} className="ModalButton cancel">Cancel</button>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button onClick={() => openEditModal(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
};

export default HomePage;