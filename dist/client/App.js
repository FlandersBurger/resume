"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("./context/AppContext");
const Navbar_1 = require("./components/Navbar");
const ToastContainer_1 = require("./components/ToastContainer");
const Home_1 = __importDefault(require("./pages/Home"));
const Experience_1 = __importDefault(require("./pages/Experience"));
const Skills_1 = __importDefault(require("./pages/Skills"));
const Hobbies_1 = __importDefault(require("./pages/Hobbies"));
const Contact_1 = __importDefault(require("./pages/Contact"));
const Posts_1 = __importDefault(require("./pages/Posts"));
const Profile_1 = __importDefault(require("./pages/Profile"));
const Login_1 = __importDefault(require("./pages/Login"));
const Workout_1 = __importDefault(require("./pages/Workout"));
const Charades_1 = __importDefault(require("./pages/Charades"));
const Bubbles_1 = __importDefault(require("./pages/Bubbles"));
const Asteroids_1 = __importDefault(require("./pages/Asteroids"));
const Lemmings_1 = __importDefault(require("./pages/Lemmings"));
const Lists_1 = __importDefault(require("./pages/Lists"));
const TenThingsLists_1 = __importDefault(require("./pages/tenthings/TenThingsLists"));
const TenThingsGame_1 = __importDefault(require("./pages/TenThingsGame"));
const TenThingsPlay_1 = __importDefault(require("./pages/TenThingsPlay"));
const TenThingsAdmin_1 = __importDefault(require("./pages/TenThingsAdmin"));
const TenThingsStats_1 = __importDefault(require("./pages/TenThingsStats"));
const QuizGoogle_1 = __importDefault(require("./pages/quizzes/QuizGoogle"));
const QuizLogos_1 = __importDefault(require("./pages/quizzes/QuizLogos"));
const QuizAnimals_1 = __importDefault(require("./pages/quizzes/QuizAnimals"));
const QuizFlags_1 = __importDefault(require("./pages/quizzes/QuizFlags"));
const QuizMovies_1 = __importDefault(require("./pages/quizzes/QuizMovies"));
const QuizSkeletons_1 = __importDefault(require("./pages/quizzes/QuizSkeletons"));
const Print_1 = __importDefault(require("./pages/Print"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
require("./styles/app.css");
const react_1 = require("react");
const AppContext_2 = require("./context/AppContext");
function BootstrapTheme() {
    const { themeCounter } = (0, AppContext_2.useApp)();
    (0, react_1.useEffect)(() => {
        const link = document.getElementById("bootstrap-theme");
        if (link)
            link.href = `/bootstrap${themeCounter}.min.css`;
    }, [themeCounter]);
    return null;
}
function App() {
    return (<AppContext_1.AppProvider>
      <BootstrapTheme />
      <Navbar_1.Navbar />
      <ToastContainer_1.ToastContainer />
      <Print_1.default />
      <div className="container page">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<react_router_dom_1.Navigate to="/home" replace/>}/>
          <react_router_dom_1.Route path="/home" element={<Home_1.default />}/>
          <react_router_dom_1.Route path="/experience" element={<Experience_1.default />}/>
          <react_router_dom_1.Route path="/skills" element={<Skills_1.default />}/>
          <react_router_dom_1.Route path="/hobbies" element={<Hobbies_1.default />}/>
          <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}/>
          <react_router_dom_1.Route path="/posts" element={<Posts_1.default />}/>
          <react_router_dom_1.Route path="/profile" element={<Profile_1.default />}/>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="/workout" element={<Workout_1.default />}/>
          <react_router_dom_1.Route path="/charades" element={<Charades_1.default />}/>
          <react_router_dom_1.Route path="/bubbles" element={<Bubbles_1.default />}/>
          <react_router_dom_1.Route path="/asteroids" element={<Asteroids_1.default />}/>
          <react_router_dom_1.Route path="/lemmings" element={<Lemmings_1.default />}/>
          <react_router_dom_1.Route path="/lists" element={<Lists_1.default />}/>
          <react_router_dom_1.Route path="/tenthings" element={<TenThingsLists_1.default />}/>
          <react_router_dom_1.Route path="/tenthings/:gameId" element={<TenThingsGame_1.default />}/>
          <react_router_dom_1.Route path="/tenthings-play" element={<TenThingsPlay_1.default />}/>
          <react_router_dom_1.Route path="/tenthings-admin" element={<TenThingsAdmin_1.default />}/>
          <react_router_dom_1.Route path="/tenthings-stats" element={<TenThingsStats_1.default />}/>
          <react_router_dom_1.Route path="/google" element={<QuizGoogle_1.default />}/>
          <react_router_dom_1.Route path="/logos" element={<QuizLogos_1.default />}/>
          <react_router_dom_1.Route path="/animals" element={<QuizAnimals_1.default />}/>
          <react_router_dom_1.Route path="/flags" element={<QuizFlags_1.default />}/>
          <react_router_dom_1.Route path="/movies" element={<QuizMovies_1.default />}/>
          <react_router_dom_1.Route path="/skeletons" element={<QuizSkeletons_1.default />}/>
          <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
        </react_router_dom_1.Routes>
      </div>
    </AppContext_1.AppProvider>);
}
exports.default = App;
//# sourceMappingURL=App.js.map