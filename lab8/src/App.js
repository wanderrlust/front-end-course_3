import React from "react";
import "./reset.css"
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";


export default function App() {
	return (
		<>
			<ApolloProvider client={client}>
				Hello world
			</ApolloProvider>
		</>
	);
}
