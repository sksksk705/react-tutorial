import React, { Component } from 'react'

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props
        return (
            <table>
            <TableHeader />
            <TableBody charaterData = {characterData} removeCharacter = {removeCharacter}/>
          </table>
        )
      }
  
}

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    console.log(props);
    const rows = props.charaterData && props.charaterData.map((row,index)=> {
        return <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
      </tr>
    }) 
    return <tbody>{rows}</tbody>

    
}
  
export default Table