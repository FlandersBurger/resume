import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppProvider } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "./components/ToastContainer";
import Print from "./pages/Print";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import LoginModal from "./components/LoginModal";
import Workout from "./pages/Workout";
import Charades from "./pages/Charades";
import Bubbles from "./pages/Bubbles";
import Asteroids from "./pages/Asteroids";
import Lemmings from "./pages/Lemmings";
import Lists from "./pages/Lists";
import Policy from "./pages/Policy";
import TenThingsLists from "./pages/tenthings/TenThingsLists";
import TenThingsGame from "./pages/TenThingsGame";
import TenThingsPlay from "./pages/TenThingsPlay";
import TenThingsAdmin from "./pages/TenThingsAdmin";
import TenThingsStats from "./pages/TenThingsStats";
import QuizGoogle from "./pages/quizzes/QuizGoogle";
import QuizLogos from "./pages/quizzes/QuizLogos";
import QuizAnimals from "./pages/quizzes/QuizAnimals";
import QuizFlags from "./pages/quizzes/QuizFlags";
import QuizMovies from "./pages/quizzes/QuizMovies";
import QuizSkeletons from "./pages/quizzes/QuizSkeletons";

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
import { useApp } from "./context/AppContext";

function BootstrapTheme() {
  const { themeCounter } = useApp();
  useEffect(() => {
    const link = document.getElementById("bootstrap-theme") as HTMLLinkElement | null;
    if (link) link.href = `/bootstrap${themeCounter}.min.css`;
  }, [themeCounter]);
  return null;
}

export default function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BootstrapTheme />
      <Navbar />
      <ToastContainer />
      <LoginModal />
      <Print />
      <div className="container page">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbies/:hobby" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Navigate to="/home" replace />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/charades" element={<Charades />} />
          <Route path="/bubbles" element={<Bubbles />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/lemmings" element={<Lemmings />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/tenthings" element={<TenThingsLists />} />
          <Route path="/tenthings/:gameId" element={<TenThingsGame />} />
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
      </div>
    </AppProvider>
  );
}
