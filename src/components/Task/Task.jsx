import React,{Component} from 'react'
// import Card from 'react-bootstrap/card'
// import taskDisplay from '../TasksDisplay/TasksDisplay'

class Task extends Component {
    state = {
         info:{
             title:"",
             date: '',
             isChecked:false ,
             isCompliate:false
         }                                                                                
    }



    handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        this.setState( ({...copyState}) => {
            if (key === "isChecked"){
                copyState.info.isChecked = !copyState.info.isChecked
            }
            else {
                copyState.info[key] = value
            }
            return copyState
        })
    }


    handleSubmit = (event) =>{
        console.log("handleSubmit")
        event.preventDefault()
        const check = !this.state.isChecked
        const formData = this.state.info
        formData.isCompliate = true
        this.setState({
            info: formData
        })
         console.log(this.state.info)
       
  this.setState({ 
    info:{
        title:"",
        date: '',
        isChecked:false 
          } 
          })
    }


    render() { 
        // const taskDisplay = this.state.info.isCompliate ? <TasksDisplay  info={this.state.info}/> : null

        console.log(this.state.info.isChecked)
        return ( 
            <div className="Task">
                {/* <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card> */}
                <div>
               
                <form onSubmit={this.handleSubmit}>
                        <div className="form-example">
                        <input type="checkbox"
              id="isChecked"
              name="isChecked"
               value={this.state.info.isChecked}
               onChange={this.handleChange}
                        />

              <input type="text" name="title"
               id="title" required
                value={this.state.info.title} 
                onChange={this.handleChange}/>
                        
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