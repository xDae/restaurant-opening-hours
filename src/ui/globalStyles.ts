import { css } from 'styled-components';

import { background, bookFont, bodyDark } from './colors';

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${background};
    font-family: ${bookFont};
    color: ${bodyDark};
  }
`;

export default globalStyles;
