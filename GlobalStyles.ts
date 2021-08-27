import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  :root {
    --main-color: #00cca5;
    --main-color-bold: #0dae90;
    --input-color: #333;
    --placeholder: #a1a1a1;
    --primary: #51abf3;
    --secondary: #33b893;
    --warning: #ffbf00;
    --error: #fa5b4a;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Helvetica Neue",
      "Apple SD Gothic Neo",
      "Malgun Gothic",
      "맑은 고딕",
      나눔고딕,
      "Nanum Gothic",
      "Noto Sans KR",
      "Noto Sans CJK KR",
      arial,
      돋움,
      Dotum,
      Tahoma,
      Geneva,
      sans-serif;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border-radius: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: unset;
    cursor: pointer;
    font-size: 1em;
    color: #333;
  }
`;

export default GlobalStyles;
