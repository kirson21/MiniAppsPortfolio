import React from 'react';

const DineHub = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '1rem',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#474545',
        marginBottom: '1rem'
      }}>
        DineHub - Food Delivery App
      </h2>
      <p style={{
        color: '#666',
        fontSize: '1.1rem',
        marginBottom: '2rem'
      }}>
        React Native mobile application for food delivery
      </p>
      <div style={{
        padding: '3rem',
        backgroundColor: '#fff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          Ready-made app will be inserted here
        </p>
      </div>
    </div>
  );
};

export default DineHub;