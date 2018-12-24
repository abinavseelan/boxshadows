import Styled from 'styled-components';

import { SPACING } from 'Src/styles/theme';

export const Container = Styled.div`
  min-width: 1200px;
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 ${SPACING.default};

  a {
    color: inherit;
    text-decoration: none;
  }
`;
