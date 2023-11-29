import React, { useState } from "react";
import Modal from 'react-modal';
import './style.css';

const HomePage = () => {
    const [data, setData] = useState([]);

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editProductName, setEditProductName] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editStock, setEditStock] = useState('');

    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [addProductName, setAddProductName] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addStock, setAddStock] = useState('');
  
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

      const openAddModal = () => {
        setAddModalIsOpen(true);
      };

      const closeAddModal = () => {
        setAddModalIsOpen(false);
      };


    const addData = () => {
      const lastId = data[data.length - 1]?.id || 0;

      const newData = {
        id: lastId + 1,
        productName: addProductName,
        stock: addStock,
        price: addPrice,
      };

      setData([...data, newData]);
      closeAddModal();
    }

    const editData = () => {
      const index = data.findIndex(product => product.id === editId);
      data[index].productName = editProductName;
      data[index].stock = editStock;
      data[index].price = editPrice;

      setData([...data]);
      closeEditModal();
    }

    const handleDelete = (id) => {
      const index = data.findIndex(product => product.id === editId);
      data.splice(index, 1);
      setData([...data]);
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

        <button onClick={editData} className="ModalButton">Save Changes</button>
        <button onClick={closeEditModal} className="ModalButton cancel">Cancel</button>
      </Modal>
      <Modal
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Modal"
        className="ModalContent"
        overlayClassName="Overlay"
        >
        <h2 className="ModalHeader">Add Product</h2>
        <label className="ModalLabel" htmlFor="addProductName">Product Name:</label>
        <input
          type="text"
          id="addProductName"
          value={addProductName}
          className="ModalInput"
          onChange={(e) => setAddProductName(e.target.value)}
        />

        <label className="ModalLabel" htmlFor="addStock">Price:</label>
        <input
          type="number"
          id="addPrice"
          value={addPrice}
          className="ModalInput"
          onChange={(e) => setAddPrice(e.target.value)}
        />

        <label className="ModalLabel" htmlFor="addStock">Stock:</label>
        <input
          type="number"
          id="addStock"
          value={addStock}
          className="ModalInput"
          onChange={(e) => setAddStock(e.target.value)}
        />

        <button onClick={addData} className="ModalButton">Save Changes</button>
        <button onClick={closeAddModal} className="ModalButton cancel">Cancel</button>
      </Modal>
      <button onClick={openAddModal}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
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