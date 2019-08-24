import styled from 'styled-components';
import {
  height,
  HeightProps,
  space,
  SpaceProps,
  alignItems,
  AlignItemsProps,
  alignContent,
  AlignContentProps,
  justifyItems,
  JustifyItemsProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
  flexWrap,
  FlexWrapProps,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  alignSelf,
  AlignSelfProps,
  order,
  OrderProps
} from 'styled-system';

type Props = HeightProps &
  SpaceProps &
  AlignItemsProps &
  AlignContentProps &
  JustifyItemsProps &
  JustifyContentProps &
  JustifySelfProps &
  FlexWrapProps &
  FlexBasisProps &
  FlexDirectionProps &
  AlignSelfProps &
  OrderProps;

const Flex = styled.div<Props>`
  ${height}
  ${space}
  ${alignItems}
  ${alignContent}
  ${justifyItems}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${justifySelf}
  ${alignSelf}
  ${order}

  display: flex;
`;

export default Flex;
