import React from 'react'
import './DeleteModal.scss'
import closeButton from '../../assets/images/close-24px.svg'

function DeleteModal() {
    return (

        <div className="delete">
            <div className="delete__text">
                <img className="delete__close" src={closeButton} alt='closing x'/>
                <h2 className="delete__heading">Delete (this warehouse)?</h2>
                <p className="delete__confirmation">Please confirm you'd like you delete the from the list of warehouses. You won't be able to undo this action.
                </p>


                <div className="delete__buttons">
                    <button className="delete__cancel">Cancel</button>
                    <button className="delete__delete">Delete</button>
                </div>
            </div>
        </div>



    )
}




export default DeleteModal




