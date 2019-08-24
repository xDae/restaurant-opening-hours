import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { closed } from '../ui/colors';

const IconClock = styled.i.attrs({
  className: 'icon-clock'
})<SpaceProps>`
  ${space}
  color: ${closed};
  font-size: 22px;
`;

export default IconClock;
