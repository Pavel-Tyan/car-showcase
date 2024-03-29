'use client';

import { updateSearchParams } from '@/helpers/api';
import { useRouter } from 'next/navigation';
import { CustomButton } from '../CustomButton/CustomButton';
import { ShowMoreProps } from './ShowMore.props';

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;

        // Update the "limit" search parameter in the URL with the new value
        const newPathname = updateSearchParams('limit', `${newLimit}`);

        router.push(newPathname, { scroll: false });
    };

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    btnType='button'
                    title='Show More'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};
