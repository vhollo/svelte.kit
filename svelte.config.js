/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify'
//import adapter from '@sveltejs/adapter-static'
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
