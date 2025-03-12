import React, { useState, useRef } from 'react';
import axios from 'axios';

const SkinAnalyzer = ({ setResult, setLoading, setError }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch (err) {
      setError("Error accessing camera: " + err.message);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      
      const dataUrl = canvas.toDataURL('image/jpeg');
      setPreview(dataUrl);
      
      // Convert to blob for upload
      canvas.toBlob((blob) => {
        setImage(new File([blob], "camera-capture.jpg", { type: "image/jpeg" }));
      }, 'image/jpeg');
      
      stopCamera();
    }
  };

  const handleSubmit = async () => {
    if (!preview) {
      setError("Please select or capture an image first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        image: preview
      });
      
      setResult(response.data);
    } catch (err) {
      setError("Error analyzing image: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Upload or Take a Photo of Your Skin</h2>
      <p>Our AI will analyze your skin and recommend the perfect SmartShea product for you</p>
      
      {!cameraActive && !preview && (
        <div className="button-group">
          <button onClick={() => fileInputRef.current.click()}>
            Select Image
          </button>
          <button onClick={startCamera}>
            Use Camera
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
      )}
      
      {cameraActive && (
        <div className="camera-container">
          <video 
            ref={videoRef}
            autoPlay
            playsInline
            className="camera-preview"
          />
          <div className="button-group">
            <button onClick={capturePhoto}>Take Photo</button>
            <button onClick={stopCamera}>Cancel</button>
          </div>
        </div>
      )}
      
      {preview && (
        <div>
          <img src={preview} alt="Preview" className="image-preview" />
          <div className="button-group">
            <button onClick={handleSubmit}>Analyze Skin</button>
            <button onClick={resetForm}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinAnalyzer;