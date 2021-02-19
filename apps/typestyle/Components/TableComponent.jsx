'use strict'

import React from 'react'
import {style} from 'typestyle'
import {tableStyles} from '../../testStyles';
import {getRandomInt} from '../../../utils/helpers'

const tableClass = style(tableStyles.table)
const thClass = style(tableStyles.th)
const tdClass = style(tableStyles.td)

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

const TableExample = () => (
    <table className={tableClass}>
        <thead>
        {dummyData.map((data, index) => <th className={thClass} key={data + index}>{data}</th>)}
        </thead>
        <tbody>
        {rows.map((row, a) => {
            return (
                <tr key={a}>
                    {dummyData.map((data, b) => {
                        return <td className={tdClass} key={a + data + b}>{getRandomInt(0, 1000)}</td>
                    })}
                </tr>
            );
        })}
        </tbody>
    </table>
)

export default TableExample
