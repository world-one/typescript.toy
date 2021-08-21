import React, { FC, useState } from 'react';

const Regex: FC = () => {
  const [machingWords, setMachingWords] = useState<RegExpMatchArray>([]);
  const [pattern, setPattern] = useState<string>('see (chapter \d+(\.\d)*)');

  const str = 'For more information, see Chapter 3.4.5.1'; 
  function findMatchingWords() {
    const regexPattern = new RegExp(pattern, 'g');
    const match: RegExpMatchArray | null = str.match(regexPattern);
    console.log(match);
    if (!match) return;
    setMachingWords(match);
  }

  return (
    <>
    <div style={{ padding: 24, }}>
      <p>{str}</p>
      <ul>
        {machingWords.map((item, index) => <li key={index}>{item}</li>)}  
      </ul>
      <input value={`${pattern}`} onChange={(e) => setPattern(e.target.value)} />
      <button onClick={() => {void findMatchingWords()}}>찾기</button>
    </div>
    </>
  );
}

export default Regex;