import AchievementItem from './AchievementItem';
import { Box } from '@mui/material';
import type { Achievement } from '../../../api/types';
import { TechnologiesWrapper, MainTitle } from '../main-technologies/MainTechnologies.css';

type ewardsAndAchievementsProps = {
    achievements?: Achievement[];
};

const Achievements = ({ achievements }: ewardsAndAchievementsProps) => {
    return (
        <Box>
            <MainTitle variant="h6" fontWeight={600} mb={2}>
                Rewards and achievements
            </MainTitle>
            <TechnologiesWrapper>
                {achievements?.map(achievement => (
                    <AchievementItem
                        key={achievement.id}
                        title={achievement.title}
                        info={achievement.info}
                    />
                ))}
            </TechnologiesWrapper>
        </Box>
    );
};

export default Achievements;
