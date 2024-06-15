import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
const BeneficiaryList = lazy(() => import("./components/BeneficiaryList"))
const ViewBeneficiary = lazy(() => import("./components/ViewBeneficiary"));
const BeneficiaryForm = lazy(() => import("./components/BeneficiaryForm"));

function App() {
  return (
    <Router basename="/beneficiary-management">
      <div className="container">
        <Header />
        <SubHeader />
        <ErrorBoundary>
          <Suspense fallback={<div style={{ margin: 'auto', textAlign: 'center' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<BeneficiaryList />} />
              <Route path="/add" element={<BeneficiaryForm isEditMode={false} />} />
              <Route
                path="/edit/:id"
                element={<BeneficiaryForm isEditMode={true} />}
              />
              <Route path="/view/:id" element={<ViewBeneficiary />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
