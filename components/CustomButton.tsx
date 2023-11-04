'use client';

import { CustomButtonProps } from './CustomButton/CustomButton.props';
import Image from 'next/image';

export const CustomButton = ({
    title,
    containerStyles,
    handleClick,
    btnType = 'button',
}: CustomButtonProps): JSX.Element => {
    return (
        <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className={'flex-1'}>title</span>
        </button>
    );
};
