import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../pages/recoil/store/states';

const TextInput: FC = () => {
  const [text, setText] = useRecoilState<string>(textState);

  function onChange(e: any): void {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      input text : {text}
    </div>
  );
};

export default TextInput;
