import React from 'react';
import { Copied, PreviewBox } from './styles';
import Svg from '../Svg';
import { IPreviewProps, IPreviewState } from './types';

export default class Preview extends React.PureComponent<IPreviewProps, IPreviewState> {
  public static defaultProps: Partial<IPreviewProps> = {
    editable: false,
  };

  constructor(props: IPreviewProps) {
    super(props);

    this.state = {
      copied: false,
    };
  }

  public onCopy = () => {
    const { onCopy: onCopyCallback } = this.props;
    this.setState((state) => {
      if (!state.copied) {
        return { ...state, copied: true };
      }
      return state;
    }, () => {
      if (this.state.copied) {
        if (typeof onCopyCallback === 'function') {
          onCopyCallback();
        }
        setTimeout(() => {
          this.setState({ copied: false });
        }, 1000);
      }
    });
  }

  public render() {
    const { editable, ...styleProps } = this.props;
    const { copied } = this.state;

    return (
      <PreviewBox
        {...styleProps}
      >
        <Copied
          copied={copied}
        >
          Hot damn! 🔥
        </Copied>
        <div className='controls'>
          <span className='copy' onClick={this.onCopy}>
            Copy CSS
          </span>
            {editable
              ? (<span className='edit'>Tweak</span>)
              : null
            }
        </div>
      </PreviewBox>
    );
  }
}
