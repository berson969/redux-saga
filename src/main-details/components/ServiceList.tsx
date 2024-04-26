import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../../models";
import {fetchServices} from "../actions";
import SpinComponent from "./SpinComponent.tsx";
import ErrorComponent from "./ErrorComponent.tsx";

const ServiceList: React.FC= () => {
    const dispatch = useDispatch();
    const { services , isLoading, error } =
        useSelector((state: RootState) => state.services)

    useEffect(() => {
        dispatch(fetchServices())
        }, [])
    console.log("SERV", services , "LOAD", isLoading, "ERROR", error)

    return (
        <div className='mt-8 flex flex-col justify-center items-center'>
            {isLoading && <SpinComponent />}
            {error && <p>{error}</p>}
            {error && <ErrorComponent fetchRequest={() => fetchServices()} />}
            <ul className="flex flex-col gap-5 mt-8">
                {!isLoading &&  !error && services.length !== 0 && <h2 className="text-xl font-bold">Список сервисов</h2>}
                {!isLoading && !error && services.length !== 0 && services.map(service =>
                    <li key={service.id} className="hover:underline">
                        <Link to={`/main-details/${service.id}`}>
                            {`${service.name} + ${service.price}`}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ServiceList;
