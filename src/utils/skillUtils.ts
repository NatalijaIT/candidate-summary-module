import type { Skill, SkillWithProfile } from '../api/types';

export function mergeSkillsWithProfile(
    summariesSkills: Skill[] | undefined,
    profileSkills: string[] | undefined
): SkillWithProfile[] {
    if (!summariesSkills || summariesSkills.length === 0) {
        return [];
    }

    const profileSkillsSet = new Set(profileSkills?.map(skill => skill.toLocaleLowerCase()) || []);

    return summariesSkills.map(skill => ({
        ...skill,
        byProfile: profileSkillsSet.has(skill.title.toLocaleLowerCase())
    }));
}

export const sortSkillsByRelevance = (skills: SkillWithProfile[]) =>
    skills?.sort((skillA, skillB) => {
        if (skillA.byProfile === skillB.byProfile) {
            return 0;
        }
        return skillA.byProfile ? -1 : 1;
    });
