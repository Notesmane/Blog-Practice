

//! ================================= step 7 (continued from App.js)
// first we create our boilerplate function of Home and give it a div with a class of "home"
// we'll also give it a hard coded title of Home Page in an h1
/// then we need to go back to the App.js file to import Home.js
// ================================


// const Home = () => {
//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 12 (continued from Home.js)
// so first we start off with adding a button inside of the Home component underneath the h2, we'll call it Click Me
// then we need to create a function that will handle the clicking of this button, we'll call it handleClick
// we can then create a console log inside of the function to make sure that our button is working once it is ready
// ================================


// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello World!")
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button>Click Me</button>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 13
// we need to transform our button so that it takes in that function instead of having a hard code
// so we delete the click me hardcode and add in our handleClick function
// we dont want to invoke the handleClick function automatically without the user even clicking on it, then it wouldnt be a button, so we dont want to use parenthesis like so { handleClick() }
// instead we want to just set a reference there so when the user clicks on the button, the function will then be invoked
// ================================


// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello World!")
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={ handleClick }>Click Me</button>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 14
// now what if we wanted to pass an argument into the function? like if we wanted to pass in the name 'yoshi'
// normally you would write ---- <button onClick={ handleClick('yoshi') }>Click Me</button>
// but remember we cant use the parenthesis because so we need to do it another way
// instead we need to wrap it inside of an anonymous function
// lets create another button to showcase this
// then we will create the function for it in handleClickAgain, but on this one we will add in a parameter (name) and then add in a console.log and concatination string
// this will give us an error message as we are not finished, the button needs to be tweaked still
// ================================


// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello World!")
//     }

//     const handleClickAgain = (name) => {
//         console.log("Hello" + name);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={ handleClick }>Click Me</button>
//             <button onClick={ handleClickAgain }>Click Me Again</button>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 15
// we still need to pass in that argument but we cant do it with { handleClickAgain() } because it will invoke that function automatically. This is were the anonymous function comes into play
// first we pass in the arugment lets call the name "mario" 
// so we add that in, { handleClickAgain("Mario") }, then we cut it
// then we put in an arrow function instead - () => {}
// we can then console.log a message inside of the anonymous function to make sure its working
// this will now only be invoked when the button is clicked
// ================================


// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello World!")
//     }

//     const handleClickAgain = (name) => {
//         console.log("Hello " + name);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={ handleClick }>Click Me</button>
//             <button onClick={ () => {
//                 console.log("Hello")
//             }}>Click Me Again</button>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 16
// once we see its working, we can delete the log, and replace it with our original function that we want invoked { handleClickAgain("Mario") }
// we can also delete spaces so that its all on one line, and ge rid of the inner most curly braces since its all on one line now
// ================================


// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello World!")
//     }

//     const handleClickAgain = (name) => {
//         console.log("Hello " + name);
//     }

//     return (
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={ handleClick }>Click Me</button>
//             <button onClick={ () => handleClickAgain("Mario") }>Click Me Again</button>
//         </div>
//     );
// }

// export default Home;


//! ================================= step 17
// we can also look at the event parameter that we automatically get access to inside of the event functions when the event occurs
// if we add in the e to the original handleClick function and then also add an e into the log then we can check out the extras it gives us in the console.log
// if we want to grab one of the specific extra we can add it and then call that target directly. we will do this in the handleClickAgain function
// thats how we can react to click events on our components
// ================================

const Home = () => {

    const handleClick = (e) => {
        console.log("Hello World!", e)
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={ handleClick }>Click Me</button>
            <button onClick={ (e) => handleClickAgain("Mario", e) }>Click Me Again</button>
        </div>
    );
}

export default Home;