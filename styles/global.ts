import { createGlobalStyle } from 'styled-components';
import bgimg from '../assets/bgi.jpg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: no-repeat;
    background-image: url(${bgimg});
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

`;
