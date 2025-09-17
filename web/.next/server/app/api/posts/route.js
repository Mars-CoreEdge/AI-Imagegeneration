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
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Admin_Documents_AI_Imagegeneration_web_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/route.js */ \"(rsc)/./app/api/posts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Admin\\\\Documents\\\\AI-Imagegeneration\\\\web\\\\app\\\\api\\\\posts\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Admin_Documents_AI_Imagegeneration_web_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/posts/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbiU1Q0RvY3VtZW50cyU1Q0FJLUltYWdlZ2VuZXJhdGlvbiU1Q3dlYiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQWRtaW4lNUNEb2N1bWVudHMlNUNBSS1JbWFnZWdlbmVyYXRpb24lNUN3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQytCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWlpbWFnZS1uZXh0Lz9lMDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXERvY3VtZW50c1xcXFxBSS1JbWFnZWdlbmVyYXRpb25cXFxcd2ViXFxcXGFwcFxcXFxhcGlcXFxccG9zdHNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Bvc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcG9zdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bvc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRG9jdW1lbnRzXFxcXEFJLUltYWdlZ2VuZXJhdGlvblxcXFx3ZWJcXFxcYXBwXFxcXGFwaVxcXFxwb3N0c1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcG9zdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/posts/route.js":
/*!********************************!*\
  !*** ./app/api/posts/route.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Post */ \"(rsc)/./models/Post.js\");\n\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nasync function GET() {\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().sort({\n        createdAt: -1\n    }).lean();\n    return Response.json(posts);\n}\nasync function POST(request) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const { author, prompt, image } = await request.json();\n        if (!author || !prompt || !image) return new Response(JSON.stringify({\n            error: \"author, prompt, image required\"\n        }), {\n            status: 400\n        });\n        let imageUrl = image;\n        let publicId;\n        if (image.startsWith(\"data:\")) {\n            const upload = await cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.uploader.upload(image, {\n                folder: \"aiimages\"\n            });\n            imageUrl = upload.secure_url;\n            publicId = upload.public_id;\n        }\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            author,\n            prompt,\n            imageUrl,\n            cloudinaryId: publicId\n        });\n        return new Response(JSON.stringify(post), {\n            status: 201\n        });\n    } catch (e) {\n        console.error(e);\n        return new Response(JSON.stringify({\n            error: \"failed to create post\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ007QUFDWjtBQUV2Q0MsMENBQVVBLENBQUNHLE1BQU0sQ0FBQztJQUNoQkMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUI7SUFDN0NDLFNBQVNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQ3ZDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLHFCQUFxQjtBQUMvQztBQUVPLGVBQWVDO0lBQ3BCLE1BQU1YLDBEQUFpQkE7SUFDdkIsTUFBTVksUUFBUSxNQUFNWCxvREFBSUEsQ0FBQ1ksSUFBSSxHQUFHQyxJQUFJLENBQUM7UUFBRUMsV0FBVyxDQUFDO0lBQUUsR0FBR0MsSUFBSTtJQUM1RCxPQUFPQyxTQUFTQyxJQUFJLENBQUNOO0FBQ3ZCO0FBRU8sZUFBZU8sS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTXBCLDBEQUFpQkE7UUFDdkIsTUFBTSxFQUFFcUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ILFFBQVFGLElBQUk7UUFDcEQsSUFBSSxDQUFDRyxVQUFVLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxPQUFPLElBQUlOLFNBQVNPLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQWlDLElBQUk7WUFBRUMsUUFBUTtRQUFJO1FBRWpJLElBQUlDLFdBQVdMO1FBQ2YsSUFBSU07UUFDSixJQUFJTixNQUFNTyxVQUFVLENBQUMsVUFBVTtZQUM3QixNQUFNQyxTQUFTLE1BQU1oQywwQ0FBVUEsQ0FBQ2lDLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDUixPQUFPO2dCQUFFVSxRQUFRO1lBQVc7WUFDNUVMLFdBQVdHLE9BQU9HLFVBQVU7WUFDNUJMLFdBQVdFLE9BQU9JLFNBQVM7UUFDN0I7UUFFQSxNQUFNQyxPQUFPLE1BQU1uQyxvREFBSUEsQ0FBQ29DLE1BQU0sQ0FBQztZQUFFaEI7WUFBUUM7WUFBUU07WUFBVVUsY0FBY1Q7UUFBUztRQUNsRixPQUFPLElBQUlaLFNBQVNPLEtBQUtDLFNBQVMsQ0FBQ1csT0FBTztZQUFFVCxRQUFRO1FBQUk7SUFDMUQsRUFBRSxPQUFPWSxHQUFHO1FBQ1ZDLFFBQVFkLEtBQUssQ0FBQ2E7UUFDZCxPQUFPLElBQUl0QixTQUFTTyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUF3QixJQUFJO1lBQUVDLFFBQVE7UUFBSTtJQUN4RjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWlpbWFnZS1uZXh0Ly4vYXBwL2FwaS9wb3N0cy9yb3V0ZS5qcz84MmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tICdjbG91ZGluYXJ5J1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYidcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1Bvc3QnXHJcblxyXG5jbG91ZGluYXJ5LmNvbmZpZyh7XHJcbiAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9DTE9VRF9OQU1FLFxyXG4gIGFwaV9rZXk6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX0tFWSxcclxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVQsXHJcbn0pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCgpLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pLmxlYW4oKVxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHBvc3RzKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcclxuICAgIGNvbnN0IHsgYXV0aG9yLCBwcm9tcHQsIGltYWdlIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG4gICAgaWYgKCFhdXRob3IgfHwgIXByb21wdCB8fCAhaW1hZ2UpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ2F1dGhvciwgcHJvbXB0LCBpbWFnZSByZXF1aXJlZCcgfSksIHsgc3RhdHVzOiA0MDAgfSlcclxuXHJcbiAgICBsZXQgaW1hZ2VVcmwgPSBpbWFnZVxyXG4gICAgbGV0IHB1YmxpY0lkXHJcbiAgICBpZiAoaW1hZ2Uuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgICBjb25zdCB1cGxvYWQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChpbWFnZSwgeyBmb2xkZXI6ICdhaWltYWdlcycgfSlcclxuICAgICAgaW1hZ2VVcmwgPSB1cGxvYWQuc2VjdXJlX3VybFxyXG4gICAgICBwdWJsaWNJZCA9IHVwbG9hZC5wdWJsaWNfaWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdC5jcmVhdGUoeyBhdXRob3IsIHByb21wdCwgaW1hZ2VVcmwsIGNsb3VkaW5hcnlJZDogcHVibGljSWQgfSlcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocG9zdCksIHsgc3RhdHVzOiAyMDEgfSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdmYWlsZWQgdG8gY3JlYXRlIHBvc3QnIH0pLCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInYyIiwiY2xvdWRpbmFyeSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiUG9zdCIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ0xPVURJTkFSWV9DTE9VRF9OQU1FIiwiYXBpX2tleSIsIkNMT1VESU5BUllfQVBJX0tFWSIsImFwaV9zZWNyZXQiLCJDTE9VRElOQVJZX0FQSV9TRUNSRVQiLCJHRVQiLCJwb3N0cyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwibGVhbiIsIlJlc3BvbnNlIiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwiYXV0aG9yIiwicHJvbXB0IiwiaW1hZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJpbWFnZVVybCIsInB1YmxpY0lkIiwic3RhcnRzV2l0aCIsInVwbG9hZCIsInVwbG9hZGVyIiwiZm9sZGVyIiwic2VjdXJlX3VybCIsInB1YmxpY19pZCIsInBvc3QiLCJjcmVhdGUiLCJjbG91ZGluYXJ5SWQiLCJlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || \"\";\nlet isConnected = false;\nasync function connectToDatabase() {\n    if (isConnected) return;\n    if (!MONGO_URI || !MONGO_URI.startsWith(\"mongodb\")) {\n        console.warn(\"Mongo URI missing/invalid. Set MONGO_URI. Proceeding without DB connection.\");\n        return;\n    }\n    if (mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.readyState >= 1) {\n        isConnected = true;\n        return;\n    }\n    await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(MONGO_URI);\n    isConnected = true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDRixTQUFTLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0FBRXRFLElBQUlDLGNBQWM7QUFFWCxlQUFlQztJQUNwQixJQUFJRCxhQUFhO0lBQ2pCLElBQUksQ0FBQ0osYUFBYSxDQUFDQSxVQUFVTSxVQUFVLENBQUMsWUFBWTtRQUNsREMsUUFBUUMsSUFBSSxDQUFDO1FBQ2I7SUFDRjtJQUNBLElBQUlULGdEQUFtQixDQUFDVyxVQUFVLElBQUksR0FBRztRQUN2Q04sY0FBYztRQUNkO0lBQ0Y7SUFDQSxNQUFNTCw2Q0FBZ0IsQ0FBQ0M7SUFDdkJJLGNBQWM7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWltYWdlLW5leHQvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBNT05HT19VUkkgPSBwcm9jZXNzLmVudi5NT05HT19VUkkgfHwgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJydcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgaWYgKGlzQ29ubmVjdGVkKSByZXR1cm5cclxuICBpZiAoIU1PTkdPX1VSSSB8fCAhTU9OR09fVVJJLnN0YXJ0c1dpdGgoJ21vbmdvZGInKSkge1xyXG4gICAgY29uc29sZS53YXJuKCdNb25nbyBVUkkgbWlzc2luZy9pbnZhbGlkLiBTZXQgTU9OR09fVVJJLiBQcm9jZWVkaW5nIHdpdGhvdXQgREIgY29ubmVjdGlvbi4nKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkkpXHJcbiAgaXNDb25uZWN0ZWQgPSB0cnVlXHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3RUb0RhdGFiYXNlIiwic3RhcnRzV2l0aCIsImNvbnNvbGUiLCJ3YXJuIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    author: {\n        type: String,\n        required: true\n    },\n    prompt: {\n        type: String,\n        required: true\n    },\n    imageUrl: {\n        type: String,\n        required: true\n    },\n    cloudinaryId: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Post || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"Post\", PostSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUUvQixNQUFNQyxhQUFhLElBQUlELDRDQUFlLENBQ3BDO0lBQ0VHLFFBQVE7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDQyxRQUFRO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Q0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNHLGNBQWM7UUFBRUwsTUFBTUM7SUFBTztBQUMvQixHQUNBO0lBQUVLLFlBQVk7QUFBSztBQUdyQixpRUFBZVYsNENBQWUsQ0FBQ1ksSUFBSSxJQUFJWiwyQ0FBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haWltYWdlLW5leHQvLi9tb2RlbHMvUG9zdC5qcz80NmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IFBvc3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIGF1dGhvcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwcm9tcHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaW1hZ2VVcmw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgY2xvdWRpbmFyeUlkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlBvc3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Bvc3QnLCBQb3N0U2NoZW1hKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlBvc3RTY2hlbWEiLCJTY2hlbWEiLCJhdXRob3IiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwcm9tcHQiLCJpbWFnZVVybCIsImNsb3VkaW5hcnlJZCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQb3N0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Post.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDocuments%5CAI-Imagegeneration%5Cweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();