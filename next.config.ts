import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.dicebear.com",
				// port: "",
				// pathname: "/account123/**",
				// search: "",
			},
		],
	},
	/* config options here */
};

export default nextConfig;
