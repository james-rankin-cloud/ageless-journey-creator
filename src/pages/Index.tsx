import { Navigate } from "react-router-dom";

// Redirect legacy index to home
const Index = () => <Navigate to="/" replace />;
export default Index;
