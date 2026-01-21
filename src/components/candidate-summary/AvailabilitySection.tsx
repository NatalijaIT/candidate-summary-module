import { Stack } from '@mui/material';
import { AvailabilityContainer } from './index.css';
import { SkillItem } from '../@shared';
import { SectionTitle } from '../@shared/SectionWrapper.css';

type AvailabilitySectionProps = {
    availability?: string;
    availaibityHours?: string;
    isDirectHirePossible?: boolean;
    readyToStart?: string;
};

const AvailabilitySection = ({
    availability,
    availaibityHours,
    isDirectHirePossible,
    readyToStart
}: AvailabilitySectionProps) => {
    const availabilityData = [
        { title: 'Availability', value: availability },
        { title: 'Ready to start', value: readyToStart },
        { title: 'Availability  hours', value: availaibityHours },
        { title: 'Direct hiring', value: isDirectHirePossible ? 'Yes' : 'No' },
    ];

    return (
        <AvailabilityContainer>
            {availabilityData?.map((info) => (
                <Stack spacing={2} key={info.title}>
                    <SectionTitle variant="h6" fontWeight={600}>
                        {info.title}
                    </SectionTitle>
                    {info.value && <SkillItem value={info.value} relevant={false} />}
                </Stack>
            ))}
        </AvailabilityContainer>
    );
};

export default AvailabilitySection;
