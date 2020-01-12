import React,{Component} from 'react'

class Task extends Component {
    state = {
         info:{
             title:"",
             date: '',
             complaite:false 
         }                                                                                
    }

    handleChange =(event)=>{
         //anychange on input will apppear here 
   
   const userInput = event.target.value
   const inputName = event.target.name//return stirng , so we used 
   const infoCopy ={...this.state.info}
   infoCopy[inputName]=userInput //[]cuz we retrun string 
//   //set the state with update formdataCopy
  this.setState({
    info: infoCopy
  })
//console.log (this.state.info)
     }


    handleSubmit = (event) =>{
        // console.log(this.state.info)
        event.preventDefault()
//         console.log(event.target.value)
    const userInput = event.target.value
//      console.log(event.target.name)
    const inputName = event.target.name//return stirng , so we used 
   const infoCopy ={...this.state.info}
   infoCopy[inputName]=userInput //[]cuz we retrun string 
//   //set the state with update formdataCopy
  this.setState({
    info: infoCopy
  })
         console.log(this.state.info)
       
  this.setState({ 
    info:{
        title:"",
        date: '',
        complaite:false 
          } 
          })
    }


    render() { 
        return ( 
            <div className="Task">
                <div>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-example">
             <input type="checkbox" id="checkbox" name="complaite" value={this.state.info.complaite}onChange={this.handleChange}
                        />
              <input type="text" name="title" id="title" required value={this.state.info.title} onChange={this.handleChange}/>
                        
                            <input type="date" name="date" 
                            value={this.state.info.date} 
                            id="date" required 
                            onChange={this.handleChange}/>
                  </div>
                      
                        </form>
                 </div>


            </div>
         );
    }
}
 
export default Task;