"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function NotFound() {
    return (<div style={{ textAlign: "center", marginTop: 60 }}>
      <h1>404 - Page Not Found</h1>
      <react_router_dom_1.Link to="/home">Go Home</react_router_dom_1.Link>
    </div>);
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map