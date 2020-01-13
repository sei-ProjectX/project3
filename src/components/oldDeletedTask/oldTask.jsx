import React,{Component} from 'react'
import TasksDisplay from '../TasksDisplay/TasksDisplay'
class OldTask extends Component {
    state = {
         info:{
             title:"",
             date: '',
             complete:false,
             isComplete:false,
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
        event.preventDefault()

   const infoCopy ={...this.state.info}
    infoCopy.isComplete = true
  this.setState({
    info: infoCopy
  })
         console.log(this.state.info)
this.props.TaskDisplay()
  this.setState({ 
    info:{
        title:"",
        date:"",
        complete:false,
    }
        
          } 
         ) }
    

   
    render() { 
        const taskDisplay = this.state.info.isComplete ? <TasksDisplay  title={this.state.info.title}/> : null
        console.log(this.state.info)
        return ( 
            <div className="Task">
                <div>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-example">
             <input type="checkbox" id="checkbox" name="complete" value={this.state.info.complete}onChange={this.handleChange}
                        />
              <input type="text" name="title" id="title" required value={this.state.info.title} onChange={this.handleChange}/>
                        
                            <input type="date" name="date" 
                            value={this.state.info.date} 
                            id="date" required 
                            onChange={this.handleChange}/>
                  </div>
                      
                        </form>
                 </div>
                {taskDisplay}
            </div>
         );
    }
}
 
export default OldTask;