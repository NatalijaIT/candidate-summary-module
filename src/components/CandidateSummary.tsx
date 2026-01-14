import { useCandidateSummary, useCandidateProfile } from '../hooks/useCandidateData';
import MainTechnologies from './MainTechnologies';
import { Typography } from "@mui/material";
import {
    SunnaryText,
    HeaderRow,
    InfoIcon,
    InfoText,
    InfoWrapper,
    TitleHighlight,
    TitleText,
    TitleWrapper
} from "./CandidateSummary.css";
import AdditionalSkills from './AdditionalSkills';
import RewardsAndAchievements from './Achievements';
import StatusIndicator from './StatusIndicator';
import Loader from './shared/Loader';
import { mergeSkillsWithProfile, sortSkillsByRelevance } from '../utils/skillUtils';

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
        <>
            <HeaderRow direction="row" spacing={2}>
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
            </HeaderRow>
            <SunnaryText>
                <Typography>
                    {summary}
                </Typography>
            </SunnaryText>
            <MainTechnologies candidateSkills={sortedSkills} />
            <AdditionalSkills candidateSkills={sortedSkills} />
            <RewardsAndAchievements achievements={summaryAchievements} />
            <StatusIndicator
                availability={summaryAvailability}
                availaibityHours={availaibityHours}
                isDirectHirePossible={isDirectHirePossible}
                readyToStart={readyToStart}
            />
        </>
    );
}

export default CandidateSummaryModule;