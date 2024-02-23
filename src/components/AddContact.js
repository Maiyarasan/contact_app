import React from 'react';
class  AddContact extends React.Component {
  state = {
    name:"",
    email:"",
    number:""
  }
 
   add=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email==="" || this.state.number===""){
      alert("Allthe fields are mandatory!")
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({name:"", email:"", number:""})
    console.log(this.state)
    }
    render(){
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Add Contact</h2>
      <form onSubmit={this.add}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            
            type="text" 
            name="email" 
            placeholder="Email" 
            value={this.state.email}
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Mobile Number
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            
            type="text" 
            name="mobile number" 
            placeholder="Mobile Number" 
            value={this.state.number}
            onChange={(e)=>this.setState({number:e.target.value})}
          />
          
        </div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
    }
};

export default AddContact;
