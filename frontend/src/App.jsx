import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ReportAnIssue from './ReportAnIssue';
import CitizenDashboard from './CitizenDashboard';
import IssueReport from './IssueReport';
import Login from './Login';
import SignUp from './SignUp';
import CivicSamadhanLanding from './CivicSamadhanLanding';
import PageTransition from './PageTransition';

// Placeholder for authentication logic
const isLoggedIn = () => {
  // Replace with actual authentication check
  return true;
};

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <CivicSamadhanLanding />
          </PageTransition>
        } />
        <Route path="/login" element={
          <PageTransition>
            <Login />
          </PageTransition>
        } />
        <Route path="/signup" element={
          <PageTransition>
            <SignUp />
          </PageTransition>
        } />
        <Route
          path="/report-an-issue"
          element={
            <ProtectedRoute>
              <PageTransition>
                <ReportAnIssue />
              </PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageTransition>
                <CitizenDashboard />
              </PageTransition>
            </ProtectedRoute>
          }
        />
        <Route
          path="/issue-report"
          element={
            <ProtectedRoute>
              <PageTransition>
                <IssueReport />
              </PageTransition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
