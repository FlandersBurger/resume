import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppProvider } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "./components/ToastContainer";
import { ChatDrawer } from "./components/ChatDrawer";
import Print from "./pages/Print";
import { lazy, Suspense } from "react";
import { useApp } from "./context/AppContext";

const LoginModal = lazy(() => import("./components/LoginModal"));

const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Hobbies = lazy(() => import("./pages/Hobbies"));
const Doodles = lazy(() => import("./pages/Doodles"));
const Contact = lazy(() => import("./pages/Contact"));
const Posts = lazy(() => import("./pages/Posts"));
const Profile = lazy(() => import("./pages/Profile"));
const Workout = lazy(() => import("./pages/Workout"));
const Charades = lazy(() => import("./pages/Charades"));
const Bubbles = lazy(() => import("./pages/Bubbles"));
const Asteroids = lazy(() => import("./pages/Asteroids"));
const Lemmings = lazy(() => import("./pages/Lemmings"));
const Minesweeper = lazy(() => import("./pages/Minesweeper"));
const Yahtzee = lazy(() => import("./pages/Yahtzee"));
const Stew = lazy(() => import("./pages/Stew"));
const Lists = lazy(() => import("./pages/Lists"));
const CareTracker = lazy(() => import("./pages/CareTracker"));
const Policy = lazy(() => import("./pages/Policy"));
const Terms = lazy(() => import("./pages/Terms"));
const TenThingsLists = lazy(() => import("./pages/tenthings/TenThingsLists"));
const TenThingsGame = lazy(() => import("./pages/TenThingsGame"));
const TenThingsPlay = lazy(() => import("./pages/TenThingsPlay"));
const TenThingsAdmin = lazy(() => import("./pages/TenThingsAdmin"));
const TenThingsSass = lazy(() => import("./pages/TenThingsSass"));
const TenThingsStats = lazy(() => import("./pages/TenThingsStats"));
const QuizGoogle = lazy(() => import("./pages/quizzes/QuizGoogle"));
const QuizLogos = lazy(() => import("./pages/quizzes/QuizLogos"));
const QuizAnimals = lazy(() => import("./pages/quizzes/QuizAnimals"));
const QuizFlags = lazy(() => import("./pages/quizzes/QuizFlags"));
const QuizMovies = lazy(() => import("./pages/quizzes/QuizMovies"));
const QuizSkeletons = lazy(() => import("./pages/quizzes/QuizSkeletons"));

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #ffffff;
    --surface: #ffffff;
    --surface-alt: #f5f5f5;
    --border: #dddddd;
    --border-soft: #eeeeee;
    --text: #212529;
    --text-secondary: #5a5a5a;
    --text-muted: #999999;
    --link: #007bff;
    --accent: #337ab7;
    --accent-hover: #286090;
    --accent-soft: #eaf4fb;
    --accent-border: #9fc8e8;
    --danger: #d9534f;
    --danger-hover: #c9302c;
    --success: #5cb85c;
    --success-text: #3c763d;
    --success-strong: #28a745;
    --success-soft: #d4edda;
    --warning-text: #e8a000;
    --warning-soft: #fef9e7;
    --warning-border: #f5d87a;
  }
  [data-theme="dark"] {
    --bg: #1a1a1a;
    --surface: #242424;
    --surface-alt: #2e2e2e;
    --border: #3a3a3a;
    --border-soft: #333333;
    --text: #e8e8e8;
    --text-secondary: #bbbbbb;
    --text-muted: #888888;
    --link: #4dabf7;
    --accent: #5b9bd5;
    --accent-hover: #7bb3e0;
    --accent-soft: #1e2f3d;
    --accent-border: #3a5a75;
    --danger: #e57373;
    --danger-hover: #ef9a9a;
    --success: #81c784;
    --success-text: #8fce8f;
    --success-strong: #2f9e52;
    --success-soft: #1f3d2a;
    --warning-text: #f0b429;
    --warning-soft: #3d341a;
    --warning-border: #6b5a2a;
  }
  body {
    min-width: 300px;
    overflow-x: hidden;
    background-color: var(--bg);
    color: var(--text);
  }
  [data-theme="dark"] {
    .navbar-default {
      background-color: var(--surface);
      border-color: var(--border);
    }
    .navbar-default .navbar-brand,
    .navbar-default .navbar-nav > li > a {
      color: var(--text);
    }
    .navbar-default .navbar-nav > li > a:hover,
    .navbar-default .navbar-nav > li > a:focus {
      color: var(--link);
      background-color: transparent;
    }
    .navbar-default .navbar-toggle .icon-bar {
      background-color: var(--text-muted);
    }
    .dropdown-menu {
      background-color: var(--surface);
      border-color: var(--border);
    }
    .dropdown-menu > li > a {
      color: var(--text);
    }
    .dropdown-menu > li > a:hover,
    .dropdown-menu > li > a:focus {
      background-color: var(--bg);
      color: var(--link);
    }
    .panel,
    .panel-default,
    .well,
    .modal-content {
      background-color: var(--surface);
      border-color: var(--border);
      color: var(--text);
    }
    .panel-default > .panel-heading {
      background-color: var(--bg);
      border-color: var(--border);
      color: var(--text);
    }
    .table {
      color: var(--text);
    }
    .table > thead > tr > th,
    .table > tbody > tr > td,
    .table > tbody > tr > th {
      border-color: var(--border);
    }
    .table-striped > tbody > tr:nth-of-type(odd) {
      background-color: var(--surface-alt);
    }
    .table-hover > tbody > tr:hover {
      background-color: var(--border);
    }
    .form-control,
    input,
    textarea,
    select {
      background-color: var(--surface);
      border-color: var(--border);
      color: var(--text);
    }
    .form-control::placeholder {
      color: var(--text-muted);
    }
    a {
      color: var(--link);
    }
    hr {
      border-color: var(--border);
    }
    code,
    pre {
      background-color: var(--surface);
      color: var(--text);
    }
    .list-group-item {
      background-color: var(--surface);
      border-color: var(--border);
      color: var(--text);
    }
    .btn-default {
      background-color: var(--surface);
      border-color: var(--border);
      color: var(--text);
    }
  }
  .navbar {
    z-index: 100000;
  }
  .container {
    width: 100%;
  }
  .container .page,
  .page {
    margin-top: 55px;
  }
  .loading {
    position: fixed;
    left: 50%;
    top: 50%;
  }
  hr {
    clear: both;
  }
  .modal {
    top: 50px;
  }
  .print {
    display: none;
  }
  @media (max-width: 768px) {
    #footer {
      display: none;
    }
  }
  @media screen {
    #print-content {
      display: none;
    }
  }
  @media print {
    .navbar,
    .container.page,
    #toast {
      display: none !important;
    }
    #print-content {
      display: block !important;
    }
    @page {
      margin: 14mm 12mm;
    }
    thead,
    tfoot {
      display: none !important;
    }
    header,
    footer {
      display: none;
    }
    .print {
      display: block !important;
      -webkit-print-color-adjust: exact;
    }
    .display {
      display: none !important;
    }
  }
