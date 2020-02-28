import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import '../../styles/Tooltip.css';

export default function Tooltip({ content, light }) {
  return (
    <span
      className={
        light ? 'tooltip__span--content-light' : 'tooltip__span--content'
      }
    >
      <Popup
        content={content}
        on='click'
        position='top center'
        trigger={
          <Icon className='tooltip__icon' name='question circle outline' />
        }
      />
    </span>
  );
}
