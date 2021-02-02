import React, {Component} from 'react';

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Nom</th>
                <th>Job</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

const TableBody = ({data}) => {
    return(
        <tbody>
            {data.map((user,i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.job}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                )
            }
        </tbody>
    )
}

class TableFactorise extends Component{
    render(){
        return(
            <table border="1">
                <TableHeader/>
                <TableBody data={this.props.data}/>
            </table>
        )
    }
}

export default TableFactorise