import { FC, useEffect } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
// import styled from 'styled-components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Toast: FC = () => {
  console.log(toastStore.isShow);
  useEffect(() => {
    console.log('aa');
  }, [toastStore.isShow]);
  if (!toastStore.isShow) return <></>;
  return (
    <>
      {toastStore.message.map((msg, index) => {
        return (
          <StyledToast index={index + 1} key={msg}>
            {msg}
          </StyledToast>
        );
      })}
    </>
  );
};

export default observer(Toast);

const keyFrames = css`
  @keyframes show {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    20% {
      transform: translateY(0);
      opacity: 1;
    }
    80% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(25%);
      opacity: 0;
      display: none;
    }
  }
`;

const StyledToast = styled.div<{ index: number }>`
  //z-index: 1000;
  position: fixed;
  bottom: calc(8rem * ${({ index }) => index});
  left: 50%;
  transform: rotateX(-50%);
  font-size: 1.4rem;
  line-height: 1.7rem;
  padding: 2.7rem 3rem 2.6rem;
  color: #000;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 1.4rem;
  animation: show 1.5s forwards;
  ${keyFrames}
`;

class ToastStore {
  isShow = false;
  message: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  showToast(msg: string) {
    const len = this.message.length;
    if (len > 2) return;
    this.message.unshift(msg);
    this.remove();
    this.isShow = true;
  }

  remove() {
    setTimeout(() => {
      this.message.pop();
    }, 2000);
  }
}

export const toastStore = new ToastStore();
