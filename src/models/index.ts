import {ServicesProps} from "../main-details/models";
import {SkillsState} from "../search/models";

export interface RootState {
    skills: SkillsState;
    services: ServicesProps;
}
