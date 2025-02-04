import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: '/click-counter'  
        }
    }
};

export default config;