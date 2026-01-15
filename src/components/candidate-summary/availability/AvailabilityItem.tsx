import { Stack } from '@mui/material';
import { MainTitle } from '../main-technologies/MainTechnologies.css';
import { StackItem } from '../../@shared';

type AvailabilityItemProps = {
    title?: string;
    value?: string;
};

const AvailabilityItem = ({ title, value }: AvailabilityItemProps) => {
    return (
        <Stack spacing={2}>
            <MainTitle variant="h6" fontWeight={600}>
                {title}
            </MainTitle>
            <StackItem value={value} />
        </Stack>
    );
};

export default AvailabilityItem;
