import styled, { createGlobalStyle } from 'styled-components';

export interface SectionProps {
	padding?: string;
	margin?: string;
	inverse?: boolean;
	position?: string;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	height?: string;
	minHeight?: string;
	maxHeight?: string;
	smPadding?: string;
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;

export const Section = styled.section<SectionProps>`
	padding: ${(props) => (props.padding ? props.padding : '140px 0')};
	margin: ${(props) => (props.margin ? props.margin : '')};
	background: ${(props) => (props.inverse ? 'white' : '#071c2f')};
	position: ${(props) => (props.position ? props.position : '')};
	width: ${(props) => (props.width ? props.width : 'auto')};
	min-width: ${(props) => (props.minWidth ? props.minWidth : 'auto')};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};
	max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'auto')};
	min-height: ${(props) => (props.minHeight ? props.minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${(props) => (props.smPadding ? props.smPadding : '70px 0')};
	}
`;

export default GlobalStyle;
