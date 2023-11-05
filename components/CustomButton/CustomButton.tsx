'use client';

import { CustomButtonProps } from './CustomButton.props';
import Image from 'next/image';

export const CustomButton = ({
    title,
    containerStyles,
    handleClick,
    btnType = 'button',
    textStyles,
    rightIcon,
}: CustomButtonProps): JSX.Element => {
    return (
        <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon} alt='right icon' fill className='object-contain' />
                </div>
            )}
        </button>
    );
};
