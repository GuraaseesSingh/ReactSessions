// using cdn link i.e injected react to develop basic hello world react app

      const heading = React.createElement('h1',{},"Hello beta ok beta ab hoga react app create"); //it is just a js object

      const heading2 = React.createElement('h2',{ id: "h2HaiJi", class:"h2_hove_se"},"Hello beta ab chote pack mai => h2 now attributes but css nai size badal diya");
      //how we know just print it 
      //console.log(heading) and we get a simple object in console of browser  and  '' => tag name we wanna create, {} => props and in props we can pass attribute i.e class id or the like  and "" is the children
      
      const div1 = React.createElement('div',{id :'parent'},[heading, heading2] );
      const div2 = React.createElement('div',{id :'parent'},[heading, heading2] );
      const divGrandparent = React.createElement('div',{id :'Grandparent'},[div1,div2] );

      //array of children dena hai so we wrap into an array 
      //doing so react throws err in console key missing which we will uncover
      const root = ReactDOM.createRoot(document.getElementById('root'))
      root.render(divGrandparent)
      // order of file being injected matters i.e cdn inject kiye bina use karoge react code toh nahi chalega 
      // cross orgin cdn bhi dekhlo   
     