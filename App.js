import React from "react";
import ReactDOM from "react-dom/client"

// using cdn link i.e injected react to develop basic hello world react app
// const heading = React.createElement('h1',{},"Hello beta ok beta ab hoga react😜 app create"); //it is just a js object

//       const heading2 = React.createElement('h2',{ id: "h2HaiJi", class:"h2_hove_se"},"Hello beta ab chote pack mai => h2 now attributes but css nai size badal diya");
//       //how we know just print it 
//       //console.log(heading) and we get a simple object in console of browser  and  '' => tag name we wanna create, {} => props and in props we can pass attribute i.e class id or the like  and "" is the children
      
//       const div1 = React.createElement('div',{id :'parent'},[heading, heading2] );
//       const div2 = React.createElement('div',{id :'parent'},[heading, heading2] );
//       const divGrandparent = React.createElement('div',{id :'Grandparent'},[div1,div2] );

//       //array of children dena hai so we wrap into an array 
//       //doing so react throws err in console key missing which we will uncover
const EleJsk = () =>{
return <h1 id = 'firstele'>
      heloo jsk built element =then the code taken by babel convert to react.create i.e js object which then converted to html element 
</h1> 
 } 
const Ele2 = () =>(
       <h1 id = "second">
      2nd bro 
</h1> )

const jscodeforJSk = 100;
const Ele3 = () => (
   <div>
         <Ele2/>
         {Ele2}
         {jscodeforJSk}
         <Ele2></Ele2>
         <EleJsk/>
         <hr/>
      <h1 id="third">
            3rd hai bhai 
            Op note: React element should start with capital letter <br/>
            Op note: but injected js inside react element should be wrapped in curly <br/> bracket {} and if variable added then that may not be capital 
      </h1>
   </div>
);
//component which return should have 1 parent so ek div mai sab dalke return karna is a tip to rememberk
// note ele2 and ele3 is same jsut syntax for compnent is 1 with return statement other without but usme bhi return hoga 
//react component 
//class based component - old way 
//funtional based component - new way 
// Reactfunctionalcomponent is a js function which returns jsx react element component
// function which returns jsx is react component also functional component variable starts with capital letter 

 const root = ReactDOM.createRoot(document.getElementById("root"))
      root.render(<Ele3/>)
      // root.render(ele3) when u render element 
      // root.render(<ele3/>) when u render component 
      // order of file being injected matters i.e cdn inject kiye bina use karoge react code toh nahi chalega 
      // cross orgin cdn bhi dekhlo   
