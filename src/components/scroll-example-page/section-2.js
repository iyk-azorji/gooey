import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';
import Tilt from 'react-tilt';
import ScrollMonitor from 'react-scrollmonitor';
import { GooContext } from '../../context/gooContext';
import { ThemeContext } from '../../context/page-theme';

import featureImage from '../../resources/images/section-2-img.jpg';

const SectionContainer = Styled.div`
    width: 100%;
    min-height: 110vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SectionWrapper = Styled.div`
    width: 60%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row;
    transform-style: preserve-3d;
    transform: perspective(1000px);
`;
const SectionTextContent = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transform: translateZ(40px);
`;
const SectionHeader = Styled.h2`
    font-size: 50px;
    display: block;
    text-align: left;
    position: relative;
    z-index: 1;
    color: transparent;
    -webkit-text-stroke: 1.6px ${(props) => props.color};
    letter-spacing: 7px;
    transform: translateX(-120px);
    line-height: 49px;
    margin: 0;
    margin-bottom: 20px;
`;
const SectionBody = Styled.p`
    font-family: 'Crimson Text', sans-serif;
    font-size: 19px;
    line-height: 18px;
    font-weight: 500;
`;
const ImageWrapper = Styled.div`
    height: 350px;
    width: 500px;
    background-image: url(${(props) => props.featureImage});
    background-position: center;
    background-size: 'cover';
    position: absolute;
    top: 0;
    z-index: 0;
    box-shadow: 0px 0px 50px rgba(10, 10, 10, 0.19);
`;

export default Watch(
	class Section1 extends React.Component {
		render() {
			let gooProperties = {
				gooPath1:
					'M74.3016755,488.874453 C-109,275 91.5,188.722238 221.5,188.722238 C351.5,188.722238 494.248313,-59.0181146 606.74542,14.5 C719.242528,88.0181146 621.14026,101.444476 1004.07013,188.722238 C1259.35671,246.907413 1314.66667,324.166667 1170,420.5 C1026.33333,559.833333 838.581807,569.666667 606.74542,450 C258.990841,270.5 837.5,1184 517.5,968.5 C197.5,753 257.603351,702.748906 74.3016755,488.874453 Z',
				gooPath2:
					'M73.7228316,417.009272 C-109.578844,203.134819 90.921156,116.857057 220.921156,116.857057 C350.921156,116.857057 461.502893,-55.0181146 574,18.5 C686.497107,92.0181146 553.07013,97.722238 936,185 C1191.28658,243.185175 1283.61991,320.521599 1213,417.009272 C1040.28077,510.759637 838.002963,497.801486 606.166577,378.134819 C258.411997,198.634819 814,1019.5 494,804 C174,588.5 257.024507,630.883725 73.7228316,417.009272 Z',
				xCord: -10,
				yCord: 200,
				scale: 1.7
			};
			let themeProperties = {
				backgroundColor: '#FDE100',
				foregroundColor: '#000000'
			};

			return (
				<SectionContainer>
					<ThemeContext.Consumer>
						{(themeContext) => (
							<GooContext.Consumer>
								{(gooContext) => (
									<Tilt options={{ reverse: true, max: 35, perspective: 500, speed: 500, scale: 1 }}>
										<ScrollMonitor
											enterViewport={() => {
												console.log('Viewport is entered...');
												console.log('Context XCord: ', gooContext.state.xCord);
												gooContext.updateGooProperties(
													gooProperties.gooPath1,
													gooProperties.gooPath2,
													gooProperties.xCord,
													gooProperties.yCord,
													gooProperties.scale
												);
												themeContext.updateForegroundColor(themeProperties.foregroundColor);
												themeContext.updateBackgroundColor(themeProperties.backgroundColor);
											}}>
											<SectionWrapper>
												<ImageWrapper featureImage={featureImage} />
												<SectionTextContent>
													<SectionHeader color={themeContext.state.foregroundColor}>
														There's Coke in the Midas Touch.
													</SectionHeader>
													<SectionBody>
														Step into your skin, I'd rather jump in your bones Taking up
														your mouth so you'll breathe through your nose.
													</SectionBody>
												</SectionTextContent>
											</SectionWrapper>
										</ScrollMonitor>
									</Tilt>
								)}
							</GooContext.Consumer>
						)}
					</ThemeContext.Consumer>
				</SectionContainer>
			);
		}
	}
);
