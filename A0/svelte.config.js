import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: '/CSCI5609'
        }
    }
};

export default config;
