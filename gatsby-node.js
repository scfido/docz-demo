exports.onCreateWebpackConfig = ({
    stage, getConfig, rules, loaders, actions
}) => {
    actions.setWebpackConfig({
        module: {
            // rules: [
            //     {
            //         test: /\.css$/,
            //         use: [{
            //             loader: 'style-loader', // creates style nodes from JS strings
            //         }, {
            //             loader: 'css-loader',  // translates CSS into CommonJS
            //             options: {
            //                 import: true,
            //             },
            //         }]
            //     }
            // ],
        },
    });
}