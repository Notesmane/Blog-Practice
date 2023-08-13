
//& the below lesson comes from https://www.youtube.com/watch?v=9D1x7-2FmTA&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4
//& from The Net Ninja

// we can 'hard code' a title like we did below in the h1, but we can also use a variable instead
// we do this by const title = ..... this sets a new variable named title that can later be replace by other words(titles)
// we can write all of the valid JS that we want inside of the function before the return
// 

//! ================================= step 1

// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <h1>App Compnent</h1>
//     </div>
//   );
// }

// export default App;

//! ================================= step 2

// as you can see we have now added a new title that isnt hardcoded. instead the variable title has been created and then passed into the h1
// then we created another variable thats a number instead of a string. 
// React converts whatever data type we use in the browser. it can not output booleans or objects though
// as shown in the commented out object, const person = { name: 'yoshi', age: 30 } and its call in the ptag <p>{ person }</p>, objects and booleans can not be converted by React so it gives us an error.
// we can also write out the dynamic values directly into the curly braces such as the consecutive ptags
// the ptags contain: a number (10), a string ("Hellow World"), or an array [1,2,3,4,5], or an evaluation
// we can also use an href in JSX but instead of hardcoding it in like the commented out <a href we can store it into a dynmaic value
//========================

// import './App.css';

// function App() {
//   const title = 'Welcome to the new Blog';
//   const likes = 50;
//   // const person = { name: 'yoshi', age: 30 }
//   const link = "http://www.google.com";

//   return (
//     <div className="App">
//       <h1>{ title }</h1>
//       <p>Liked { likes } times</p>

//       {/* <p>{ person }</p> */}

//       <p>{ 10 }</p>
//       <p>{ "Hellow World!" }</p>
//       <p>{ [1,2,3,4,5] }</p>
//       <p>{ Math.random() * 10 }</p>

//       {/* <a href="http://www.google.com">Google Site</a> */}
//       <a href={ link }>Google Site</a>

//     </div>
//   );
// }

// export default App;


//! ================================= step 3

// we can now continue on to build out the components of our blog website
// so we create the component Navbar.js inside of our src folder. Thats what he does it in the video but I will create it in a new folder called components as thats what we are doing in class
// then we open up Navbar.js and begin with our boilerplate for components
//========================


// import './App.css';
// import Navbar from './components/Navbar';

// function App() {
//   const title = 'Welcome to the new Blog';
//   const likes = 50;
//   // const person = { name: 'yoshi', age: 30 }
//   const link = "http://www.google.com";
  
//   return (
//     <div className="App">
//       <Navbar />
//       <h1>{ title }</h1>
//       <p>Liked { likes } times</p>

//       {/* <p>{ person }</p> */}

//       <p>{ 10 }</p>
//       <p>{ "Hellow World!" }</p>
//       <p>{ [1,2,3,4,5] }</p>
//       <p>{ Math.random() * 10 }</p>

//       {/* <a href="http://www.google.com">Google Site</a> */}
//       <a href={ link }>Google Site</a>

//     </div>
//   );
// }

// export default App;


//! ================================= step 6 (continued from Navbar.js)

// we will take out all of the examples that we learned above in step 3, leaving only what we need to move forward
// we then need to add into the main div, a nested div "content" as well as an h1 for the title - App Component
// we need to import the Navbar.js component into App.js from its location as its nested in it
// then we wiil nest the Navbar compenent just above the content div, as we want the navbar outside of the content but still in the main div App 
// we then need to make a separate component for the content of the homepage, so we need to create that compenent now
//========================


// import './App.css';
// import Navbar from './components/Navbar';

// function App() {

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <h1>App Component</h1>
//       </div>
//     </div>
//   );
// }

// export default App;


//! ================================= step 7 (continued from Home.js)
// we need to import the Home.js file into our App.js
// then we need to nest it with <Home /> replacing <h1>App Component</h1>
//========================

// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';

// function App() {

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;


//! ================================= step 8
// we can start thinking about some styling. because react brings App.css as well as Index.css we will delete the App.css and also delete its import into our App.js file
// then we goto the index.css file to add in styling

import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
