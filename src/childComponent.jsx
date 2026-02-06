import React from 'react';

// TODO: Destructure the props you need here (header, image, etc.)
class ChildComponent extends React.Component {

  constructor(props) {
   // todo add bindings etc to inititalize component and funcs 
   super(props);
  }
  
  render(){
   return (
    <div className="child-card">
      {/* TODO: 
        1. Add an <h2> for the header text 
        2. Add an <img> tag for the image
        3. Add a <p> tag for the content
        4. Add a <button> that fires the click event
      */}
      
      <button>Click Me</button>
    </div>
  );
 }
}

export default ChildComponent;
