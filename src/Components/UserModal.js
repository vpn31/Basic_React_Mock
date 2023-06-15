import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';
import { useNavigate } from 'react-router-dom';

const UserModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    dispatch(addUser(user));
    navigate('/newUser');
  };

  return (
    <div className="user-modal">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button type="submit" id="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
