import { Box } from '@mui/material';
import { SectionContentWrapper, SectionTitle } from './SectionWrapper.css';
import type { ReactElement } from 'react';

type SectionWrapperProps = {
    title?: string;
    children: ReactElement;
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
    return (
        <Box>
            <SectionTitle variant="h6" fontWeight={600} mb={2}>
                {title}
            </SectionTitle>
            <SectionContentWrapper>
                {children}
            </SectionContentWrapper>
        </Box>
    );
};

export default SectionWrapper;