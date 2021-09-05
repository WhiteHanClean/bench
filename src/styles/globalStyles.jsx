import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  .menu {
    color:${({ theme }) => theme.text};
  }
  a{
    color:${({ theme }) => theme.text};
  }
  h1, h2, h3, h4, h5, h6{
    color:${({ theme }) => theme.text};
  }
  .section__item__text h1{
    color:${({ theme }) => theme.text};
  }
  .service_main_name{
    color:${({ theme }) => theme.text};
  }
  .service_block{
    background-color:${({ theme }) => theme.block};
  }
  .service_name {
    color:${({ theme }) => theme.text};
  }
  .service_description{
    color:${({ theme }) => theme.text};
  }
  .service_btn{
    color:${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.block};
  }
  .service_img{
    background-color:${({ theme }) => theme.block};
  }
  .section__item_1 h1 {
    color:${({ theme }) => theme.text};
  }
  .section__item_2 p {
    color:${({ theme }) => theme.text};
  }
  .port_intro_name {
    color:${({ theme }) => theme.text};
  }
  .port_name{
    color:${({ theme }) => theme.text};
  }
  .port_description {
    color:${({ theme }) => theme.text};
  }
  .port_btn{
    background:${({ theme }) => theme.block};
    color:${({ theme }) => theme.text};
  }
  .swiper-slide{
    background-color:${({ theme }) => theme.block};
  }
  .port_item {
      border:${({ theme }) => theme.block};
  }
  .footer__social__text p{
    color:${({ theme }) => theme.text};
  }
  li{
    color:${({ theme }) => theme.text};
  }

  .footer__quick h5 {
    color:${({ theme }) => theme.text};
  }
  .footer__services h{
    color:${({ theme }) => theme.text};
  }
  .footer__reachUs h5 {
    color:${({ theme }) => theme.text};
  }
  .footer__message p{
    color:${({ theme }) => theme.text};
  }
  .footer_end_p{
    color:${({ theme }) => theme.text};
  }
  .footer__services h5 {
    color:${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: '#6200ee',
    block: '#F2F2F2'
};


export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: '#bb86fc',
    block: '#232323'
};