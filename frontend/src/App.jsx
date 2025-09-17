import { Routes, Route, Navigate } from 'react-router-dom';
import ReportAnIssue from './ReportAnIssue';
import CitizenDashboard from './CitizenDashboard';
import IssueReport from './IssueReport';
import Login from './Login';
import SignUp from './SignUp';
import CivicSamadhanLanding from './CivicSamadhanLanding';

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
  return (
    <Routes>
      <Route path="/" element={<CivicSamadhanLanding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/report-an-issue"
        element={
          <ProtectedRoute>
            <ReportAnIssue />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <CitizenDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/issue-report"
        element={
          <ProtectedRoute>
            <IssueReport />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
