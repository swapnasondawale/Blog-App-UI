import React from 'react';
import './HomeCard.css'
/**
 * This Component used for display Post in Cards
 * @param {*} props 
 * @returns Title of Posts 
 */
function HomeCard(props) {
    return (
        <div className="row mt-3">
            <div className="col-12 mb-12">
                <div className="postCardStyle card" onClick={()=>props.handleClick(props.postId)}>
                    <h4 className="card-header" >{props.title}</h4>
                </div>
            </div>
        </div>
    )
}
export default HomeCard;
