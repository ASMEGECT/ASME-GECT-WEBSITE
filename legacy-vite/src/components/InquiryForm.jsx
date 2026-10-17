import React, { useState } from 'react';

export default function InquiryForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all transmission fields.');
      return;
    }
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    } else {
      alert(`Data successfully transmitted!\nIdentity: ${formData.name}\nRouting: ${formData.email}`);
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 mt-8 w-full">
      <h3 className="font-label-mono text-xs uppercase mb-6 opacity-80 tracking-widest border-b border-on-primary-container/20 pb-2">
        Direct Inquiry
      </h3>
      
      {/* Name Input */}
      <div className="relative">
        <input 
          className="w-full bg-transparent border-b-2 border-on-primary-container/30 text-on-primary-container font-label-mono py-4 px-0 focus:outline-none focus:border-on-primary-container transition-colors peer text-sm" 
          id="name" 
          type="text" 
          value={formData.name}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label 
          className="absolute left-0 top-4 font-label-mono text-xs text-on-primary-container/60 transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-on-primary-container peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none" 
          htmlFor="name"
        >
          Identity [Name]
        </label>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input 
          className="w-full bg-transparent border-b-2 border-on-primary-container/30 text-on-primary-container font-label-mono py-4 px-0 focus:outline-none focus:border-on-primary-container transition-colors peer text-sm" 
          id="email" 
          type="email" 
          value={formData.email}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label 
          className="absolute left-0 top-4 font-label-mono text-xs text-on-primary-container/60 transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-on-primary-container peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none" 
          htmlFor="email"
        >
          Routing [Email]
        </label>
      </div>

      {/* Message TextArea */}
      <div className="relative">
        <textarea 
          className="w-full bg-transparent border-b-2 border-on-primary-container/30 text-on-primary-container font-label-mono py-4 px-0 focus:outline-none focus:border-on-primary-container transition-colors peer resize-none text-sm" 
          id="message" 
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          placeholder=" "
        ></textarea>
        <label 
          className="absolute left-0 top-4 font-label-mono text-xs text-on-primary-container/60 transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-on-primary-container peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none" 
          htmlFor="message"
        >
          Transmission [Message]
        </label>
      </div>

      {/* Transmit Button */}
      <button 
        className="bg-on-primary-container text-modernist-red font-headline-md text-lg px-8 py-4 rounded-lg hover:bg-surface-white hover:text-modernist-red transition-colors w-full md:w-auto mt-4 font-bold" 
        type="submit"
      >
        TRANSMIT DATA
      </button>
    </form>
  );
}
