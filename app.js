class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div> Lets rock and rolls-This is babel</div>
         </div> )
      };  
  }

const content = document.getElementById('React-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,content); 