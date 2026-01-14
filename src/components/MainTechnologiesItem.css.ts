import type { SxProps, Theme } from '@mui/material';

export const cardStyles: SxProps<Theme> = (theme) => ({
    minWidth: 75,
    textAlign: "center",
    borderStyle: "dashed",
    borderColor: theme.palette.border.dashed,
    color: theme.palette.common.black,
    borderRadius: 0,
});

export const cardContentStyles: SxProps<Theme> = (theme) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    '&:last-child': {
        paddingBottom: theme.spacing(1),
    }
});

export const titleStyles: SxProps<Theme> = {
    fontWeight: 500
};

export const yearsTextStyles: SxProps<Theme> = (theme) => ({
    color: theme.palette.common.black
});
