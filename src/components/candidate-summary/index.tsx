import { useCandidateSummary, useCandidateProfile } from '../../hooks/useCandidateData';

import MainTechnologiesSection from './MainTechnologiesSection';
import AdditionalSkillsSection from './AdditionalSkillsSection';
import AchievementsSection from './AchievementsSection';
import AvailabilitySection from './AvailabilitySection';
import Loader from '../@shared/Loader';

import {
    ContentWrapper,
    SummaryText,
    Header,
    InfoIcon,
    InfoText,
    InfoWrapper,
    TitleHighlight,
    TitleText,
    TitleWrapper
} from "./index.css";

import { mergeSkillsWithProfile, sortSkillsByRelevance } from '../../utils/skillUtils';

const CandidateSummaryModule = () => {
    const { data: summaryData, isLoading: isSummaryLoading } = useCandidateSummary();
    const { data: profileData, isLoading: isProfileLoading } = useCandidateProfile();

    const summariesSkills = summaryData?.profile?.skills;
    const summary = summaryData?.profile?.summary;
    const summaryAchievements = summaryData?.profile?.achievements;
    const summaryAvailability = summaryData?.profile?.availability;
    const availaibityHours = summaryData?.profile?.availaibityHours;
    const isDirectHirePossible = summaryData?.profile?.isDirectHirePossible;
    const readyToStart = summaryData?.profile?.readyToStart;
    const profileSkills = profileData?.skills;

    const extendedSkills = mergeSkillsWithProfile(summariesSkills, profileSkills);
    const sortedSkills = sortSkillsByRelevance(extendedSkills);

    if (isSummaryLoading || isProfileLoading) {
        return <Loader />;
    }

    return (
        <ContentWrapper>
            <Header direction="row" spacing={2}>
                <TitleWrapper>
                    <TitleHighlight />
                    <TitleText variant="h1">
                        Summary
                    </TitleText>
                </TitleWrapper>

                <InfoWrapper direction="row" spacing={1}>
                    <InfoIcon>i</InfoIcon>
                    <InfoText variant="caption">
                        Relevant skills are highlighted
                    </InfoText>
                </InfoWrapper>
            </Header>

            <SummaryText>
                {summary}
            </SummaryText>

            <MainTechnologiesSection candidateSkills={sortedSkills} />
            <AdditionalSkillsSection candidateSkills={sortedSkills} />
            <AchievementsSection achievements={summaryAchievements} />
            <AvailabilitySection
                availability={summaryAvailability}
                availaibityHours={availaibityHours}
                isDirectHirePossible={isDirectHirePossible}
                readyToStart={readyToStart}
            />
        </ContentWrapper>
    );
}

export default CandidateSummaryModule;