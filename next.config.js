// import { env } from "./src/server/env.js";
const { env } = require("./src/server/env");

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
// function defineNextConfig(config) {
//   return config;
// }

// export default defineNextConfig({
//   reactStrictMode: true,
// });

const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
