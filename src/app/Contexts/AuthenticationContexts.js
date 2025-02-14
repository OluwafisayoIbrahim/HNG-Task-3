"use client"
import React, { createContext, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const [user, setUser] = useState(null);

  
  const [currentPage, setCurrentPage] = useState(0);
  const totalSteps = 3; 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatar: '',
    project: ''
  });

  const { name, email, project } = formData;

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    avatar: '',
    project: ''
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("attendeeFormData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setFormData({ ...parsedData, avatar: "" });
    }
  }, []);



  useEffect(() => {
    const toSave = { name, email, project };
    localStorage.setItem("attendeeFormData", JSON.stringify(toSave));
  }, [name, email, project]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateImageUrl = (url) => {
    const urlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i;
    return urlRegex.test(url);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.avatar) {
      newErrors.avatar = 'Profile photo is required';
      isValid = false;
    } else if (!validateImageUrl(formData.avatar)) {
      newErrors.avatar = 'Please provide a valid image URL';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        avatar: 'Please upload a JPEG, PNG, or WebP image'
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({
        ...prev,
        avatar: 'Image size should be less than 5MB'
      }));
      return;
    }

    try {
      setIsUploading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const json = await res.json();

      if (json.secure_url) {
        setFormData(prev => ({
          ...prev,
          avatar: json.secure_url,
        }));
        setErrors(prev => ({
          ...prev,
          avatar: ''
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          avatar: 'Failed to upload image. Please try again.'
        }));
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      setErrors(prev => ({
        ...prev,
        avatar: 'Failed to upload image. Please try again.'
      }));
    } finally {
      setIsUploading(false);
    }
  };

  const handleBack = () => {
    clearForm(); 
    router.push('/');
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem('validatedAttendeeData', JSON.stringify(formData));
      
      const ticketData = localStorage.getItem('selectedTicket');
      if (!ticketData) {
        console.error('No ticket data found');
        return;
      }
      
      router.push('/ticket-ready');
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      avatar: '',
      project: ''
    });
    localStorage.removeItem('attendeeFormData');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        formData,
        setFormData,
        handleAvatarChange,
        handleFormChange,
        fileInputRef,
        errors,
        isUploading,
        handleBack,
        handleNext,
        clearForm,
        currentPage,
        setCurrentPage,
        totalSteps,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
