import React, { FC } from 'react';
import Logo from '../../atoms/logo/Logo';
import Menu from '../../molecules/menu/Menu';

const Header: FC = () => {
  return (
    <header className={'header'}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
