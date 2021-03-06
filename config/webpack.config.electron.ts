import * as webpack from 'webpack';
import * as path from 'path';
import * as merge from 'webpack-merge';
// import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig, { PROJECT_PATH, Enviroment } from './webpack.config.base';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';


export default (env: Enviroment) => {

    const HTML_TEMPLATE_PATH = 'src/renderer/editor/index.html';
    const ENTRY_PATH = path.join(PROJECT_PATH, './src/app');
    const DEV_MODE = env.DEV || env.HOT;
    const DIST_PATH =  path.join(PROJECT_PATH, '/dist/');
    const mode = (DEV_MODE) ? 'development' : 'production';

    const config: webpack.Configuration = {
        mode: mode,

        devtool: 'source-map',
        target: 'electron-main',

        entry: {
            app: path.join(ENTRY_PATH + '/index.ts')
        },

        output: {
            path: DIST_PATH,
            filename: '[name].js'
        },

        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }]
        },

        node: {
            __dirname: false,
            __filename: false
        },

        

        plugins: [
            // Add source map support for stack traces in node
            // https://github.com/evanw/node-source-map-support
            // new webpack.BannerPlugin(
            //   'require("source-map-support").install();',
            //   { raw: true, entryOnly: false }
            // ),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(mode)
                }
            }),
            (DEV_MODE) ? new CopyWebpackPlugin(
                [
                    {from:HTML_TEMPLATE_PATH, to: DIST_PATH + 'editor/index.html', toType:'file'},
                    {from: './resources', to: path.join(DIST_PATH,'resources'), toType:'dir'}, 
                    // {from: path.join(PROJECT_PATH, '/src/laucher/preload.js'), to: DIST_PATH }, 
            ]
            ) : null,
        ]
    }

    return merge(baseConfig, config);

}
