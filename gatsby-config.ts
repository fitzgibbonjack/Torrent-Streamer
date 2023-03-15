import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Mula - Free Movies & TV Shows`,
		siteUrl: process.env.APP_URL,
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-plugin-preact",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets\/icons/,
				},
			},
		},
	],
};

export default config;
