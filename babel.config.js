module.exports = api => {
    api.cache.never();

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false
                }
            ],
            '@babel/preset-react'
        ]
    };
};
