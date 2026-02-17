import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { header, image, content, onAction } = this.props;

    return (
      <div className="child-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
        <h2>{header}</h2>
        <img 
          src={image} 
          alt={header} 
          style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
        />
        <p style={{ minHeight: '3em' }}>{content}</p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onAction('happy')}>Give Treat 🦴</button>
          <button onClick={() => onAction('sad')}>Go on Vacation ✈️</button>
          {/* New Angry Button */}
          <button onClick={() => onAction('angry')}>Take Toy 🧸</button>
        </div>
      </div>
    );
  }
}

export default ChildComponent;