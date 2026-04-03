import React from 'react';
import '../styles/components/faculty.css';

const Faculty = () => {
  // Departments data
  const departments = [
    {
      name: "First Year B.Tech (Science & Humanities)",
      staff: [
        {
          id: 1,
          name: "Dr. John Smith",
          profession: "Professor of Mathematics",
          image: "/faculty/science-humanities/john-smith.jpg",
          blogLink: "/faculty/blog/john-smith"
        },
        {
          id: 2,
          name: "Dr. Sarah Johnson",
          profession: "Professor of Physics",
          image: "/faculty/science-humanities/sarah-johnson.jpg",
          blogLink: "/faculty/blog/sarah-johnson"
        }
      ]
    },
    {
      name: "Artificial Intelligence & Data Science",
      staff: [
        {
          id: 3,
          name: "Prof. Michael Chen",
          profession: "Head of AI Department",
          image: "/faculty/ai/michael-chen.jpg",
          blogLink: "/faculty/blog/michael-chen"
        },
        {
          id: 4,
          name: "Dr. Emily Wong",
          profession: "Data Science Specialist",
          image: "/faculty/ai/emily-wong.jpg",
          blogLink: "/faculty/blog/emily-wong"
        }
      ]
    },
    {
      name: "Civil Engineering",
      staff: [
        {
          id: 5,
          name: "Prof. Robert Brown",
          profession: "Structural Engineering",
          image: "/faculty/civil/robert-brown.jpg",
          blogLink: "/faculty/blog/robert-brown"
        }
      ]
    },
    {
      name: "Computer Science & Engineering",
      staff: [
        {
          id: 6,
          name: "Dr. Alan Turing",
          profession: "Computer Science Professor",
          image: "/faculty/cse/alan-turing.jpg",
          blogLink: "/faculty/blog/alan-turing"
        },
        {
          id: 7,
          name: "Prof. Grace Hopper",
          profession: "Software Engineering",
          image: "/faculty/cse/grace-hopper.jpg",
          blogLink: "/faculty/blog/grace-hopper"
        }
      ]
    },
    {
      name: "Electrical Engineering",
      staff: [
        {
          id: 8,
          name: "Dr. Thomas Edison",
          profession: "Electrical Systems",
          image: "/faculty/ee/thomas-edison.jpg",
          blogLink: "/faculty/blog/thomas-edison"
        }
      ]
    },
    {
      name: "Electronics and Telecommunication Engineering",
      staff: [
        {
          id: 9,
          name: "Prof. Nikola Tesla",
          profession: "Telecommunications",
          image: "/faculty/ete/nikola-tesla.jpg",
          blogLink: "/faculty/blog/nikola-tesla"
        }
      ]
    },
    {
      name: "Mechanical Engineering",
      staff: [
        {
          id: 10,
          name: "Dr. James Watt",
          profession: "Thermodynamics",
          image: "/faculty/me/james-watt.jpg",
          blogLink: "/faculty/blog/james-watt"
        }
      ]
    }
  ];

  return (
    <div className="faculty-page">
      <div className="faculty-header">
        <h1>Faculty Members</h1>
        <p>Meet our distinguished faculty members across various departments</p>
      </div>

      {departments.map((department) => (
        <div key={department.name} className="department-section">
          <h2 className="department-heading">{department.name}</h2>
          <div className="staff-grid">
            {department.staff.map((staff) => (
              <div key={staff.id} className="staff-card">
                <div className="staff-image-container">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="staff-image"
                  />
                </div>
                <div className="staff-details">
                  <h3 className="staff-name">{staff.name}</h3>
                  <p className="staff-profession">{staff.profession}</p>
                  <a 
                    href={staff.blogLink} 
                    className="staff-blog-link"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;