import Styled from 'styled-components';

export const Container = Styled.div`
  svg {
    ${(props: { height?: string; width?: string, color?: string }) => `
        height: ${props.height};
        width: ${props.width};
        fill: ${props.color || '#000'};
    `}
  }

  display: ${(props: { inline: boolean }) => `${props.inline ? 'inline-flex' : 'flex'}`};
  align-items: center;
  justify-content: center;
`;
