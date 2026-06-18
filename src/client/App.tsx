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
const Policy = lazy(() => import("./pages/Policy"));
const Terms = lazy(() => import("./pages/Terms"));
const TenThingsLists = lazy(() => import("./pages/tenthings/TenThingsLists"));
const TenThingsGame = lazy(() => import("./pages/TenThingsGame"));
const TenThingsPlay = lazy(() => import("./pages/TenThingsPlay"));
const TenThingsAdmin = lazy(() => import("./pages/TenThingsAdmin"));
const TenThingsStats = lazy(() => import("./pages/TenThingsStats"));
const QuizGoogle = lazy(() => import("./pages/quizzes/QuizGoogle"));
const QuizLogos = lazy(() => import("./pages/quizzes/QuizLogos"));
const QuizAnimals = lazy(() => import("./pages/quizzes/QuizAnimals"));
const QuizFlags = lazy(() => import("./pages/quizzes/QuizFlags"));
const QuizMovies = lazy(() => import("./pages/quizzes/QuizMovies"));
const QuizSkeletons = lazy(() => import("./pages/quizzes/QuizSkeletons"));

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 300px;
    overflow-x: hidden;
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
            <Route path="/lists" element={<Lists />} />
            <Route path="/tenthings" element={<TenThingsLists />} />
            <Route path="/tenthings-game/:gameId" element={<TenThingsGame />} />
            <Route path="/tenthings-game" element={<TenThingsGame />} />
            <Route path="/tenthings-play" element={<TenThingsPlay />} />
            <Route path="/tenthings-admin" element={<TenThingsAdmin />} />
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
