import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Award, Calendar, ChevronDown, ChevronUp, Filter, Bell, User, Heart, Star, Building } from 'lucide-react';

// Mock data that matches Internshala structure exactly
const mockInternships = [
  {
    id: '1',
    title: 'Web Development',
    company_name: 'Tech Solutions Pvt Ltd',
    company_logo: '',
    location_names: ['Work From Home'],
    start_date: 'Immediately',
    duration: '3 Months',
    stipend: { salary: '10000', salarytype1: 'Monthly' },
    application_deadline: '31 Jan',
    posted_on: '2 days ago',
    work_from_home: true,
    part_time: false,
    tags: ['Internship with job offer'],
    profile_name: 'Web Development',
    apply_link: '#',
    applicants: 245,
    company_type: 'Private'
  },
  {
    id: '2',
    title: 'Content Writing',
    company_name: 'Content Hub Media',
    company_logo: '',
    location_names: ['Mumbai'],
    start_date: '15 Jan',
    duration: '6 Months',
    stipend: { salary: '8000', salarytype1: 'Monthly' },
    application_deadline: '28 Jan',
    posted_on: '1 day ago',
    work_from_home: false,
    part_time: true,
    tags: [],
    profile_name: 'Content Writing',
    apply_link: '#',
    applicants: 156,
    company_type: 'Startup'
  },
  {
    id: '3',
    title: 'UI/UX Design',
    company_name: 'Design Masters Studio',
    company_logo: '',
    location_names: ['Delhi'],
    start_date: 'Immediately',
    duration: '2 Months',
    stipend: { salary: '12000', salarytype1: 'Monthly' },
    application_deadline: '25 Jan',
    posted_on: '5 days ago',
    work_from_home: false,
    part_time: false,
    tags: ['Internship with job offer'],
    profile_name: 'UI/UX Design',
    apply_link: '#',
    applicants: 89,
    company_type: 'Private'
  },
  {
    id: '4',
    title: 'Digital Marketing',
    company_name: 'Growth Labs Pvt Ltd',
    company_logo: '',
    location_names: ['Work From Home'],
    start_date: '1 Feb',
    duration: '3 Months',
    stipend: { salary: '15000', salarytype1: 'Monthly' },
    application_deadline: '30 Jan',
    posted_on: '3 days ago',
    work_from_home: true,
    part_time: false,
    tags: [],
    profile_name: 'Digital Marketing',
    apply_link: '#',
    applicants: 334,
    company_type: 'Startup'
  },
  {
    id: '5',
    title: 'Data Science',
    company_name: 'Data Insights Solutions',
    company_logo: '',
    location_names: ['Hyderabad'],
    start_date: 'Immediately',
    duration: '6 Months',
    stipend: { salary: '20000', salarytype1: 'Monthly' },
    application_deadline: '2 Feb',
    posted_on: '2 days ago',
    work_from_home: false,
    part_time: false,
    tags: ['Internship with job offer'],
    profile_name: 'Data Science',
    apply_link: '#',
    applicants: 567,
    company_type: 'Private'
  },
  {
    id: '6',
    title: 'Mobile App Development',
    company_name: 'App Innovations Tech',
    company_logo: '',
    location_names: ['Work From Home'],
    start_date: '10 Jan',
    duration: '4 Months',
    stipend: { salary: '15000', salarytype1: 'Monthly' },
    application_deadline: '26 Jan',
    posted_on: '4 days ago',
    work_from_home: true,
    part_time: false,
    tags: [],
    profile_name: 'Mobile App Development',
    apply_link: '#',
    applicants: 298,
    company_type: 'Startup'
  }
];

