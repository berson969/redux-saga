import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeSearchField} from "../actions/actionsCreators.ts";
import {SkillsProps} from "../models";

const Search: React.FC = () => {
	const { searchPattern } = useSelector(
		(state: SkillsProps) => state.skills
	);
	const dispatch = useDispatch()

	useEffect(() => {
		document.title = 'Search page';
	}, []);

	const handleSearch = (value: string) => {
		dispatch(changeSearchField(value));
	}

	return (
			<div className="mt-12 flex flex-col gap-6 justify-center items-center">
				<h1 className="font-bold text-3xl">Поиск</h1>
				<div className="w-96 mx-auto shadow-xl p-5 rounded-2xl">
					<div className="flex flex-col gap-4 justify-center items-center">
						<div>
							<label htmlFor="text" className="text-sm font-bold px-2 text-gray-700">Строка поиска</label>
							<div className="mt-1">
								<input
									type="search"
									value={searchPattern}
									id="search"
									onChange={(e)=>handleSearch(e.target.value)}
									className="w-56 shadow-mв placeholder:text-xs border border-gray-500 rounded-xl px-2"
									placeholder="type something to search"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Search;
