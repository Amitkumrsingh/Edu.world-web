import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import LandingPage from "./landing/landing.jsx";
import DreamCollege  from './DreamCollege/DreamCollege.jsx';
import ImportantUpdates from './ImportantUpdates/ImportantUpdates.jsx';
import TopColleges from './TopColleges/TopColleges.jsx';
import StepTowords from './StepTowords/StepTowords.jsx';
import TopExams from './TopExams/TopExams.jsx';
import WishToStudy from './WishToStudy/WishToStudy.jsx';
import Discounts from './Discounts/Discounts.jsx';
import StudyAbroad from './StudyAbroad/StudyAbroad.jsx';
import Footer from './Footer/Footer.jsx';


function Homepage() {
    return (
      <>
        <Navbar />
        <LandingPage />
        <DreamCollege />
        <ImportantUpdates />
        <TopColleges />
        <StepTowords />
        <TopExams />
        <WishToStudy />
        <Discounts />
        <StudyAbroad />
        <Footer />
    </>
  );
}

export default Homepage;