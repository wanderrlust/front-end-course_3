import { gql } from "@apollo/client";

export const UPDATE_CHARACTER = gql`
	mutation UpdateCharacter($id: ID!, $name: String!) {
		updateCharacter(id: $id, name: $name) {
			id
			name
			gender
			species
		}
	}
`;

export const DELETE_CHARACTER = gql`
	mutation DeleteCharacter($id: ID!) {
		deleteCharacter(id: $id) {
			id
		}
	}
`;
