'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CarCardProps } from '../types/interfaces';
import { CustomButton } from '.';
import { calculateCarRent } from '@/helpers/helpers';

export const CarCard = ({ car }: CarCardProps): JSX.Element => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make}
                    {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>{carRent}</span>
                <span className='self-end text-[14px] font-semibold'>/day</span>
            </p>
        </div>
    );
};
