import type { ReactElement } from "react";
import { Tooltip } from '@mui/material';

type TooltipWrapperProps = {
    children: ReactElement;
    title: string;
    byProfile: boolean;
};

const TooltipWrapper = ({ children, title, byProfile }: TooltipWrapperProps) => {
    return byProfile ? 
        <Tooltip
            title={`${title} is a relevant skill`}
            arrow
            placement="top"
            slotProps={{
                tooltip: {
                    sx: {
                        fontSize: '14px'
                    }
                }
            }}
        >
            {children}
        </Tooltip> :
        <>{children}</>
    ;
};

export default TooltipWrapper;
