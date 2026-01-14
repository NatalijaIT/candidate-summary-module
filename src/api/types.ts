export type Achievement = {
    id: string,
    info: string,
    title: string
}

export type Skill = {
    id: string,
    title: string,
    main: boolean,
    yearsOfExperience?: number
}

export type SkillWithProfile = Skill & {
    byProfile: boolean;
};

export type CandidateSummaryData = {
    profile: {
        achievements: Achievement[],
        availability: string,
        availaibityHours: string,
        isDirectHirePossible: boolean,
        readyToStart: string,
        skills: Skill[],
        summary: string,
    }
};