// Custom styles to match Internshala exactly
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  
  .internshala-blue {
    color: #008BDC;
  }
  
  .internshala-bg-blue {
    background-color: #008BDC;
  }
  
  .internshala-border-blue {
    border-color: #008BDC;
  }
  
  .internshala-hover-blue:hover {
    background-color: #007ACC;
  }
  
  .internshala-card {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    transition: all 0.2s ease;
  }
  
  .internshala-card:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    border-color: #d0d0d0;
  }
  
  .internshala-filter-section {
    border-bottom: 1px solid #e5e5e5;
  }
  
  .internshala-filter-section:last-child {
    border-bottom: none;
  }
  
  .internshala-checkbox {
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 3px;
    margin-right: 8px;
  }
  
  .internshala-checkbox:checked {
    background-color: #008BDC;
    border-color: #008BDC;
  }
  
  .internshala-tag-blue {
    background-color: #E8F4FD;
    color: #008BDC;
    border: 1px solid #B8E0FF;
  }
  
  .internshala-tag-green {
    background-color: #E8F5E8;
    color: #2E7D32;
    border: 1px solid #A5D6A7;
  }
  
  .internshala-tag-orange {
    background-color: #FFF3E0;
    color: #F57C00;
    border: 1px solid #FFCC02;
  }
  
  .internshala-header-shadow {
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  
  .internshala-sidebar {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    position: sticky;
    top: 20px;
  }
  
  .internshala-search-box {
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    font-size: 16px;
    padding: 12px 16px 12px 44px;
    transition: all 0.2s ease;
  }
  
  .internshala-search-box:focus {
    border-color: #008BDC;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 139, 220, 0.1);
  }
  
  .company-logo {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 1px solid #dee2e6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    color: #495057;
  }
  
  .internship-title {
    font-size: 20px;
    font-weight: 600;
    color: #212529;
    line-height: 1.3;
    margin-bottom: 4px;
  }
  
  .internship-title:hover {
    color: #008BDC;
    cursor: pointer;
  }
  
  .company-name {
    font-size: 15px;
    font-weight: 500;
    color: #6c757d;
    margin-bottom: 8px;
  }
  
  .company-name:hover {
    color: #008BDC;
    cursor: pointer;
  }
  
  .detail-label {
    font-size: 11px;
    font-weight: 500;
    color: #6c757d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }
  
  .detail-value {
    font-size: 14px;
    font-weight: 500;
    color: #212529;
  }
  
  .apply-btn {
    background: #008BDC;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .apply-btn:hover {
    background: #007ACC;
    transform: translateY(-1px);
  }
  
  .filter-title {
    font-size: 18px;
    font-weight: 600;
    color: #212529;
  }
  
  .filter-section-title {
    font-size: 14px;
    font-weight: 500;
    color: #212529;
  }
  
  .page-title {
    font-size: 32px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 8px;
  }
  
  .page-subtitle {
    font-size: 18px;
    color: #6c757d;
    margin-bottom: 24px;
  }
  
  .results-count {
    font-size: 16px;
    font-weight: 500;
    color: #212529;
  }
`;

// Exact Internshala Header Component
const InternshalaHeader = () => {
  return (
    <>
      <style>{customStyles}</style>
      {/* Top Banner - Exact match */}
      <div style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '8px 16px', fontSize: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ marginRight: '8px' }}>🎯</span>
          <span>Get hired by your dream company - Register for Internshala Career Fair</span>
        </div>
      </div>
      
      {/* Main Header - Exact match */}
      <header className="internshala-header-shadow" style={{ backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Left side - Logo and Navigation */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1 className="internshala-blue" style={{ fontSize: '24px', fontWeight: '700', marginRight: '48px', margin: 0 }}>
                Internshala
              </h1>
              <nav style={{ display: 'flex', gap: '32px' }}>
                <a href="#" className="internshala-blue" style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  textDecoration: 'none',
                  borderBottom: '2px solid #008BDC',
                  paddingBottom: '20px'
                }}>
                  Internships
                </a>
                <a href="#" style={{ 
                  fontSize: '14px', 
                  color: '#6c757d', 
                  textDecoration: 'none',
                  paddingBottom: '20px'
                }}>
                  Online Trainings
                </a>
                <a href="#" style={{ 
                  fontSize: '14px', 
                  color: '#6c757d', 
                  textDecoration: 'none',
                  paddingBottom: '20px'
                }}>
                  Jobs
                </a>
                <a href="#" style={{ 
                  fontSize: '14px', 
                  color: '#6c757d', 
                  textDecoration: 'none',
                  paddingBottom: '20px'
                }}>
                  Courses
                </a>
              </nav>
            </div>
            
            {/* Right side - Icons and Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Bell size={20} style={{ color: '#6c757d', cursor: 'pointer' }} />
              <User size={20} style={{ color: '#6c757d', cursor: 'pointer' }} />
              <button className="internshala-border-blue internshala-blue" style={{
                border: '1px solid #008BDC',
                background: 'transparent',
                padding: '6px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Login
              </button>
              <button className="internshala-bg-blue internshala-hover-blue" style={{
                border: 'none',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Search and Filter Section - Enhanced to match exact UI
const SearchAndFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filters, 
  setFilters, 
  filterOptions,
  internshipCount 
}) => {
  const [expandedFilters, setExpandedFilters] = useState({
    profile: true,
    location: false,
    duration: false,
    workType: false
  });

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      profile: [],
      location: [],
      duration: [],
      workType: []
    });
    setSearchTerm('');
  };

  const popularSearches = ['Web Development', 'Data Science', 'Marketing', 'Content Writing'];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        {/* Page Title */}
        <div style={{ marginBottom: '24px' }}>
          <h1 className="page-title">Internships</h1>
          <p className="page-subtitle">Apply to 10,000+ internships for free</p>
        </div>

        {/* Search Section */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '24px', 
          marginBottom: '24px',
          border: '1px solid #e5e5e5'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '16px', position: 'relative' }}>
            <Search size={20} style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#6c757d' 
            }} />
            <input
              type="text"
              className="internshala-search-box"
              placeholder="Search by profile, company, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          {/* Popular Searches */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#6c757d', fontWeight: '500' }}>
              Popular searches:
            </span>
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => setSearchTerm(search)}
                style={{
                  border: '1px solid #dee2e6',
                  background: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#6c757d',
                  cursor: 'pointer'
                }}
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {/* Filters Sidebar */}
          <div style={{ width: '300px', flexShrink: 0 }}>
            <div className="internshala-sidebar">
              {/* Filter Header */}
              <div style={{ 
                padding: '16px', 
                borderBottom: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Filter size={18} style={{ color: '#6c757d', marginRight: '8px' }} />
                  <h2 className="filter-title">Filters</h2>
                </div>
                <button 
                  onClick={clearAllFilters}
                  className="internshala-blue"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Clear all
                </button>
              </div>

              {/* Filter Sections */}
              <div>
                {/* Profile Filter */}
                <div className="internshala-filter-section">
                  <button
                    onClick={() => toggleFilterSection('profile')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="filter-section-title">Profile</span>
                    {expandedFilters.profile ? (
                      <ChevronUp size={16} style={{ color: '#6c757d' }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: '#6c757d' }} />
                    )}
                  </button>
                  
                  {expandedFilters.profile && (
                    <div style={{ padding: '0 16px 16px' }}>
                      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {filterOptions.profile.map((profile) => (
                          <label key={profile} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            cursor: 'pointer',
                            padding: '4px 0',
                            fontSize: '14px'
                          }}>
                            <input
                              type="checkbox"
                              className="internshala-checkbox"
                              checked={filters.profile.includes(profile)}
                              onChange={() => handleFilterChange('profile', profile)}
                            />
                            <span style={{ color: '#495057' }}>{profile}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Location Filter */}
                <div className="internshala-filter-section">
                  <button
                    onClick={() => toggleFilterSection('location')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="filter-section-title">Location</span>
                    {expandedFilters.location ? (
                      <ChevronUp size={16} style={{ color: '#6c757d' }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: '#6c757d' }} />
                    )}
                  </button>
                  
                  {expandedFilters.location && (
                    <div style={{ padding: '0 16px 16px' }}>
                      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {filterOptions.location.map((location) => (
                          <label key={location} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            cursor: 'pointer',
                            padding: '4px 0',
                            fontSize: '14px'
                          }}>
                            <input
                              type="checkbox"
                              className="internshala-checkbox"
                              checked={filters.location.includes(location)}
                              onChange={() => handleFilterChange('location', location)}
                            />
                            <span style={{ color: '#495057' }}>{location}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Duration Filter */}
                <div className="internshala-filter-section">
                  <button
                    onClick={() => toggleFilterSection('duration')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="filter-section-title">Duration</span>
                    {expandedFilters.duration ? (
                      <ChevronUp size={16} style={{ color: '#6c757d' }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: '#6c757d' }} />
                    )}
                  </button>
                  
                  {expandedFilters.duration && (
                    <div style={{ padding: '0 16px 16px' }}>
                      {filterOptions.duration.map((duration) => (
                        <label key={duration} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          cursor: 'pointer',
                          padding: '4px 0',
                          fontSize: '14px'
                        }}>
                          <input
                            type="checkbox"
                            className="internshala-checkbox"
                            checked={filters.duration.includes(duration)}
                            onChange={() => handleFilterChange('duration', duration)}
                          />
                          <span style={{ color: '#495057' }}>{duration}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Work Type Filter */}
                <div className="internshala-filter-section">
                  <button
                    onClick={() => toggleFilterSection('workType')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="filter-section-title">Work Type</span>
                    {expandedFilters.workType ? (
                      <ChevronUp size={16} style={{ color: '#6c757d' }} />
                    ) : (
                      <ChevronDown size={16} style={{ color: '#6c757d' }} />
                    )}
                  </button>
                  
                  {expandedFilters.workType && (
                    <div style={{ padding: '0 16px 16px' }}>
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        cursor: 'pointer',
                        padding: '4px 0',
                        fontSize: '14px'
                      }}>
                        <input
                          type="checkbox"
                          className="internshala-checkbox"
                          checked={filters.workType.includes('Work from home')}
                          onChange={() => handleFilterChange('workType', 'Work from home')}
                        />
                        <span style={{ color: '#495057' }}>Work from home</span>
                      </label>
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        cursor: 'pointer',
                        padding: '4px 0',
                        fontSize: '14px'
                      }}>
                        <input
                          type="checkbox"
                          className="internshala-checkbox"
                          checked={filters.workType.includes('Part-time')}
                          onChange={() => handleFilterChange('workType', 'Part-time')}
                        />
                        <span style={{ color: '#495057' }}>Part-time</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: 1 }}>
            {/* Results Header */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '5px', 
              // marginBottom: '8px',
              border: '1px solid #e5e5e5'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="results-count">
                  {internshipCount.toLocaleString()} Total Internships
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '14px', color: '#6c757d' }}>Sort by:</span>
                  <select style={{
                    border: '1px solid #dee2e6',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    background: 'white'
                  }}>
                    <option>Relevance</option>
                    <option>Recently posted</option>
                    <option>Stipend (high to low)</option>
                    <option>Stipend (low to high)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Internship Card Component - Pixel Perfect Match
const InternshipCard = ({ internship }) => {
  const getCompanyInitial = (companyName) => {
    return companyName ? companyName.charAt(0).toUpperCase() : 'C';
  };

  const formatStipend = (stipend) => {
    if (stipend && stipend.salary) {
      return `₹ ${parseInt(stipend.salary).toLocaleString()}/${stipend.salarytype1?.toLowerCase() || 'month'}`;
    }
    return 'Unpaid';
  };

  const getLocationDisplay = (locations) => {
    if (Array.isArray(locations) && locations.length > 0) {
      return locations[0];
    }
    return 'Not specified';
  };

  return (
    <div className="internshala-card" style={{ padding: '24px', marginBottom: '16px' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          {/* Company Logo */}
          <div className="company-logo" style={{ marginRight: '16px' }}>
            {getCompanyInitial(internship.company_name)}
          </div>
          
          {/* Title and Company */}
          <div>
            <h3 className="internship-title">
              {internship.title || internship.profile_name}
            </h3>
            <p className="company-name">
              {internship.company_name}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6c757d' }}>
              <MapPin size={14} style={{ marginRight: '4px' }} />
              <span>{getLocationDisplay(internship.location_names)}</span>
            </div>
          </div>
        </div>
        
        {/* Posted Date and Apply Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
          <div style={{ fontSize: '13px', color: '#6c757d' }}>
            {internship.posted_on}
          </div>
          <button className="apply-btn">
            Apply now
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '20px' }}>
        <div>
          <div className="detail-label" style={{ display: 'flex', alignItems: 'center' }}>
            <Calendar size={12} style={{ marginRight: '4px' }} />
            <span>Start Date</span>
          </div>
          <p className="detail-value">{internship.start_date}</p>
        </div>
        <div>
          <div className="detail-label" style={{ display: 'flex', alignItems: 'center' }}>
            <Clock size={12} style={{ marginRight: '4px' }} />
            <span>Duration</span>
          </div>
          <p className="detail-value">{internship.duration}</p>
        </div>
        <div>
          <div className="detail-label" style={{ display: 'flex', alignItems: 'center' }}>
            <Award size={12} style={{ marginRight: '4px' }} />
            <span>Stipend</span>
          </div>
          <p className="detail-value">{formatStipend(internship.stipend)}</p>
        </div>
      </div>

      {/* Tags Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {internship.work_from_home && (
          <span className="internshala-tag-blue" style={{
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            Work from home
          </span>
        )}
        {internship.part_time && (
          <span className="internshala-tag-green" style={{
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            Part-time
          </span>
        )}
        {internship.tags && internship.tags.includes('Internship with job offer') && (
          <span className="internshala-tag-orange" style={{
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            With job offer
          </span>
        )}
      </div>

      {/* Footer Section */}
      <div style={{ 
        paddingTop: '16px', 
        borderTop: '1px solid #f1f3f4', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#6c757d' }}>
          <span>Last date to apply: {internship.application_deadline}</span>
          {internship.applicants && (
            <span>• {internship.applicants} applicants</span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#6c757d',
            cursor: 'pointer',
            padding: '4px'
          }}>
            <Heart size={16} />
          </button>
          <button className="internshala-blue" style={{
            background: 'none',
            border: 'none',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    profile: [],
    location: [],
    duration: [],
    workType: []
  });

  // Load mock data on component mount
  useEffect(() => {
    const loadInternships = () => {
      try {
        setLoading(true);
        setInternships(mockInternships);
        setFilteredInternships(mockInternships);
      } catch (err) {
        console.error('Error loading internships:', err);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(loadInternships, 1000);
  }, []);

  // Apply filters whenever they change
  useEffect(() => {
    let filtered = [...internships];

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(internship =>
        (internship.title || internship.profile_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (internship.company_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (internship.location_names && internship.location_names.some(loc => 
          loc.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }

    // Apply profile filter
    if (filters.profile.length > 0) {
      filtered = filtered.filter(internship =>
        filters.profile.includes(internship.title || internship.profile_name)
      );
    }

    // Apply location filter
    if (filters.location.length > 0) {
      filtered = filtered.filter(internship =>
        internship.location_names && internship.location_names.some(loc =>
          filters.location.includes(loc)
        )
      );
    }

    // Apply duration filter
    if (filters.duration.length > 0) {
      filtered = filtered.filter(internship =>
        filters.duration.includes(internship.duration)
      );
    }

    // Apply work type filter
    if (filters.workType.length > 0) {
      filtered = filtered.filter(internship => {
        let matches = false;
        if (filters.workType.includes('Work from home') && internship.work_from_home) {
          matches = true;
        }
        if (filters.workType.includes('Part-time') && internship.part_time) {
          matches = true;
        }
        return matches;
      });
    }

    setFilteredInternships(filtered);
  }, [internships, searchTerm, filters]);

  // Extract unique filter options
  const filterOptions = {
    profile: [...new Set(internships.map(item => item.title || item.profile_name).filter(Boolean))],
    location: [...new Set(internships.flatMap(item => item.location_names || []).filter(Boolean))],
    duration: [...new Set(internships.map(item => item.duration).filter(Boolean))]
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <InternshalaHeader />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #008BDC',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}>
          </div>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <InternshalaHeader />
      
      <SearchAndFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
        internshipCount={filteredInternships.length}
      />

      {/* Internship Results */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px 32px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Empty space for sidebar alignment */}
          <div style={{ width: '0px', flexShrink: 0 }}></div>
          
          {/* Results */}
          <div style={{ flex: 1 }}>
            {filteredInternships.length === 0 ? (
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                border: '1px solid #e5e5e5', 
                padding: '0px', 
                textAlign: 'center' 
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <Search size={48} style={{ color: '#dee2e6', margin: '0 auto 16px' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>
                  No internships found
                </h3>
                <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '24px' }}>
                  No internships match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setFilters({ profile: [], location: [], duration: [], workType: [] });
                    setSearchTerm('');
                  }}
                  className="internshala-bg-blue internshala-hover-blue"
                  style={{
                    color: 'white',
                    border: 'none',
                    padding: '8px 24px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div>
                {filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;