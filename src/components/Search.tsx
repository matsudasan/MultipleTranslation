import React, { useState } from 'react';
import styled from 'styled-components';
import { Language } from '../App'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Container = styled.div`
  text-align:center;
  width:400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
      width:100%;
  }
}
`

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 150,
        },
        textFiled: {
            marginTop: theme.spacing(2),
            width:400,
            [theme.breakpoints.down('xs')]: {
                width:250
            }
        },
        button:{
            marginTop: theme.spacing(2),
            width:100
        }
    })
);

type Props = {
    languages: Language[],
    Translation:(text:string)=>void,
    setLang:(lang:string)=>void
}

const Search: React.FC<Props> = ({ languages,Translation,setLang}) => {
    const classes = useStyles();
    const [select, setSelect] = useState<string>('')
    const [text,setText]=useState<string>('')

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>): void => {
        setSelect(e.target.value as string)
        setLang(e.target.value as string)
    }
    return (
        <Container>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">翻訳する言語</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    onChange={handleChange}
                >
                    {languages.map(ele => {
                        return <MenuItem value={ele.code} key={ele.language}>{ele.language}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <TextField
        　　　　 className={classes.textFiled}
                id="outlined-multiline-static"
                label="翻訳する文章を入力"
                multiline
                rows={5}
                variant="outlined"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={()=>Translation(text)}
            >翻訳する</Button>
        </Container>
    )
}

export default Search