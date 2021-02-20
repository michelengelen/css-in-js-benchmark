'use strict'

import React from 'react';
import {getRandomInt} from '../../../utils/helpers';

import './styles.table.scss';

const dummyData = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consetetur',
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consetetur',
];

const rows = new Array(500).fill('row');

const TableExample = () => {
    return (
        <table className={'tableExample'}>
            <thead>
            {dummyData.map((data, index) => <th key={data + index}>{data}</th>)}
            </thead>
            <tbody>
            {rows.map((row, a) => {
                return (
                    <tr key={a}>
                        {dummyData.map((data, b) => {
                            return <td className={classes.td} key={a + data + b}>{getRandomInt(0, 1000)}</td>
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default TableExample
