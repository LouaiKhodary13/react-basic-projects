import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  //  initial states
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // handling the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // empty input
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'please add item');
    } else if (name && isEditing) {
      // iterate over the list
      setList(
        list.map((item) => {
          // check if the item ID === the ID of the item
          if (item.id === editId) {
            // changing the name to the edited name
            return { ...item, title: name };
          }
          return item;
        })
      );
      // back to default
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      // adding the item
      let newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      // back to default
      setName('');
      // show alert
      showAlert(true, 'success', 'items added');
    }
  };
  //  display the alert
  useEffect(() => {
    setTimeout(() => {
      showAlert();

      return () => {
        clearTimeout();
      };
    }, 5000);
  }, [list]);
  // show the alert
  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
  };
  // clear all items
  const clearAll = () => {
    showAlert(true, 'danger', 'items Cleared');
    setList([]);
  };

  // remove item
  const removeItem = (id) => {
    let newItems = list.filter((item) => item.id !== id);
    setList(newItems);
    showAlert(true, 'danger', 'item removed');
  };
  // edit item
  const editItem = (id) => {
    let editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(editItem);
    setName(editItem.title);
  };
  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} />}
          <h3>grocery Bud</h3>
          <div className='form-control'>
            <input
              type='text'
              value={name}
              className='grocery'
              onChange={(e) => setName(e.target.value)}
              placeholder='eg..Eggs'
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearAll}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
