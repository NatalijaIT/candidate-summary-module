import { Box, styled } from "@mui/material";

export const StatusIndicatorContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(4),
    maxWidth: 600,
    '@media (max-width: 630px)': {
        gridTemplateColumns: "1fr",
        gap: theme.spacing(3),
        maxWidth: 250
    },
}));
