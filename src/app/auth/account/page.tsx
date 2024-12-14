/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

const AccountPage = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [isEditing, setIsEditing] = useState(false);
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';

  useEffect(() => {
    setEmail(currentUser);
  }, [currentUser]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    setIsEditing(false);
    // Prepare the data to send to the API
    const updatedUser = { name, email, address, phone };

    try {
      // Send the updated user data to the API (POST request)
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User updated successfully:', data);
        // Optionally display a success message to the user
      } else {
        console.error('Error saving user:', data.message);
        // Optionally display an error message to the user
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '50px' }}>
      <div
        style={{
          maxWidth: '400px',
          margin: '50px auto',
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Account Details</h1>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: '500', marginBottom: '5px' }}>Name:</label>
          {isEditing ? (
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: '500', marginBottom: '5px' }}>Email:</label>
          {isEditing ? (
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{email}</span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="address" style={{ fontWeight: '500', marginBottom: '5px' }}>Address:</label>
          {isEditing ? (
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ fontWeight: '500', marginBottom: '5px' }}>Phone Number:</label>
          {isEditing ? (
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span>{phone}</span>
          )}
        </div>

        <button
          type="button"
          onClick={isEditing ? handleSave : handleEdit}
          style={{
            padding: '10px 20px',
            margin: '10px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
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
