import React from 'react'
import { useStyles } from 'react-treat'

import * as stylesRef from './TableComponent.treat.js'
import { getRandomInt } from '../../../utils/helpers'

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
]

const rows = new Array(500).fill('row')

const TableExample = () => {
    const styles = useStyles(stylesRef)
    return (
        <table className={styles.table}>
            <thead>
                {dummyData.map((data, index) => (
                    <th className={styles.th} key={data + index}>
                        {data}
                    </th>
                ))}
            </thead>
            <tbody>
                {rows.map((row, a) => {
                    return (
                        <tr key={a}>
                            {dummyData.map((data, b) => {
                                return (
                                    <td className={styles.td} key={a + data + b}>
                                        {getRandomInt(0, 1000)}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableExample
