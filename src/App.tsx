import React from 'react';
import { createGlobalStyle } from 'styled-components';

import globalStyles from './ui/globalStyles';

import { openingHours } from './openingHours';

// components
import Flex from './ui/Flex';

import OpeningHoursTable from './components/OpeningHoursTable';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

const App: React.FC = () => {
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <OpeningHoursTable days={openingHours} label="Opening hours" />

      <GlobalStyle />
    </Flex>
  );
};

export default App;
