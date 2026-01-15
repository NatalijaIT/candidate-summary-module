import { Card, CardContent, styled } from "@mui/material";

export const BadgeCard = styled(Card)(({ theme }) => ({
    minWidth: 75,
    textAlign: "center",
    color: theme.palette.common.black,
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    borderRadius: 0
}));

export const BadgeCardContent = styled(CardContent)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    "&:last-child": {
        paddingBottom: theme.spacing(1)
    }
}));
