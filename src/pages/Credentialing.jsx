import React from "react";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

import HeroSection from "../components/credentialing/HeroSection";
import WhyCredentialing from "../components/credentialing/WhyCredentialing";
import WhyDifferent from "../components/credentialing/WhyDifferent";
import ServicesGrid from "../components/credentialing/ServicesGrid";
import WhoWeHelp from "../components/credentialing/WhoWeHelp";
import ProcessTimeline from "../components/credentialing/ProcessTimeline";
import DocumentsSection from "../components/credentialing/DocumentsSection";
import WhyChoose from "../components/credentialing/WhyChoose";
import FAQSection from "../components/credentialing/FAQSection";

const Credentialing = () => {
    return (
        <div className="bg-white overflow-hidden">

            <InnerPageHeader
                title="Dental Insurance Credentialing Services"
                breadcrumb="Services / Credentialing"
            />

            <HeroSection />

            <WhyCredentialing />

            <WhyDifferent />

            <ServicesGrid />

            <WhoWeHelp />

            <WhyChoose />

            <ProcessTimeline />

            <DocumentsSection />

            <FAQSection />

            <div className="bg-[#F8FAFC]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
                    <PartnerSection />
                </div>
            </div>
        </div>
    );
};

export default Credentialing;