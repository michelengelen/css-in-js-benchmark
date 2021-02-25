import React from 'react'
import styled from '@emotion/styled'

import { getRandomInt } from '../../../utils/helpers'

const Table = styled.table`
    border-spacing: 0;
    margin: 20px auto;
    width: 75%;
`

const Th = styled.th`
    font-family: Montserrat-Medium, Arial, sans-serif;
    font-size: 12px;
    color: #ffffff;
    line-height: 1.4;
    text-align: center;
    text-transform: uppercase;
    background-color: #36304a;
    padding: 24px 10px 20px 42px;
    border-bottom: 4px solid #ffffff;
`

const Td = styled.td`
    font-family: Montserrat-Medium, Arial, sans-serif;
    font-size: 14px;
    color: #808080;
    line-height: 1.4;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 18px 10px 14px 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

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

const TableExample = () => (
    <Table>
        <thead>
            {dummyData.map((data, index) => (
                <Th key={data + index}>{data}</Th>
            ))}
        </thead>
        <tbody>
            {rows.map((row, a) => {
                return (
                    <tr key={a}>
                        {dummyData.map((data, b) => {
                            return <Td key={a + data + b}>{getRandomInt(0, 1000)}</Td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </Table>
)

export default TableExample
