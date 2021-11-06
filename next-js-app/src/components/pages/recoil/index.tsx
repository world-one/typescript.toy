import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from '../../molecules/character-counter/CharacterCouter';
import TextInput from '../../molecules/text-input/TextInput';

const Recoil: FC = () => {
  return (
    <RecoilRoot>
      <div style={{ margin: 30 }}>
        <TextInput />
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default Recoil;