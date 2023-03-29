import React from 'react';
import HeaderBottom from './components/header-bottom/HeaderBottom';
import HeaderTop from './components/header-top/HeaderTop';
import styles from './header.module.scss';

const HeaderComponent = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
    </>

  )
}

export default HeaderComponent