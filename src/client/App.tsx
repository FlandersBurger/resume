import { Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "./components/ToastContainer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Workout from "./pages/Workout";
import Charades from "./pages/Charades";
import Bubbles from "./pages/Bubbles";
import Asteroids from "./pages/Asteroids";
import Lemmings from "./pages/Lemmings";
import Lists from "./pages/Lists";
import TenThings from "./pages/TenThings";
import TenThingsGame from "./pages/TenThingsGame";
import TenThingsPlay from "./pages/TenThingsPlay";
import TenThingsAdmin from "./pages/TenThingsAdmin";
import TenThingsStats from "./pages/TenThingsStats";
import QuizGoogle from "./pages/quizzes/QuizGoogle";
import QuizLogos from "./pages/quizzes/QuizLogos";
import QuizAnimals from "./pages/quizzes/QuizAnimals";
import QuizMovies from "./pages/quizzes/QuizMovies";
import QuizSkeletons from "./pages/quizzes/QuizSkeletons";
import NotFound from "./pages/NotFound";
import "./styles/app.css";

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <ToastContainer />
      <div className="container page">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/charades" element={<Charades />} />
          <Route path="/bubbles" element={<Bubbles />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/lemmings" element={<Lemmings />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/tenthings" element={<TenThings />} />
          <Route path="/tenthings/:gameId" element={<TenThingsGame />} />
          <Route path="/tenthings-play" element={<TenThingsPlay />} />
          <Route path="/tenthings-admin" element={<TenThingsAdmin />} />
          <Route path="/tenthings-stats" element={<TenThingsStats />} />
          <Route path="/google" element={<QuizGoogle />} />
          <Route path="/logos" element={<QuizLogos />} />
          <Route path="/animals" element={<QuizAnimals />} />
          <Route path="/movies" element={<QuizMovies />} />
          <Route path="/skeletons" element={<QuizSkeletons />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AppProvider>
  );
}
