import React, {Component} from 'react';

class Table extends Component {
    render() {
        return(
            <table border="1">

                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Job</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Yanis</td>
                        <td>Dev</td>
                        <td>test@gmail.com</td>
                    </tr>

                    <tr>
                        <td>Lorem</td>
                        <td>Designer</td>
                        <td>lorem@orange.fr</td>
                    </tr>

                    <tr>
                        <td>Ipsum</td>
                        <td>DevOps</td>
                        <td>ipsum@free.fr</td>
                    </tr>
                </tbody>

            </table>
        )
    }
}

export default Table