import MainTechnologiesItem from './MainTechnologiesItem';
import { Box } from '@mui/material';
import type { SkillWithProfile } from '../../../api/types';
import { TechnologiesWrapper, MainTitle } from './MainTechnologies.css';

type MainTechnologiesProps = {
	candidateSkills?: SkillWithProfile[];
};

const MainTechnologies = ({ candidateSkills }: MainTechnologiesProps) => {
	return (
		<Box>
			<MainTitle variant="h6" mb={2}>
				Main technologies
			</MainTitle>
			<TechnologiesWrapper>
				{candidateSkills?.map((skill, index) => {
					return skill?.main &&
						<MainTechnologiesItem
							key={`${skill} ${index}`}
							title={skill.title}
							years={skill?.yearsOfExperience}
							byProfile={skill?.byProfile}
						/>
				})}
			</TechnologiesWrapper>
		</Box>
	);
};

export default MainTechnologies;
