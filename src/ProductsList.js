import React, { Component } from 'react'
import { Table } from 'reactstrap'


export default class ProductsList extends Component {
    state = {
        _Products: []
    }
    componentDidMount = () => {
        this.getProducts();

    }
    getProducts = () => {
        fetch("http://localhost:3000/products").then(s => s.json()).then(data => this.setState({ _Products: data }))
    }
    render() {
        return (
            <div>
                <h3>Ürün Listesi</h3>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>categoryId</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state._Products.filter(p => this.props.selectedCategoryID === p.categoryId).map(p =>
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.categoryId}</td>
                                <td>{p.productName}</td>
                                <td>{p.quantityPerUnit}</td>
                                <td>{p.unitPrice}</td>
                                <td>{p.unitsInStock}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>




            </div>
        )
    }
}