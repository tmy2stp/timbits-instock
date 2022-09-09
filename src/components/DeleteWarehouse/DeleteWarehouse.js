import React from 'react'
import DeleteWarehouse from 'DeleteWarehouse.scss'

function DeleteWarehouse() {
    return (

    <div>
    <div className="warehouse__modal--top">
        <h1>Delete (this warehouse)?</h1>
        <p>Please confirm you'd like you delete the from the list of warehouses. You won't be able to undo this action.
        </p>
    </div>
    <div className="warehouse__modal--bottom">
        <button>Cancel</button>
        <button>Delete</button>
    </div>
</div>



    )
}




export default DeleteWarehouse




