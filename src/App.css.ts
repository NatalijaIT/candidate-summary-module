import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from './theme';


export const AppWrapper = styled(Box)`
	max-width: 800px;
	margin: 0 auto;
	padding: ${theme.spacing(2)};

	${theme.breakpoints.up('sm')} {
		padding: ${theme.spacing(8)};
	}
`;
