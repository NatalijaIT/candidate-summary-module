import type { Achievement } from '../../api/types';
import SectionWrapper from '../@shared/SectionWrapper';
import { SkillItem } from '../@shared';

type AchievementsSectionProps = {
    achievements?: Achievement[];
};

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
    return (
        <SectionWrapper title="Rewards and achievements">
            <>
                {achievements?.map(achievement => (
                    <SkillItem
                        key={achievement.id}
                        value={achievement.title}
                        info={achievement.info}
                        relevant={false}
                        starIcon={true}
                    />
                ))}
            </>
        </SectionWrapper>
    );
};

export default AchievementsSection;
