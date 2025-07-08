import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const Toast = ({ 
  type = 'message', 
  title = '', 
  message = '', 
  isVisible = false, 
  onClose = () => {}, 
  duration = 4000,
  position = 'top-right',
  showCloseButton = true,
  customIcon = null,
  customColors = null,
  darkMode = false
}) => {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, duration, handleClose]);

  const getToastStyles = () => {
    const baseStyles = {
      error: {
        bg: darkMode 
          ? (customColors?.error?.bg || 'bg-slate-700') 
          : (customColors?.error?.bg || 'bg-white'),
        text: darkMode 
          ? (customColors?.error?.text || 'text-red-400') 
          : (customColors?.error?.text || 'text-red-600'),
        border: customColors?.error?.border || 'border-red-500',
        shadow: darkMode ? 'shadow-lg shadow-black/20' : 'shadow-lg shadow-gray-200',
        icon: customIcon || <XCircle size={20} className={darkMode ? 'text-red-400' : 'text-red-500'} />
      },
      success: {
        bg: darkMode 
          ? (customColors?.success?.bg || 'bg-slate-700') 
          : (customColors?.success?.bg || 'bg-white'),
        text: darkMode 
          ? (customColors?.success?.text || 'text-green-400') 
          : (customColors?.success?.text || 'text-green-600'),
        border: customColors?.success?.border || 'border-green-500',
        shadow: darkMode ? 'shadow-lg shadow-black/20' : 'shadow-lg shadow-gray-200',
        icon: customIcon || <CheckCircle size={20} className={darkMode ? 'text-green-400' : 'text-green-500'} />
      },
      message: {
        bg: darkMode 
          ? (customColors?.message?.bg || 'bg-slate-700') 
          : (customColors?.message?.bg || 'bg-white'),
        text: darkMode 
          ? (customColors?.message?.text || 'text-blue-400') 
          : (customColors?.message?.text || 'text-blue-600'),
        border: customColors?.message?.border || 'border-blue-500',
        shadow: darkMode ? 'shadow-lg shadow-black/20' : 'shadow-lg shadow-gray-200',
        icon: customIcon || <Info size={20} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
      }
    };

    return baseStyles[type] || baseStyles.message;
  };

  const getPositionStyles = () => {
    const positions = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };

    return positions[position] || positions['top-right'];
  };

  const toastStyles = getToastStyles();

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed ${getPositionStyles()} z-50 transition-all duration-300 ease-in-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className={`
        ${toastStyles.bg} ${toastStyles.text} ${toastStyles.shadow}
        border-l-4 ${toastStyles.border}
        rounded-lg p-4 min-w-80 max-w-96
        flex items-start space-x-3
        ${darkMode ? 'border border-slate-600' : 'border border-gray-200'}
      `}>
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {toastStyles.icon}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold text-sm mb-1 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h4>
          )}
          {message && (
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {message}
            </p>
          )}
        </div>
        
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={handleClose}
            className={`flex-shrink-0 p-1 rounded-full transition-colors ${
              darkMode 
                ? 'hover:bg-slate-600 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            }`}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;