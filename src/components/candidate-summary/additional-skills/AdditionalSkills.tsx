import { StackItem } from '../../@shared';
import { Box } from '@mui/material';
import type { Skill } from '../../../api/types';
import { TechnologiesWrapper, MainTitle } from '../main-technologies/MainTechnologies.css';

type AdditionalSkillsProps = {
    candidateSkills?: Skill[];
};

const AdditionalSkills = ({ candidateSkills }: AdditionalSkillsProps) => {
    return (
        <Box>
            <MainTitle variant="h6" fontWeight={600} mb={2}>
                Additional skills
            </MainTitle>
            <TechnologiesWrapper>
                {candidateSkills?.map((skill, index) => {
                    return (skill?.yearsOfExperience && !skill?.main) &&
                        <StackItem
                            key={`${skill.title} ${index}`}
                            value={skill.title}
                        />
                }
                )}
            </TechnologiesWrapper>
        </Box>
    );
};

export default AdditionalSkills;
