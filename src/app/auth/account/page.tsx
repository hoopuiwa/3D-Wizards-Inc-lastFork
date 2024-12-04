/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';

const AccountPage = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  // Define styles as objects for easier maintenance
  const containerStyles = {
    backgroundColor: '#FF7F50',
    minHeight: '100vh',
    paddingTop: '50px',
  };

  const cardStyles = {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center' as 'center', // Specify 'center' explicitly for type safety
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#6A0DAD',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Account Details
        </h1>

        {/* Name Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={isEditing ? name : ''}
            onChange={(e) => setName(e.target.value)}
            style={inputStyles}
            readOnly={!isEditing}
            aria-label="Name input field"
          />
        </div>

        {/* Email Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: '500', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={isEditing ? email : ''}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
            readOnly={!isEditing}
            aria-label="Email input field"
          />
        </div>

        {/* Edit/Save Button */}
        <button
          type="button"
          onClick={isEditing ? handleSave : handleEdit}
          style={buttonStyles}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          {isEditing ? '💾 Save' : '✏️ Edit'}
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
