export interface ItemType {
	id: number;
	name: string;
}
export interface SkillsState {
	items: ItemType[];
	loading: boolean;
	error: string | null;
	searchPattern: string;
}

export interface SkillsProps {
	skills: SkillsState;
}


export interface ActionProps {
	type: string,
	payload: any;
}
