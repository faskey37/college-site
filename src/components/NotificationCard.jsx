// src/components/NotificationCard.jsx
import React from 'react';
import styled from 'styled-components';
import { FaBell, FaTimes, FaCheckCircle, FaUserPlus, FaThumbsUp, FaComment, FaGraduationCap } from 'react-icons/fa';

const NotificationCard = ({ notification, onMarkAsRead, onClose }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'follow':
        return <FaUserPlus />;
      case 'like':
        return <FaThumbsUp />;
      case 'comment':
        return <FaComment />;
      case 'announcement':
        return <FaGraduationCap />;
      default:
        return <FaBell />;
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'follow':
        return '#3b82f6';
      case 'like':
        return '#ef4444';
      case 'comment':
        return '#10b981';
      case 'announcement':
        return '#f59e0b';
      default:
        return '#8b5cf6';
    }
  };

  return (
    <StyledWrapper>
      <div className={`card ${notification.isRead ? 'read' : 'unread'}`}>
        <div className="header">
          <div className="icon" style={{ backgroundColor: getIconColor(notification.type) }}>
            {getIcon(notification.type)}
          </div>
          <div className="header-content">
            <p className="alert">{notification.title}</p>
            <span className="time">{notification.time}</span>
          </div>
          <button className="close-btn" onClick={() => onClose(notification.id)}>
            <FaTimes />
          </button>
        </div>
        <p className="message">{notification.message}</p>
        <div className="actions">
          {!notification.isRead && (
            <a className="mark-as-read" href="#" onClick={(e) => {
              e.preventDefault();
              onMarkAsRead(notification.id);
            }}>
              Mark as Read
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: 380px;
    border-width: 1px;
    border-color: rgba(219, 234, 254, 1);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 1);
    padding: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .card.unread {
    border-left: 4px solid #3b82f6;
    background-color: rgba(239, 246, 255, 0.5);
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .header-content {
    flex: 1;
  }

  .icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    padding: 0.5rem;
    color: rgba(255, 255, 255, 1);
  }

  .icon svg {
    height: 1rem;
    width: 1rem;
  }

  .alert {
    font-weight: 600;
    color: rgba(17, 24, 39, 1);
    margin: 0 0 0.25rem 0;
  }

  .time {
    font-size: 0.75rem;
    color: rgba(107, 114, 128, 1);
  }

  .message {
    margin-top: 0.75rem;
    color: rgba(75, 85, 99, 1);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .actions {
    margin-top: 1rem;
  }

  .actions a {
    text-decoration: none;
  }

  .mark-as-read {
    display: inline-block;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: rgba(243, 244, 246, 1);
    color: rgba(75, 85, 99, 1);
    transition: all 0.15s ease;
    cursor: pointer;
  }

  .mark-as-read:hover {
    background-color: rgb(229, 231, 235);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: rgba(107, 114, 128, 1);
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    transition: all 0.15s ease;
  }

  .close-btn:hover {
    background-color: rgba(243, 244, 246, 1);
    color: rgba(17, 24, 39, 1);
  }
`;

export default NotificationCard;