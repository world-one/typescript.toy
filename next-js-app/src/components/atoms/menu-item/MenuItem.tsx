import React, { FC } from 'react';

const MenuItem: FC = () => {
  return (
  <>
    {
      menus.map((item) => {
        return <li key={item.title}><a href="#">{item.title}</a></li>
      })
    }
  </>
  )
}

export default MenuItem;

const menus: {
  title: string;
  url: string;
}[] = [
  { 
    title: 'home',
    url: '',
  },
  { 
    title: 'about',
    url: '',
  },
  { 
    title: 'contact',
    url: '',
  }
]