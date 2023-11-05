import { CarProps } from '@/components/CarCard/Car.props';
import { FilterProps } from './Filter.props';

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'X-RapidAPI-Key': 'c770b6f957msh1e4e9ed7e915612p17e9a2jsn07ff4ae694e7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string): string => {
    const url = new URL('https://cdn.imagin.studio/getImage');

    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
};

export const updateSearchParams = (type: string, value: string): string => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
};
