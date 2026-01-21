import type { SkillWithProfile } from '../../api/types';
import { SkillItem, SectionWrapper } from '../@shared';

type MainTechnologiesSectionProps = {
	candidateSkills?: SkillWithProfile[];
};

const MainTechnologiesSection = ({ candidateSkills }: MainTechnologiesSectionProps) => {
	return (
		<SectionWrapper title="Main technologies">
			<>
				{candidateSkills?.map((skill, index) => {
					return skill?.main && (
						<SkillItem
							key={`${skill} ${index}`}
							value={skill.title}
							years={skill?.yearsOfExperience}
							relevant={skill?.byProfile}
						/>
					)
				})}
			</>
		</SectionWrapper>

	);
};

export default MainTechnologiesSection;
