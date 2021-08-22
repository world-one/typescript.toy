import React, { FC, useState, useEffect } from 'react';

const Regex: FC = () => {
  const [machingWords, setMachingWords] = useState<RegExpMatchArray>([]);
  // const [pattern, setPattern] = useState<string>('see (chapter \d+(\.\d)*)');
  const str = 'For more information, see Chapter 3.4.5.1'; 
  const [highlight, setHighlight] = useState<string>(str);

  function findMatchingWords(pattern: string) {
    const regexPattern = new RegExp(pattern, 'g');
    console.log(regexPattern);
    const match: RegExpMatchArray | null = str.match(regexPattern);
    console.log(match);
    if (!match) return;
    setMachingWords(match);
    const highlightText = str.replace(regexPattern, `<mark>${pattern}</mark>`);
    console.log(highlightText);
    setHighlight(highlightText);
  }

  useEffect(() => {
    const canvas: any = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (110, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 50, 50);
    }
  },[])

  return (
    <>
    <div style={{ padding: 24, backgroundColor: '#aaa'}}>
      <div  style={{ position: 'relative', width: 300, height: 250, border: '1px solid #000'}}>
        <canvas id={'canvas'} width="300" height="250" style={{ position: 'absolute', top: 0 }} />
        <div style={{ position: 'absolute', top: 0, }}>
          <p>{str}</p>
          <p dangerouslySetInnerHTML={{ __html: highlight }} />
        </div>
      </div>
      {/* <ul>
        {machingWords.map((item, index) => <li key={index}>{item}</li>)}  
      </ul> */}
      <input onChange={(e) => void findMatchingWords(e.target.value)} />
      {/* <button onClick={() => {void findMatchingWords()}}>찾기</button> */}
    </div>
    </>
  );
}

export default Regex;