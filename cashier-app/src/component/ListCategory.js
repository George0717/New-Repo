import React, { Component } from 'react';
import {Col} from 'react-bootstrap'

class ListCategory extends Component {
    render() {
        return (
            <div>
                 <Col md={3} mt="2">
                <h2>Daftar Kategori</h2>
                <hr/>
            </Col>
            </div>
        );
    }
}

export default ListCategory;