`;

function BootstrapTheme() {
  return null;
}

function LazyLoginModal() {
  const { showLogin } = useApp();
  if (!showLogin) return null;
  return (
    <Suspense fallback={null}>
      <LoginModal />
    </Suspense>
  );
}

export default function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BootstrapTheme />
      <Navbar />
      <ToastContainer />
      <LazyLoginModal />
      <ChatDrawer />
      <Print />
      <div className="container page">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/doodles" element={<Doodles />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/hobbies/:hobby" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Navigate to="/home" replace />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/charades" element={<Charades />} />
            <Route path="/bubbles" element={<Bubbles />} />
            <Route path="/asteroids" element={<Asteroids />} />
            <Route path="/lemmings" element={<Lemmings />} />
            <Route path="/minesweeper" element={<Minesweeper />} />
            <Route path="/yahtzee" element={<Yahtzee />} />
            <Route path="/stew" element={<Stew />} />
            <Route path="/care" element={<CareTracker />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/tenthings" element={<TenThingsLists />} />
            <Route path="/tenthings-game/:gameId" element={<TenThingsGame />} />
            <Route path="/tenthings-game" element={<TenThingsGame />} />
            <Route path="/tenthings-play" element={<TenThingsPlay />} />
            <Route path="/tenthings-admin" element={<TenThingsAdmin />} />
            <Route path="/tenthings-sass" element={<TenThingsSass />} />
            <Route path="/tenthings-stats" element={<TenThingsStats />} />
            <Route path="/google" element={<QuizGoogle />} />
            <Route path="/logos" element={<QuizLogos />} />
            <Route path="/animals" element={<QuizAnimals />} />
            <Route path="/flags" element={<QuizFlags />} />
            <Route path="/movies" element={<QuizMovies />} />
            <Route path="/skeletons" element={<QuizSkeletons />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </AppProvider>
  );
}
