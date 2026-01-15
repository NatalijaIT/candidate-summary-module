import { Box, styled } from "@mui/material";

export const AvailabilityContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(4),

    '@media (max-width: 630px)': {
        gridTemplateColumns: "1fr",
        gap: theme.spacing(3),
    },
}));
