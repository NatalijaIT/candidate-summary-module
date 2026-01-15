import { Card, CardContent, Typography, styled } from "@mui/material";

export const TechnologyCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== "byProfile"
})<{ byProfile?: boolean }>(({ theme, byProfile }) => ({
    minWidth: 75,
    textAlign: "center",
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    color: theme.palette.common.black,
    borderRadius: 0,
    backgroundColor: byProfile ? theme.palette.action.selected : "transparent"
}));

export const TechnologyCardContent = styled(CardContent)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    "&:last-child": {
        paddingBottom: theme.spacing(1)
    }
}));

export const TechnologyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.body1.fontWeight
}));

export const TechnologyYears = styled(Typography)({
    fontSize: 12
});