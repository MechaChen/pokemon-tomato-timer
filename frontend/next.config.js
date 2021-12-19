/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/pokemons',
                destination: 'http://localhost:8000/pokemons',
            },
        ];
    },
};
