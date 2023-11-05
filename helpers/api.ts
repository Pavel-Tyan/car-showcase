import { CarProps } from '@/components/CarCard/Car.props';

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'c770b6f957msh1e4e9ed7e915612p17e9a2jsn07ff4ae694e7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
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
