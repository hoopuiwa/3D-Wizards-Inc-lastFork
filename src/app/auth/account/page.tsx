'use client';

import React, { useState } from 'react';

const AccountPage = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Account Details</h1>
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="name">
          <strong>Name:</strong>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          ) : (
            <span style={{ marginLeft: '10px' }}>{name}</span>
          )}
        </label>
      </div>
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="name">
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          ) : (
            <span style={{ marginLeft: '10px' }}>{email}</span>
          )}
        </label>
      </div>
      <div>
        {!isEditing ? (
          <button
            type="button"
            onClick={handleEdit}
            style={{ padding: '10px 20px', margin: '10px' }}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSave}
            style={{ padding: '10px 20px', margin: '10px' }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
