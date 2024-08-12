import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import BuyPage from './BuyPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import PlanPage from './PlanPage';
import SignupPage from './SignupPage';
import AdminDashboard from './AdminDashboard';
import SellPage from './SellPage';
import PlanAdmin from './PlanAdmin';
import HouseList from './HouseList';
import AuthGuard from './AuthGuard';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import BrokerLogin from './Broker/BrokerLogin';
import BrokerSignup from './Broker/BrokerSignup';
import BrokerSidebar from './Broker/BrokerSidebar';
import BrokerDashboard from './Broker/BrokerDashboard';
import BrokerAdd from './Broker/BrokerAdd';
import Approval from './Approval';
import PropertyPage from './PropertyPage';
import LuxuryApartmentPage from './LuxuryApartmentPage';

const App = () => {
  return (
    <AuthProvider >
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AuthGuard><AboutPage /></AuthGuard>} />
        <Route path="/buy" element={<AuthGuard><BuyPage /></AuthGuard>} />
        <Route path="/plan" element={<AuthGuard><PlanPage /></AuthGuard>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/brokerlogin" element={<BrokerLogin />}/>
        <Route path="/brokersignup" element={<BrokerSignup />}/>
        <Route path="/brokersidebar" element={<BrokerSidebar />}/>
        <Route path="/modern-family-home" element={<PropertyPage />}/>
        <Route path="/luxury-apartment" element={<LuxuryApartmentPage />} />
        <Route path="/brokerdash" element={<BrokerDashboard />}/>
        <Route path="/brokeradd" element={<BrokerAdd />}/>
        <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/sell"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <SellPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/planadmin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <PlanAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/HouseList"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <HouseList />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/admin/manage" element={<ProtectedRoute allowedRoles={['admin']}>
            <ManageUser />
          </ProtectedRoute>}
          /> */}
          <Route path="/admin/approval" element={<ProtectedRoute allowedRoles={['admin']}>
            <Approval />
          </ProtectedRoute>}
          />
        {/* <Route path="/customersupport" element={<AuthGuard><SupportPage /></AuthGuard>}/> */}
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;