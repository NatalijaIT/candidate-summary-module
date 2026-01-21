import { SectionWrapper, SkillItem } from '../@shared';
import type { Skill } from '../../api/types';

type AdditionalSkillsSectionProps = {
    candidateSkills?: Skill[];
};

const AdditionalSkillsSection = ({ candidateSkills }: AdditionalSkillsSectionProps) => {
    return (
        <SectionWrapper title="Additional skills">
            <>
                {candidateSkills?.map((skill, index) => {
                    return (skill?.yearsOfExperience && !skill?.main) &&
                        <SkillItem
                            key={`${skill.title} ${index}`}
                            value={skill.title}
                            relevant={false}
                        />
                })}
            </>
        </SectionWrapper>
    );
};

export default AdditionalSkillsSection;
