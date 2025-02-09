import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Messages from "./components/messages/Messages";
import MessageForm from "./components/messages/MessageForm";
import NotFound from "./components/notFound/NotFound";
import Hero from "./components/hero/Hero"; // Import Hero section

function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<Hero />} /> {/* Hero as landing page */}
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Messages Routes */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/send-message" element={<MessageForm />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}

export default App;