// import * as Sentry from '@sentry/react';
// const RELEASE_VERSION = process.env.REACT_APP_SENTRY_RELEASE;
// ('my-project-name@dev');
// const ENVIRONMENT = process.env.REACT_APP_NODE_ENV || 'development';

// Sentry.init({
// 	dsn: process.env.REACT_APP_SENTRY_DSN,
// 	// Very important for linking errors with uploaded source maps
// 	release: RELEASE_VERSION,

// 	// Helps filter errors in Sentry
// 	environment: ENVIRONMENT,
// 	// Setting for performance tracing (0.0 to 1.0, where 1.0 = 100%)
// 	// In production, a lower value is usually set (e.g., 0.1 or 0.2)
// 	tracesSampleRate: ENVIRONMENT === 'production' ? 0.1 : 1.0,
// 	// Setting for Session Replay (if you use it)
// 	replaysSessionSampleRate: ENVIRONMENT === 'production' ? 0.05 : 0.0, // 5% of sessions in prod, 0% in dev
// 	replaysOnErrorSampleRate: 1.0, // Record replay if an error occurs
// });

// export default {
// 	Sentry
// }