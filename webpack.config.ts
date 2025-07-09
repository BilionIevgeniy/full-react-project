import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

dotenv.config();

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, 'src'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };

    // Определение режима сборки (приоритет: CLI > .env > default)
    const cliMode = env.mode;
    const envFileMode = process.env.MODE as
        | 'production'
        | 'development'
        | undefined;
    const mode = cliMode || envFileMode || 'development';
    const isDev = mode === 'development';

    // Определение порта для devServer (приоритет: CLI > .env > default)
    const cliPort = env.port ? Number(env.port) : undefined;
    const envFilePort = process.env.PORT ? Number(process.env.PORT) : undefined;
    const port = cliPort || envFilePort || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });

    return config;
};
