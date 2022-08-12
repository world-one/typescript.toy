import { FC } from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../pages/recoil/store/states";

const CharacterCounter: FC = () => {
  const count = useRecoilValue<number>(charCountState);
  return <div>{count}</div>
}

export default CharacterCounter;