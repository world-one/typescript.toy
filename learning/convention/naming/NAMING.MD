

1. 너무 길지 않고
2. 자연스럽고 일반적이며
3. 어떤 의미인지 설명되어야 한다.

- 줄여쓰지 말라.
```
const el = 'el'
const element = 'element'
```
- 문맥 중복을 피하라.
```
  const result = returnValue;
  result.result
  GetNames.getNamesClick();
  GetNames.click();
```
- 기대되는 값을 반영하라.
```
  <Components empty={isEmpty(v)} />
```

### Boolean Naming
- is
  - is + 명사 : ~ 인가?
  - is + 현재진행형(ing) : ~ 하는 중인가?
  - is + 형용사
    - 단어 자체가 형용사 - opaque, readable, visible
    - 과거분사 - hidden, selected, highlighted, completed
    - 동사원형을 쓰는 것은 의미가 불명확하니 피하도록 하자
- 조동사
  - 조동사 + 동사원형
  - can : ~ 할 수 있는가? 
  - should, will : ~ 해야 하는가, 할 것인가?
- has 
  - has + 명사 : ~ 를 가지고 있는가?
  - has + 과거분사 : ~ 가 유지되고 있는가? (과거에 완료된 것이 현재까지)
- 동사원형
  - 3인칭 단수로 써야 한다. -s, -es
  - supports: ~을 지원하는가?
  - includes: ~을 포함하는가?
  - shows: ~을 보여줄 것인가?
  - allows: ~을 허용할 것인가?
  - accepts: ~을 받아 주는가?
  - contains: ~을 포함하고 있는가?
  - returns, preserves

https://soojin.ro/blog/naming-boolean-variables