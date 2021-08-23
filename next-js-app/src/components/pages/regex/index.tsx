import React, { FC, useState, useEffect } from 'react';

const Regex: FC = () => {
  const [machingWords, setMachingWords] = useState<RegExpMatchArray>([]);
  // const [pattern, setPattern] = useState<string>('see (chapter \d+(\.\d)*)');
  const str = 'For more information, see Chapter 3.4.5.1'; 
  const email = 'worldone.dev@gmail.com';
  const [highlight, setHighlight] = useState<string>(str);
  const [isMatching, setIsMaching] = useState<any>('null');
  
  function findMatchingWords(pattern: string) {
    if (pattern.length === 0) return;
    try {
      const regexPattern = new RegExp(pattern, 'g');  
      console.log(regexPattern);
      const match: RegExpMatchArray | null = email.match(regexPattern);
      console.log(match);
      if (!match) return;
      setMachingWords(match);
    } catch (error) {
      console.log(error);
    }
    
    
    // const highlightText = str.replace(regexPattern, `<mark>${pattern}</mark>`);
    // console.log(highlightText);
    // setHighlight(highlightText);
  }

  // useEffect(() => {
  //   const canvas: any = document.getElementById("canvas");
  //   if (canvas.getContext) {
  //     const ctx = canvas.getContext("2d");

  //     ctx.fillStyle = "rgb(200,0,0)";
  //     ctx.fillRect (110, 10, 50, 50);

  //     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  //     ctx.fillRect (30, 30, 50, 50);
  //   }
  // },[])

  return (
    <>
    <div style={{ padding: 24, backgroundColor: '#aaa'}}>
      <div  style={{ position: 'relative', width: 300, height: 250, border: '1px solid #000'}}>
        {/* <canvas id={'canvas'} width="300" height="250" style={{ position: 'absolute', top: 0 }} /> */}
        <div style={{ position: 'absolute', top: 0, }}>
          <p>{str}</p>
          <p>{email}</p>
          {/* <p dangerouslySetInnerHTML={{ __html: highlight }} /> */}
        </div>
      </div>
      <ul>
        {machingWords.map((item, index) => <li key={index}>{item}</li>)}  
      </ul>
      <input onChange={(e) => void findMatchingWords(e.target.value)} />
      {/* <button onClick={() => {void findMatchingWords()}}>찾기</button> */}
    </div>
    <div>
      <input type="text" onChange={(e) => {
        const value: string = e.target.value;
        const pattern = new RegExp(PATTERN.EMAIL, 'g');
        console.log(pattern);
        const matchingWords = value.match(pattern);
        console.log(machingWords);
        

        setIsMaching(`${matchingWords} [${pattern.test(value)}]`);
      }}/>
      <p>{isMatching}</p>
    </div>
    </>
  );
}

export default Regex;

const PATTERN = {
  EMAIL: '^[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]{2,3})$',
}