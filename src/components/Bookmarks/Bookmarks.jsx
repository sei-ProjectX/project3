import React, { Component } from 'react'
import './Bookmarks.css'
export default class Bookmarks  extends Component {

    // deleteBookmarks = (venue) => {
    //     this.props.deleteBookmarks(venue)
    // }
    render() {
       
        return (
            <div className = "bookmarks"> 
            <h3>Bookmarks</h3>
            <hr/>
            
            {this.props.favs.map((fav) => <div className="content"><p>{fav.venue}</p><p>{fav.city}</p><img src={require('../../Images/bookmark.svg')} alt="Home" width="40" height="20" onClick={()=> this.props.deleteBookmarks(fav)}/></div>
                    )}
            </div>



        )
    }
}