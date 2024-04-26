import React from 'react';
import {useSelector} from "react-redux";
import {SkillsProps} from "../models";

const Results: React.FC = () => {
	const { items, loading, error, searchPattern } = useSelector(
		(state: SkillsProps) => state.skills
	);

	const hasQuery = searchPattern && searchPattern.trim() !== ""

	return (
		<div className="mt-5 flex flex-col items-center justify-center">
			{hasQuery && loading && <div>searching...</div>}
			{hasQuery && !loading &&
				<table className="w-96">
					<tbody className="bg-white divide-y divide-gray-200">
					{items && items.map(item =>
						<tr key={item.id}>
							<td className="w-96 px-6 py-3 whitespace-nowrap border border-gray-200">
								<span className="text-sm text-gray-900">{item.name}</span>
							</td>
						</tr>
					)}
					{error && <div className="mt-5 text-center">Error occured</div>}
					</tbody>
				</table>
			}
			{!hasQuery &&
				<div className="mt-5 text-center">
					<p>type something to search</p>
				</div>
			}
		</div>
	);
};

export default Results;
