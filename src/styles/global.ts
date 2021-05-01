import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;300;600&family=Ubuntu:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Overpass', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
