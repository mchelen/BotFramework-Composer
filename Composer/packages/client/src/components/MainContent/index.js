/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { PropTypes } from 'prop-types';

import { contentContainer } from './styles';

export const MainContent = props => <div css={contentContainer}>{props.children}</div>;

MainContent.propTypes = {
  children: PropTypes.element,
};