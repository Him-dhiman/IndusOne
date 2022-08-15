import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const Dashboard = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default Dashboard;