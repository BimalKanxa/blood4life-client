// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: require.resolve('@svgr/webpack'),
                        options: {
                            // Custom options or transformations
                            // Custom loader to handle and debug SVG content
                            custom: (content) => {
                                if (typeof content !== 'string') {
                                    console.error('Expected SVG content to be a string but got:', typeof content);
                                    throw new TypeError('Expected a string in replace function');
                                }
                                return content.replace('oldValue', 'newValue');
                            },
                        },
                    },
                ],
            },
        ],
    },
};
