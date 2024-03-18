"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Page1_1 = __importDefault(require("./Page1"));
const Page2_1 = __importDefault(require("./Page2"));
function App() {
    const [currentPage, setCurrentPage] = (0, react_1.useState)('page1');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (react_1.default.createElement("div", { className: `App ${currentPage}` },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("div", { className: "app-header-title" }, currentPage === 'page1' ? 'Electron' : 'React'),
            react_1.default.createElement("nav", null,
                react_1.default.createElement("button", { className: currentPage === 'page1' ? 'active' : '', onClick: () => handlePageChange('page1') }, "Electron"),
                react_1.default.createElement("button", { className: currentPage === 'page2' ? 'active' : '', onClick: () => handlePageChange('page2') }, "React"))),
        currentPage === 'page1' ? react_1.default.createElement(Page1_1.default, null) : react_1.default.createElement(Page2_1.default, null)));
}
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
