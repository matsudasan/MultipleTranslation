import React, { useState } from 'react';
import { Language } from '../App'
import styled from 'styled-components';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import volume from '../img/volume.svg'


type Props = {
    languages: Language[],
    result: any
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize:20
        },
        body: {
            fontSize: 15,

        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);



const useStyles = makeStyles({
    table: {
        maxWidth: 700,
        marginTop:20
    },
    row:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        cursor:'pointer'
    }
});

const List: React.FC<Props> = ({ languages, result }) => {
    const classes = useStyles();

    return (
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">言語</StyledTableCell>
                        <StyledTableCell align="center">翻訳</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {languages.map(ele=>{
                        return(
                            <StyledTableRow key={ele.code}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {ele.language}
                                </StyledTableCell>
                                <StyledTableCell className={classes.row}>
                                    {result[ele.code]}
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
    )
}

export default List