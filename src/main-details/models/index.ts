export interface ActionProps {
    type: string,
    payload?: any;
}

export interface ServiceType {
    id: number;
    name: string;
    price: number;
    content?: string;
}

export interface ServicesProps {
    services: ServiceType[];
    details: ServiceType | null;
    isLoading: boolean;
    error: string;
}

export interface ErrorComponentProps {
    fetchRequest: () => ActionProps;
}
