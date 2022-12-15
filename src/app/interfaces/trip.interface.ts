export interface Trip {
    id: number,
    destination: string,
    min_traveler: number,
    max_traveler: number,
    min_age: number,
    max_age: number,
    departure_date: Date,
    duration: number,
    price: number,
    img_trip: string;
    description: string,
    flights: boolean,
    hotel: boolean,
    meals: boolean,
    excursions: boolean,
    rent_car: boolean,
    insurance: boolean,
    user_id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    phone: string,
    hobbies: string,
    personality: string,
    birth_date: Date,
    rating: number,
    img_user: string
}