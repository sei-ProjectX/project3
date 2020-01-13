import React , {Component} from "react";

import axois from 'axois'

export default class API extends Component{
    state = {

    }
    
    componentDidMount() {
        axois.get("https://robby.p.rapidapi.com/search.json?country=US&lng=-74.00597&city=New%20York&lat=40.71435&to=2016-08-01T20%253A30%253A00%252B08%253A00&limit=30&distance=10&from=2016-06-30T20%253A30%253A00")
        .then( resp => {
            console.log(resp.)
        })
        .catch(err => {
            console.log("Error");
            
        })

.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
    }

    render(){

        return(

            <div className="">


            </div>
        )
    }
}