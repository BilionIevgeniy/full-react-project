import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		alias: {
			'@shared': `${options.paths.src  }/shared`,
			'@features': `${options.paths.src  }/features`,
			'@entities': `${options.paths.src  }/entities`,
			'@pages': `${options.paths.src  }/pages`,
			'@widgets': `${options.paths.src  }/widgets`,
		}
	};
}
