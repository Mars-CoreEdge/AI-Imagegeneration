"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate/route";
exports.ids = ["app/api/generate/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Admin_Documents_AI_Imagegeneration_web_app_api_generate_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate/route.js */ \"(rsc)/./app/api/generate/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate/route\",\n        pathname: \"/api/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Admin\\\\Documents\\\\AI-Imagegeneration\\\\web\\\\app\\\\api\\\\generate\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Admin_Documents_AI_Imagegeneration_web_app_api_generate_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/generate/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbiU1Q0RvY3VtZW50cyU1Q0FJLUltYWdlZ2VuZXJhdGlvbiU1Q3dlYiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQWRtaW4lNUNEb2N1bWVudHMlNUNBSS1JbWFnZWdlbmVyYXRpb24lNUN3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWlpbWFnZS1uZXh0Lz81OGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXERvY3VtZW50c1xcXFxBSS1JbWFnZWdlbmVyYXRpb25cXFxcd2ViXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGVcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dlbmVyYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2VuZXJhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRG9jdW1lbnRzXFxcXEFJLUltYWdlZ2VuZXJhdGlvblxcXFx3ZWJcXFxcYXBwXFxcXGFwaVxcXFxnZW5lcmF0ZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZ2VuZXJhdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/generate/route.js":
/*!***********************************!*\
  !*** ./app/api/generate/route.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\ncloudinary__WEBPACK_IMPORTED_MODULE_1__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nasync function POST(request) {\n    try {\n        const { prompt } = await request.json();\n        if (!prompt) return new Response(JSON.stringify({\n            error: \"prompt required\"\n        }), {\n            status: 400\n        });\n        let dataUrl;\n        if (process.env.HF_TOKEN) {\n            const r = await fetch(\"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell\", {\n                method: \"POST\",\n                headers: {\n                    Authorization: `Bearer ${process.env.HF_TOKEN}`,\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    inputs: prompt,\n                    options: {\n                        wait_for_model: true\n                    }\n                })\n            });\n            if (!r.ok) throw new Error(\"HF generation failed\");\n            const buf = Buffer.from(await r.arrayBuffer());\n            dataUrl = `data:image/png;base64,${buf.toString(\"base64\")}`;\n        } else {\n            const result = await openai.images.generate({\n                model: \"gpt-image-1\",\n                prompt,\n                size: \"1024x1024\"\n            });\n            const b64 = result.data[0].b64_json;\n            dataUrl = `data:image/png;base64,${b64}`;\n        }\n        const upload = await cloudinary__WEBPACK_IMPORTED_MODULE_1__.v2.uploader.upload(dataUrl, {\n            folder: \"aiimages\"\n        });\n        return Response.json({\n            url: upload.secure_url,\n            publicId: upload.public_id\n        });\n    } catch (e) {\n        console.error(e);\n        return new Response(JSON.stringify({\n            error: \"failed to generate image\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUNrQjtBQUU3QyxNQUFNRyxTQUFTLElBQUlILDhDQUFNQSxDQUFDO0lBQUVJLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUFDO0FBRS9ETCwwQ0FBVUEsQ0FBQ00sTUFBTSxDQUFDO0lBQ2hCQyxZQUFZSixRQUFRQyxHQUFHLENBQUNJLHFCQUFxQjtJQUM3Q0MsU0FBU04sUUFBUUMsR0FBRyxDQUFDTSxrQkFBa0I7SUFDdkNDLFlBQVlSLFFBQVFDLEdBQUcsQ0FBQ1EscUJBQXFCO0FBQy9DO0FBRU8sZUFBZUMsS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBQ3JDLElBQUksQ0FBQ0QsUUFBUSxPQUFPLElBQUlFLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQWtCLElBQUk7WUFBRUMsUUFBUTtRQUFJO1FBRTdGLElBQUlDO1FBQ0osSUFBSW5CLFFBQVFDLEdBQUcsQ0FBQ21CLFFBQVEsRUFBRTtZQUN4QixNQUFNQyxJQUFJLE1BQU1DLE1BQU0sZ0ZBQWdGO2dCQUNwR0MsUUFBUTtnQkFDUkMsU0FBUztvQkFBRUMsZUFBZSxDQUFDLE9BQU8sRUFBRXpCLFFBQVFDLEdBQUcsQ0FBQ21CLFFBQVEsQ0FBQyxDQUFDO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQy9GTSxNQUFNWCxLQUFLQyxTQUFTLENBQUM7b0JBQUVXLFFBQVFmO29CQUFRZ0IsU0FBUzt3QkFBRUMsZ0JBQWdCO29CQUFLO2dCQUFFO1lBQzNFO1lBQ0EsSUFBSSxDQUFDUixFQUFFUyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO1lBQzNCLE1BQU1DLE1BQU1DLE9BQU9DLElBQUksQ0FBQyxNQUFNYixFQUFFYyxXQUFXO1lBQzNDaEIsVUFBVSxDQUFDLHNCQUFzQixFQUFFYSxJQUFJSSxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzdELE9BQU87WUFDTCxNQUFNQyxTQUFTLE1BQU12QyxPQUFPd0MsTUFBTSxDQUFDQyxRQUFRLENBQUM7Z0JBQUVDLE9BQU87Z0JBQWU1QjtnQkFBUTZCLE1BQU07WUFBWTtZQUM5RixNQUFNQyxNQUFNTCxPQUFPTSxJQUFJLENBQUMsRUFBRSxDQUFDQyxRQUFRO1lBQ25DekIsVUFBVSxDQUFDLHNCQUFzQixFQUFFdUIsSUFBSSxDQUFDO1FBQzFDO1FBRUEsTUFBTUcsU0FBUyxNQUFNaEQsMENBQVVBLENBQUNpRCxRQUFRLENBQUNELE1BQU0sQ0FBQzFCLFNBQVM7WUFBRTRCLFFBQVE7UUFBVztRQUM5RSxPQUFPakMsU0FBU0QsSUFBSSxDQUFDO1lBQUVtQyxLQUFLSCxPQUFPSSxVQUFVO1lBQUVDLFVBQVVMLE9BQU9NLFNBQVM7UUFBQztJQUM1RSxFQUFFLE9BQU9DLEdBQUc7UUFDVkMsUUFBUXBDLEtBQUssQ0FBQ21DO1FBQ2QsT0FBTyxJQUFJdEMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBMkIsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDM0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpaW1hZ2UtbmV4dC8uL2FwcC9hcGkvZ2VuZXJhdGUvcm91dGUuanM/MzEwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSdcclxuaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknXHJcblxyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSB9KVxyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcclxuICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVULFxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHByb21wdCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIGlmICghcHJvbXB0KSByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdwcm9tcHQgcmVxdWlyZWQnIH0pLCB7IHN0YXR1czogNDAwIH0pXHJcblxyXG4gICAgbGV0IGRhdGFVcmxcclxuICAgIGlmIChwcm9jZXNzLmVudi5IRl9UT0tFTikge1xyXG4gICAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLWluZmVyZW5jZS5odWdnaW5nZmFjZS5jby9tb2RlbHMvYmxhY2stZm9yZXN0LWxhYnMvRkxVWC4xLXNjaG5lbGwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuSEZfVE9LRU59YCwgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXRzOiBwcm9tcHQsIG9wdGlvbnM6IHsgd2FpdF9mb3JfbW9kZWw6IHRydWUgfSB9KSxcclxuICAgICAgfSlcclxuICAgICAgaWYgKCFyLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0hGIGdlbmVyYXRpb24gZmFpbGVkJylcclxuICAgICAgY29uc3QgYnVmID0gQnVmZmVyLmZyb20oYXdhaXQgci5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICBkYXRhVXJsID0gYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke2J1Zi50b1N0cmluZygnYmFzZTY0Jyl9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb3BlbmFpLmltYWdlcy5nZW5lcmF0ZSh7IG1vZGVsOiAnZ3B0LWltYWdlLTEnLCBwcm9tcHQsIHNpemU6ICcxMDI0eDEwMjQnIH0pXHJcbiAgICAgIGNvbnN0IGI2NCA9IHJlc3VsdC5kYXRhWzBdLmI2NF9qc29uXHJcbiAgICAgIGRhdGFVcmwgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7YjY0fWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGxvYWQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChkYXRhVXJsLCB7IGZvbGRlcjogJ2FpaW1hZ2VzJyB9KVxyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyB1cmw6IHVwbG9hZC5zZWN1cmVfdXJsLCBwdWJsaWNJZDogdXBsb2FkLnB1YmxpY19pZCB9KVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ2ZhaWxlZCB0byBnZW5lcmF0ZSBpbWFnZScgfSksIHsgc3RhdHVzOiA1MDAgfSlcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiT3BlbkFJIiwidjIiLCJjbG91ZGluYXJ5Iiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsIkNMT1VESU5BUllfQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9BUElfU0VDUkVUIiwiUE9TVCIsInJlcXVlc3QiLCJwcm9tcHQiLCJqc29uIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhVXJsIiwiSEZfVE9LRU4iLCJyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJpbnB1dHMiLCJvcHRpb25zIiwid2FpdF9mb3JfbW9kZWwiLCJvayIsIkVycm9yIiwiYnVmIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwidG9TdHJpbmciLCJyZXN1bHQiLCJpbWFnZXMiLCJnZW5lcmF0ZSIsIm1vZGVsIiwic2l6ZSIsImI2NCIsImRhdGEiLCJiNjRfanNvbiIsInVwbG9hZCIsInVwbG9hZGVyIiwiZm9sZGVyIiwidXJsIiwic2VjdXJlX3VybCIsInB1YmxpY0lkIiwicHVibGljX2lkIiwiZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/openai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();