// import React from 'react';
// import ReactDOM from 'react-dom';
// import Flexbox from 'flexbox';
//
//
//
// function App(){
//   return (
//   <div className = "app-container">
//    <h1>April Christine Trull</h1>
//    <h2>My Portfolio</h2>
//     <Portfolio name = "About Me" text="I live in Stevensville Montana.  I am a beginner Computer Programmer.  I started learning computer programming at the Montana Code School in Missoula Montana, March of 2017. I was part of the Part Time class. I have really enjoyed learning about coding, however, it has been a totally new experiance for me to learn in such a new way.  We were taught to think for ourselves and figure out problems on our own, doing a lot of research on Google.
//     We were also taught at an incredibly fast pace.  Most of what we were taught will need to be relearned but the learning will come faster this time since we already have a bit of a start.  I really enjoyed web design and front end work but have a desire to learn more of back end programming.  I have learned some Javascript, mySQL, HTML, CSS, REACT, Node.js, working in the terminal and GITHUB.  The other things I learned about but dont feel confident in until I have more experience is: MongoDB and APIs. I currently have the goals of learning PHP, C++, Python, RUBY and SASS."/>
//
//         <h2>View My Work</h2>
//         <TKD name = "Saja Academy of Martial Arts" website="http//"/>
//         <MtWomensWellnessResource name = "Mt Womens Wellness Resource" website= "http//"/>
//
//    </div>
//  );
// }
//
//
//
// function Portfolio(props){
//  return (
//    <div className = "About Me">
//     <h3>{props.name}</h3>
//      <p>{props.text}</p>
//     </div>
//  );
// }
//
//
//
// var buttonStyle = {
//  margin: '10px 10px 10px 0'
// };
//
// var Button = React.createClass({
//  render: function () {
//    return (
//      <button
//        className="btn btn-default"
//        style={buttonStyle}
//        onClick={this.props.handleClick}>{this.props.label}</button>
//    );
//  }
// });
//
// //module.exports = Button;
//
//
// function MtWomensWellnessResource(props){
// return (
//   <div className = "Mt Womens Wellness Resource">
//   <ul>
//     <li>
//       <h3>{props.name}</h3>
//       <p>{props.website}</p>
//     </li>
//   </ul>
//   </div>
// );
// }
//
//
// function TKD (props){
//  return (
//    <div className = "Saja Academy of Martial Arts">
//    <ul>
//     <li>
//      <h3>{props.name}</h3>
//      <p>{props.website}</p>
//     </li>
//     </ul>
//   </div>
// );
// }
//
//
//
//
// var element = <App />;
//
// ReactDOM.render(
//   element,
// document.getElementById("app-container")
// );
