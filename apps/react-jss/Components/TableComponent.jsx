'use strict'

import React from 'react'
import {style} from 'typestyle'
import {createUseStyles} from "react-jss";
import {tableStyles} from '../../testStyles';
import {getRandomInt} from '../../../utils/helpers'

const useStyles = createUseStyles(tableStyles)

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
    const classes = useStyles()
    return (
        <table className={classes.table}>
            <thead>
            {dummyData.map((data, index) => <th className={classes.th} key={data + index}>{data}</th>)}
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
