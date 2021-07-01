import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				My Personal Porfolio
			</SectionTitle>
			<SectionText>
				The purpose of fullstacksk is to give solution for a business so that it can make its own space in this
				digital world.
			</SectionText>
			<Button onClick={() => (window.location = 'https.google.com')}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
