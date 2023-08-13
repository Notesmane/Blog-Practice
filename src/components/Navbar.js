

//! ================================= step 4 (step 3 is in App.js)

// we start with a boilerplate component or a 'stateless functional component' to start this file

// const addinyourcomponentnamehere = () => {
//     return ( );
// }

// export default Navbar;

//! ================================= step 5

// we then give the compoenent a name, navbar and add into the return 
// an h1 and then some links wrapped into a div all in the nav
// in step 6 we import the Navbar into the App.js file and then call it in App.js
// ===============================


// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/" >Home</a>
//                 <a href="/create" >New Blog</a>
//             </div>
                
//         </nav>
//     );
// }

// export default Navbar;


//! ================================= step 10 (from Index.css)
// now we want to add some inline styling (which is directly styling a tag or class)
// so we will style the "/create" href
// in html we would write out style="and set the css style properties in here"
// for JSX we need to use style={{}} - the outer set of {} is because we are telling React that we are using a dynamic value, the inner set is the JavaScript object 
// we then need to add different key value pair in the object
// the KEYS would be color:, backgroundColor:, borderRadius
// the VALUES would be "white", "#f1356d", "8px"
// keep in mind that all of this is being written in JSX and not CSS. so instead of background-color like in CSS we use snailcase in JSX, hence backgroundColor
// ===============================


// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/" >Home</a>
//                 <a href="/create" style={{
//                     color: "white",
//                     backgroundColor: "#f1356d",
//                     borderRadius: "8px"
//                 }}>New Blog</a>
//             </div>
                
//         </nav>
//     );
// }

// export default Navbar;


//! ================================= step 11 (from Index.css)
// since we wont be using any of the inline styling on the create link, we will delete it before moving on to step 12. 
// next we goto Home.js for step 12 which will be creating a button.
// ===============================

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/" >Home</a>
                <a href="/create">New Blog</a>
            </div>
                
        </nav>
    );
}

export default Navbar;