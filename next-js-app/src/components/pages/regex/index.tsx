import React, { FC, useState, useEffect } from 'react';

const Regex: FC = () => {
  const [matched, setMatched] = useState<any>({
    email: null
  });
  
  function findMatchingWords(name: string, value: string, pattern: string): void {
    if (!value) return;
    const regex: RegExp = new RegExp(pattern, 'g');
    const matched = value.match(pattern);
    const isValid: boolean = regex.test(value);
    setMatched((prev: any) => {
      prev[name] = `${matched} [${isValid}]`
      return { ...prev }
    });
  }

  return (
    <div style={{ padding: 24, backgroundColor: '#aaa'}}>
      <ul>
        {
          formItems.map((item, index) => {
            return (
              <li key={index}>
                <span style={{ paddingRight: 20, }}>{item.name}</span>
                <input type="text" onChange={(e) => void findMatchingWords(item.name, e.target.value, item.pattern)}/>
                <p>{matched[item.name]}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Regex;

const TEST_TEXT = {
  DEFAULT: 'For more information, see Chapter 3.4.5.1',
  EMAIL: 'worldone.dev@gmail.com',
}

// abcd@gggg @ 뒤쪽으로 4글자 이상이 오면 일치
const PATTERN = {
  NAME_KO: '[가-힣]+',
  NUMBER: '[0-9]+',
  EMAIL_A: '^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3})$', // abcd@gggg 인 경우 일치..
  //RegExp("pattern") 표기를 쓰면서 \ 자체를 이스케이프 해줘야한다.
  EMAIL_B: '^[a-zA-Z0-9]+@\\w+\\.[a-zA-Z]{2,3}$', 
  EMAIL_C: '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$',
  EMAIL_D: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
}

const formItems = [
  {
    name: 'name_ko',
    pattern: PATTERN.NAME_KO,
  },
  {
    name: 'number',
    pattern: PATTERN.NUMBER,
  },
  {
    name: 'email',
    pattern: PATTERN.EMAIL_B,
  },
]
