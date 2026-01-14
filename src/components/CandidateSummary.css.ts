import {
    Box,
    Stack,
    Typography,
    styled
} from "@mui/material";

export const TitleText = styled(Typography)(({ theme }) => ({
    position: "relative",
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    letterSpacing: theme.typography.h1.letterSpacing,
    leadingTrim: 'none',
    zIndex: 1
}));

export const TitleHighlight = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: 0,
    bottom: 2,
    width: "100%",
    height: 14,
    backgroundColor: theme.palette.highlight.main,
    zIndex: 0
}));

export const TitleWrapper = styled(Box)(() => ({
    position: "relative",
    display: "inline-block",
}));

export const InfoText = styled(Typography)(({ theme }) => ({
    letterSpacing: theme.typography.caption.letterSpacing,
    textTransform: "none",
    fontSize: theme.typography.caption.fontSize,
}));

export const InfoIcon = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    borderRadius: "50%",
    fontWeight: 700,
    border: `2px solid ${theme.palette.info.main}`,
    fontSize: 12,
    marginBottom: 2
}));

export const InfoWrapper = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.info.main,
}));

export const HeaderRow = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginBottom: theme.spacing(4),
    '@media (max-width: 424px)': {
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
}));

export const SunnaryText = styled(Box)(({ theme }) => ({
    weight: 400,
    lineHeight: theme.typography.body1.lineHeight,
    fontSize: theme.typography.body1.fontSize,
    marginBottom: theme.spacing(4)
}));