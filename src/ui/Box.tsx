import styled from 'styled-components';
import { rgba } from 'polished';
import { space, SpaceProps, width, WidthProps } from 'styled-system';

import { box as boxBackground, border } from './colors';

const Box = styled.div<SpaceProps & WidthProps>`
  ${space}
  ${width}
  background: ${boxBackground};
  border: 1px solid ${border};
  border-radius: 10px;
  box-shadow: ${`0px 0px 4px 2px ${rgba(border, 0.04)}`};
`;

export default Box;
