import React from 'react';
import {ErrorComponentProps} from "../models";
import {useDispatch} from "react-redux";

const ErrorComponent: React.FC<ErrorComponentProps> = ({ fetchRequest }) => {
	const dispatch = useDispatch();
    const retryRequest = () => dispatch(fetchRequest());
    return (
        <div className="flex w-[400px] justify-center items-center bg-pink-200 border-pink-500 border-l-4 p-4 mt-8">
            <p className="text-pink-800 font-bold">Произошла ошибка!</p>
            <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-4 mt-2 rounded"
                onClick={retryRequest}
            >
                Повторить запрос
            </button>
        </div>
    );
};

export default ErrorComponent;
