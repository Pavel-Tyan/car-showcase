export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'c770b6f957msh1e4e9ed7e915612p17e9a2jsn07ff4ae694e7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
