import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../models";
import {fetchDetails, fetchServices} from "../actions";
import SpinComponent from "./SpinComponent.tsx";
import ErrorComponent from "./ErrorComponent.tsx";

const ServiceDetails : React.FC= () => {
    const dispatch = useDispatch();
    const { details, isLoading, error } =
        useSelector((state: RootState) => state.services)
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        id ? dispatch(fetchDetails(id)) : navigate(-1)
    }, [id])

    const handleClick = () => navigate(-1);

    return (
        <div className="mt-8 flex flex-col justify-center items-center">
            {isLoading && <SpinComponent />}
            {error && <p>{error}</p>}
            {error && <ErrorComponent fetchRequest={()=>fetchDetails(id)} />}
            {!isLoading && details && !error &&
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center my-8">
                        <button className="mr-14" onClick={handleClick}>&lt;&lt;&nbsp;&nbsp;&nbsp;Назад</button>
                        <h1 className="font-bold text-xl">Сервис</h1>
                    </div>
                    <table className="border-collapse border border-gray-400">
                        <tbody>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">ID</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">{details.id}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Название</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">{details.name}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Стоимость</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">{details.price}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Описание</td>
                                <td className="border border-gray-400 px-4 py-2 text-center">{details.content}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>



    );
};

export default ServiceDetails;
