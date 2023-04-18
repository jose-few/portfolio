import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AberUniLogo.png","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","IMG_5905.JPG"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".JPG":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6fd0c3a6.js","imports":["_app/immutable/entry/start.6fd0c3a6.js","_app/immutable/chunks/index.585f1622.js","_app/immutable/chunks/singletons.b4288973.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3cc65e47.js","imports":["_app/immutable/entry/app.3cc65e47.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.585f1622.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
