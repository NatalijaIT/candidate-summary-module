import { styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

export const RewardsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
}));

export const RewardCard = styled(Card)(({ theme }) => ({
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    color: theme.palette.common.black,
    borderRadius: 0,
    minWidth: 160,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
        '& .star-icon-wrapper': {
            backgroundColor: theme.palette.highlight.main,
        }
    }
}));

export const CardContentWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
}));

export const RewardText = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.subtitle1.fontWeight,
}));

export const StarIconWrapper = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: "50%",
    fontWeight: 700,
    backgroundColor: theme.palette.common.black,
    fontSize: 12,
    transition: 'background-color 0.3s ease',
    '& svg': {
        fill: theme.palette.common.white,
        fontSize: '14px',
    }
}));
