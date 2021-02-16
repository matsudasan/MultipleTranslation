import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import List from './components/List';
import {AcsessApi} from './api/Api'
import Load from './components/Load'

export type Language = {
  language: string,
  code: string
}

const ReactApp = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const App: React.FC = () => {
  const languages: Language[] = [
    { language: "日本語", code: "ja" },
    { language: "英語", code: "en" },
    { language: "イタリア語", code: "it" },
    { language: "フランス語", code: "fr" },
    { language: "アイスランド語", code: "is" },
    { language: "アラビア語", code: "ar" },
    { language: "インドネシア語", code: "id" },
    { language: "エストニア語", code: "et" }
  ]

  const [show, setShow] = useState<boolean>(false)
  const [lang,setLang]=useState<string>('')
  const [result,setResult]=useState()
  const [load,setLoad]=useState(false)

  const Translation = async(text: string) => {
    setLoad(true)
    const result=await AcsessApi(Filter(),lang,text)
    setResult(result)
    setShow(true)
    setLoad(false)
  }

  const Filter=()=>{
    return languages.filter(ele=>ele.code!==lang)
  }

  return (
    <ReactApp>
      <Search languages={languages} Translation={Translation} setLang={setLang}/>
      {show ? <List languages={Filter()} result={result}/> : ''}
      {load ? <Load/> : ''}
    </ReactApp>
  )
}

export default App;
