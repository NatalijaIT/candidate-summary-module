import type { SxProps, Theme } from '@mui/material';

export const badgeCardStyles: SxProps<Theme> = (theme) => ({
    minWidth: 75,
    textAlign: "center",
    color: theme.palette.common.black,
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    borderRadius: 0
});

export const cardContentStyles: SxProps<Theme> = (theme) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    '&:last-child': {
        paddingBottom: theme.spacing(1)
    }
});
