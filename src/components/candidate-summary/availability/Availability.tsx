import StatusIndicatorItem from './AvailabilityItem';
import { AvailabilityContainer } from './Availability.css';

type AvailabilityProps = {
    availability?: string;
    availaibityHours?: string;
    isDirectHirePossible?: boolean;
    readyToStart?: string;
};

const Availability = ({
    availability,
    availaibityHours,
    isDirectHirePossible,
    readyToStart
}: AvailabilityProps) => {
    const availabilityData = [
        { title: 'Availability', value: availability },
        { title: 'Ready to start', value: readyToStart },
        { title: 'Availability  hours', value: availaibityHours },
        { title: 'Direct hiring', value: isDirectHirePossible ? 'Yes' : 'No' },
    ];

    return (
        <AvailabilityContainer>
            {availabilityData?.map((info) => (
                <StatusIndicatorItem
                    key={info.title}
                    title={info.title}
                    value={info.value}
                />
            ))}
        </AvailabilityContainer>
    );
};

export default Availability;
