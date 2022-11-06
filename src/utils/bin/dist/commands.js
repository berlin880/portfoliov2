"use strict";
// List of commands that do not require API calls
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.banner = exports.sudo = exports.emacs = exports.nvim = exports.vim = exports.vi = exports.date = exports.cd = exports.ls = exports.whoami = exports.echo = exports.reddit = exports.bing = exports.duckduckgo = exports.google = exports.linkedin = exports.github = exports.email = exports.donate = exports.resume = exports.about = exports.repo = exports.help = void 0;
var bin = require("./index");
var config_json_1 = require("../../../config.json");
// Help
exports.help = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    var commands, c, i;
    return __generator(this, function (_a) {
        commands = Object.keys(bin).sort().join(', ');
        c = '';
        for (i = 1; i <= Object.keys(bin).sort().length; i++) {
            if (i % 7 === 0) {
                c += Object.keys(bin).sort()[i - 1] + '\n';
            }
            else {
                c += Object.keys(bin).sort()[i - 1] + ' ';
            }
        }
        return [2 /*return*/, "Welcome! Here are all the available commands:\n\n" + c + "\n\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n\nType 'sumfetch' to display summary.\n"];
    });
}); };
// Redirection
exports.repo = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("" + config_json_1["default"].repo);
        return [2 /*return*/, 'Opening Github repository...'];
    });
}); };
// About
exports.about = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "Hi, I am " + config_json_1["default"].name + ". \nWelcome to my website!\nMore about me:\n'sumfetch' - short summary.\n'resume' - my latest resume.\n'readme' - my github readme."];
    });
}); };
exports.resume = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("" + config_json_1["default"].resume_url);
        return [2 /*return*/, 'Opening resume...'];
    });
}); };
// Donate
exports.donate = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "thank you for your interest. \nhere are the ways you can support my work:\n- <u><a class=\"text-light-blue dark:text-dark-blue underline\" href=\"" + config_json_1["default"].donate_urls.paypal + "\" target=\"_blank\">paypal</a></u>\n- <u><a class=\"text-light-blue dark:text-dark-blue underline\" href=\"" + config_json_1["default"].donate_urls.patreon + "\" target=\"_blank\">patreon</a></u>\n"];
    });
}); };
// Contact
exports.email = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("mail me :" + config_json_1["default"].email);
        return [2 /*return*/, "Opening email :" + config_json_1["default"].email + "..."];
    });
}); };
exports.github = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://github.com/" + config_json_1["default"].social.github + "/");
        return [2 /*return*/, 'Opening github...'];
    });
}); };
exports.linkedin = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://www.linkedin.com/in/" + config_json_1["default"].social.linkedin + "/");
        return [2 /*return*/, 'Opening linkedin...'];
    });
}); };
// Search
exports.google = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://google.com/search?q=" + args.join(' '));
        return [2 /*return*/, "Searching google for " + args.join(' ') + "..."];
    });
}); };
exports.duckduckgo = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://duckduckgo.com/?q=" + args.join(' '));
        return [2 /*return*/, "Searching duckduckgo for " + args.join(' ') + "..."];
    });
}); };
exports.bing = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://bing.com/search?q=" + args.join(' '));
        return [2 /*return*/, "Wow, really? You are using bing for " + args.join(' ') + "?"];
    });
}); };
exports.reddit = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open("https://www.reddit.com/search/?q=" + args.join(' '));
        return [2 /*return*/, "Searching reddit for " + args.join(' ') + "..."];
    });
}); };
// Typical linux commands
exports.echo = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, args.join(' ')];
    });
}); };
exports.whoami = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "" + config_json_1["default"].ps1_username];
    });
}); };
exports.ls = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "a\nbunch\nof\nfake\ndirectories"];
    });
}); };
exports.cd = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "unfortunately, i cannot afford more directories.\nif you want to help, you can type 'donate'."];
    });
}); };
exports.date = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Date().toString()];
    });
}); };
exports.vi = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "woah, you still use 'vi'? just try 'vim'."];
    });
}); };
exports.vim = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "'vim' is so outdated. how about 'nvim'?"];
    });
}); };
exports.nvim = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "'nvim'? too fancy. why not 'emacs'?"];
    });
}); };
exports.emacs = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "you know what? just use vscode."];
    });
}); };
exports.sudo = function (args) { return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
        return [2 /*return*/, "Permission denied: with little power comes... no responsibility? "];
    });
}); };
// Banner
exports.banner = function (args) {
    return "\n   \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \n  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \n  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \n  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \n  \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n  \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D    \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n                                                                                                                        \nType 'help' to see the list of available commands.\nType 'sumfetch' to display summary.\nType 'repo' or click <u><a class=\"text-light-blue dark:text-dark-blue underline\" href=\"" + config_json_1["default"].repo + "\" target=\"_blank\">here</a></u> for the Github repository.\n";
};
