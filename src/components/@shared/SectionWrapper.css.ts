import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const SectionContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4)
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    lineHeight: theme.typography.h6.lineHeight,
    fontSize: theme.typography.h6.fontSize,
    marginBottom: theme.spacing(1.5),
    color: theme.palette.common.black
}));
