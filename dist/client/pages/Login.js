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
const react_1 = require("react");
const users_1 = require("../services/users");
const firebase_1 = require("../services/firebase");
const AppContext_1 = require("../context/AppContext");
const react_router_dom_1 = require("react-router-dom");
const firebaseui = __importStar(require("firebaseui"));
const app_1 = __importDefault(require("firebase/compat/app"));
function Login() {
    const { setUser, toast } = (0, AppContext_1.useApp)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [isRegister, setIsRegister] = (0, react_1.useState)(false);
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const uiRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase_1.auth);
        uiRef.current = ui;
        ui.start("#firebaseui-auth-container", {
            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    authResult.user.getIdToken(true).then((idToken) => {
                        const { displayName, email, photoURL, emailVerified } = authResult.user;
                        (0, users_1.authenticate)({
                            authType: "firebase",
                            displayName,
                            email,
                            photoURL,
                            emailVerified,
                            idToken,
                            data: authResult.user,
                        })
                            .then((user) => {
                            setUser(user);
                            toast("Logged in");
                            navigate("/home");
                        })
                            .catch(() => toast("Login failed"));
                    });
                    return false;
                },
                signInFailure: (error) => {
                    console.error("FirebaseUI sign-in failure:", error);
                    return Promise.resolve();
                },
            },
            signInFlow: "popup",
            signInOptions: [app_1.default.auth.GoogleAuthProvider.PROVIDER_ID, app_1.default.auth.FacebookAuthProvider.PROVIDER_ID],
        });
        return () => {
            ui.reset();
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user;
            if (isRegister) {
                user = await (0, users_1.createUser)(username, password);
            }
            else {
                user = await (0, users_1.authenticate)({ authType: "password", username, password });
            }
            setUser(user);
            toast(isRegister ? "Account created" : "Logged in");
            navigate("/home");
        }
        catch {
            toast(isRegister ? "Registration failed" : "Login failed");
        }
    };
    return (<div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <div id="firebaseui-auth-container"/>
    </div>);
}
exports.default = Login;
//# sourceMappingURL=Login.js.map