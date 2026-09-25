import React from "react";

function ProfileCard() {
  return (
    <div className="profile-page">

      <h1>My Profile</h1>
      <p>Manage your account details and preferences</p>

      {/* Profile Header */}
      <div className="profile-header">

        <div className="profile-section-1">

          <div className="profile-icon">
            👤
          </div>

          <div className="personal-details">
            <h1>Sadiq Bilal</h1>
            <p>sadiq@example.com</p>

            <div>
              <span>📞 +91 9876543210</span>
              <span>📍 Hyderabad, Telangana</span>
            </div>
          </div>

        </div>

        <div className="profile-section-2">
          <button>🖊 Edit Profile</button>
        </div>

      </div>


      {/* Personal Information */}
      <div className="personal-info">

        <h2>Personal Information</h2>

        <div className="contact-details">

          <div>
            <span>Full Name</span>
            <p>Sadiq Bilal</p>
          </div>

          <div>
            <span>Phone Number</span>
            <p>+91 9876543210</p>
          </div>

          <div>
            <span>Email Address</span>
            <p>sadiq@example.com</p>
          </div>

          <div>
            <span>Address</span>
            <p>Hyderabad, Telangana</p>
          </div>

        </div>

      </div>


      {/* Quick Actions */}
      <h2>Quick Actions</h2>

      <div className="profile-actions">

        {/* My Orders */}
        <div>
          <div className="icon">
            📦
          </div>

          <h3>My Orders</h3>
          <p>View your order history</p>
          <span>➜</span>
        </div>


        {/* My Cart */}
        <div>
          <div className="icon">
            🛒
          </div>

          <h3>My Cart</h3>
          <p>View your cart items</p>
          <span>➜</span>
        </div>


        {/* Manage Addresses */}
        <div>
          <div className="icon">
            📍
          </div>

          <h3>Manage Addresses</h3>
          <p>Add or edit delivery addresses</p>
          <span>➜</span>
        </div>


        {/* Logout */}
        <div>
          <div className="icon">
            🔙
          </div>

          <h3>Logout</h3>
          <p>Sign out from your account</p>
          <span>➜</span>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;