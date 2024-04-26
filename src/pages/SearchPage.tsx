import React from 'react';

import Search from "../search/components/Search.tsx";
import Results from "../search/components/Results.tsx";

const SearchPage: React.FC = () => {
	return (
		<div>
			<Search />
			<Results />
		</div>
	);
};

export default SearchPage;
