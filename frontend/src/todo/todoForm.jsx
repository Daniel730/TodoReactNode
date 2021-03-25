import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey
                ? props.handleSearch()
                : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    value={props.description}
                    onKeyUp={keyHandler}
                ></input>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
                <IconButton style='success' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='danger' icon='close'
                    onClick={props.handleClear}></IconButton>
            </div>
        </div>
    )
}