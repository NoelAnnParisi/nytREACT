import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Results', dataIndex: 'article', key: 'name' }, 
    { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="#">Save</a> }
];

const data = [
    { key: 1, article: 'Trump gets impeached', description: 'The day we have all been waiting for!' }
];

export default class Results extends React.Component {
    render() {
        return ( 
          <Table columns = { columns }
            expandedRowRender = {record => <p> { record.description } </p>}
            dataSource = { data } />
            );
    }
}
