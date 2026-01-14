import { useQuery } from '@tanstack/react-query';
import type { CandidateSummaryData } from '../api';
import { fetchCandidateProfile, fetchCandidateSummary } from '../api';

export const useCandidateSummary = () =>
    useQuery<CandidateSummaryData>({
        queryKey: ['CandidateSummary'],
        queryFn: () => fetchCandidateSummary()
    });

export const useCandidateProfile = () =>
    useQuery<{ skills: string[] }>({
        queryKey: ['CandidateProfile'],
        queryFn: () => fetchCandidateProfile()
    });