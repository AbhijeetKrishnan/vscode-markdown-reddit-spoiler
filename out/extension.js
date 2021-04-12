"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-reddit-spoiler').spoiler);
        }
    };
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map