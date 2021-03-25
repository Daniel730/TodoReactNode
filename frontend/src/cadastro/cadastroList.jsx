import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(cadastro => (
            <tr key={cadastro._id}>
                <td>
                    {cadastro.nome}
                </td>
                <td>
                    {cadastro.data}
                </td>
                <td>
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={() => props.handleRemove(cadastro)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}