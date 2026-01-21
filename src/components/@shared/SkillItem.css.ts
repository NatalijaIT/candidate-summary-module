import { Card, CardContent, styled, Typography, Box } from "@mui/material";

export const BadgeCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== "relevant"
})<{ relevant?: boolean }>(({ theme, relevant }) => ({
    minWidth: 75,
    textAlign: "center",
    color: theme.palette.common.black,
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    borderRadius: 0,
    backgroundColor: relevant ? theme.palette.action.selected : "transparent"
}));

export const BadgeCardContent = styled(CardContent, {
    shouldForwardProp: (prop) => prop !== "starIcon"
})<{ starIcon?: boolean }>(({ theme, starIcon }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    display: starIcon ? 'flex' : 'inline-block',
    "&:last-child": {
        paddingBottom: theme.spacing(1)
    },
    "&:hover": {
        "& svg": {
            fill: theme.palette.highlight.main,
        }
    }
}));

export const SkillYears = styled(Typography)({
    fontSize: 12
});

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
    marginRight: 8,
    '& svg': {
        fill: theme.palette.common.white,
        fontSize: '14px',
    },
}));