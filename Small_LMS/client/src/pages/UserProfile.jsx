import React, { useState } from 'react';
import { FaUserCircle, FaEdit, FaCertificate, FaBookmark, FaHistory, FaCog, FaSignOutAlt, FaLock, FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import Navbar from "../components/Navbar"

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'August 2023',
    bio: 'Passionate about continuous learning and personal development. Currently focused on expanding my knowledge in data science and machine learning.',
    profileImage: null // We'll use a placeholder icon
  });

  // Mock course data
  const enrolledCourses = [
    { id: 1, title: 'Advanced Machine Learning', progress: 75, instructor: 'Dr. Alan Wong', lastAccessed: '2 days ago' },
    { id: 2, title: 'Web Development Bootcamp', progress: 92, instructor: 'Jessica Martinez', lastAccessed: '1 week ago' },
    { id: 3, title: 'Data Visualization Mastery', progress: 45, instructor: 'Michael Chen', lastAccessed: 'Today' }
  ];

  // Mock achievements
  const achievements = [
    { id: 1, title: 'Fast Learner', description: 'Completed 3 courses in one month', icon: <FaTrophy className="text-yellow-400" /> },
    { id: 2, title: 'Perfect Score', description: 'Scored 100% on a course assessment', icon: <FaCertificate className="text-blue-400" /> },
    { id: 3, title: 'Early Adopter', description: 'Among first 100 platform users', icon: <FaTrophy className="text-yellow-400" /> }
  ];

  // Mock bookmarked courses
  const bookmarkedCourses = [
    { id: 4, title: 'Introduction to AI Ethics', instructor: 'Dr. Emily Johnson' },
    { id: 5, title: 'Advanced JavaScript Patterns', instructor: 'David Rodriguez' }
  ];

  // Input handler for editing profile
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Tab content components
  const ProfileContent = () => (
    <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-6 shadow-xl border border-blue-900">
      {!isEditing ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Personal Information</h3>
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-blue-300">Email</p>
                <p className="text-white">{userData.email}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-blue-300">Phone</p>
                <p className="text-white">{userData.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaCalendarAlt className="text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-blue-300">Member since</p>
                <p className="text-white">{userData.joinDate}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Bio</h3>
            <p className="text-blue-200">{userData.bio}</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Edit Profile</h3>
            <button 
              onClick={() => setIsEditing(false)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              Cancel
            </button>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-blue-300 mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={userData.name}
                onChange={handleInputChange}
                className="w-full bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                value={userData.email}
                onChange={handleInputChange}
                className="w-full bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 mb-1">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 mb-1">Bio</label>
              <textarea 
                name="bio" 
                value={userData.bio}
                onChange={handleInputChange}
                rows="4"
                className="w-full bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="pt-4">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );

  const CoursesContent = () => (
    <div className="space-y-6">
      <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-6 shadow-xl border border-blue-900">
        <h3 className="text-xl font-semibold text-white mb-6">My Enrolled Courses</h3>
        
        {enrolledCourses.map(course => (
          <div key={course.id} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium text-white">{course.title}</h4>
              <span className="text-sm text-blue-300">Last accessed: {course.lastAccessed}</span>
            </div>
            
            <p className="text-blue-200 mb-2">Instructor: {course.instructor}</p>
            
            <div className="w-full bg-blue-900 rounded-full h-4 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-blue-300">{course.progress}% Complete</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">Continue Learning</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-6 shadow-xl border border-blue-900">
        <h3 className="text-xl font-semibold text-white mb-6">Bookmarked Courses</h3>
        
        {bookmarkedCourses.map(course => (
          <div key={course.id} className="flex justify-between items-center mb-4 last:mb-0">
            <div>
              <h4 className="text-lg font-medium text-white">{course.title}</h4>
              <p className="text-blue-200">Instructor: {course.instructor}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const AchievementsContent = () => (
    <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-6 shadow-xl border border-blue-900">
      <h3 className="text-xl font-semibold text-white mb-6">My Achievements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(achievement => (
          <div key={achievement.id} className="bg-blue-900 bg-opacity-50 rounded-lg p-4 border border-blue-800 hover:border-blue-600 transition duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-800 rounded-full mr-3">
                {achievement.icon}
              </div>
              <h4 className="text-lg font-medium text-white">{achievement.title}</h4>
            </div>
            <p className="text-blue-200">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsContent = () => (
    <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-6 shadow-xl border border-blue-900">
      <h3 className="text-xl font-semibold text-white mb-6">Account Settings</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="flex items-center text-lg font-medium text-white mb-4">
            <FaLock className="mr-2" /> Password & Security
          </h4>
          <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
            Change Password
          </button>
        </div>
        
        <div className="border-t border-blue-800 pt-6">
          <h4 className="flex items-center text-lg font-medium text-white mb-4">
            <FaEnvelope className="mr-2" /> Notification Settings
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-notifications"
                className="rounded bg-blue-900 border-blue-700 text-blue-500 focus:ring-blue-500 h-4 w-4"
                defaultChecked
              />
              <label htmlFor="email-notifications" className="ml-2 text-blue-200">
                Email notifications
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="course-updates"
                className="rounded bg-blue-900 border-blue-700 text-blue-500 focus:ring-blue-500 h-4 w-4"
                defaultChecked
              />
              <label htmlFor="course-updates" className="ml-2 text-blue-200">
                Course updates
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="promotional"
                className="rounded bg-blue-900 border-blue-700 text-blue-500 focus:ring-blue-500 h-4 w-4"
              />
              <label htmlFor="promotional" className="ml-2 text-blue-200">
                Promotional offers
              </label>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6">
          <h4 className="flex items-center text-lg font-medium text-white mb-4">
            <FaSignOutAlt className="mr-2" /> Account Management
          </h4>
          <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );

  // Render the appropriate content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'courses':
        return <CoursesContent />;
      case 'achievements':
        return <AchievementsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050A30] to-[#0A1045]">
      <Navbar />
      
      {/* Profile Header */}
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 border border-blue-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 rounded-full bg-blue-800 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                {userData.profileImage ? (
                  <img 
                    src={userData.profileImage} 
                    alt={userData.name} 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-24 h-24 text-blue-300" />
                )}
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">{userData.name}</h2>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-800 bg-opacity-50 text-blue-200 text-sm font-medium mb-4">
                  Premium Member
                </div>
                <p className="text-blue-200 max-w-lg">
                  {userData.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#0A1045] bg-opacity-80 rounded-lg p-4 shadow-xl border border-blue-900 sticky top-24">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'profile' 
                        ? 'bg-blue-700 text-white' 
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                    } transition duration-300`}
                  >
                    <FaUserCircle className="mr-3" />
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'courses' 
                        ? 'bg-blue-700 text-white' 
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                    } transition duration-300`}
                  >
                    <FaBookmark className="mr-3" />
                    My Courses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('achievements')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'achievements' 
                        ? 'bg-blue-700 text-white' 
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                    } transition duration-300`}
                  >
                    <FaCertificate className="mr-3" />
                    Achievements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'settings' 
                        ? 'bg-blue-700 text-white' 
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                    } transition duration-300`}
                  >
                    <FaCog className="mr-3" />
                    Settings
                  </button>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-blue-800">
                <button className="w-full px-4 py-3 rounded-lg flex items-center text-red-400 hover:bg-red-900 hover:bg-opacity-30 hover:text-red-300 transition duration-300">
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;