import { CarProps } from '../CarCard/Car.props';

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}
