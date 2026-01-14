import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const TechnologiesWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1),
	marginBottom: theme.spacing(4)
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
	fontWeight: theme.typography.h6.fontWeight,
	fontSize: theme.typography.h6.fontSize,
	letterSpacing: theme.typography.h6.letterSpacing,
	marginBottom: theme.spacing(1.5)
}));
