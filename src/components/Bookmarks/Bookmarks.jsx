import React, { Component } from 'react'
import './Bookmarks.css'
export default class Bookmarks extends Component {

    render() {

        return (
            <div className="bookmarks card-header">
                <h3>Bookmarks</h3>
                <hr />
                <div className="card-body">
                    {this.props.favs.map((fav) => <div className="content card-text"><p>{fav.venue}</p><p>{fav.city}</p><img src={require('../../Images/bookmark.svg')} alt="Home" width="40" height="20" onClick={() => this.props.deleteBookmarks(fav)} /></div>)}
                </div></div>
        )
    }
}