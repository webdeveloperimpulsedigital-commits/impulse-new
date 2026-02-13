import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#ffffff",
      }}
    >
      {/* 404 Number */}
      <h1
        style={{
          fontSize: "120px",
          fontWeight: 700,
          margin: "0",
          color: "#111",
          lineHeight: 1,
        }}
      >
        404
      </h1>

      {/* Heading */}
      <h2
        style={{
          fontSize: "32px",
          marginTop: "10px",
          marginBottom: "10px",
          color: "#222",
        }}
      >
        Page Not Found
      </h2>

      {/* Description */}
      <p
        style={{
          maxWidth: "500px",
          fontSize: "16px",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        The page you are looking for might have been removed,
        renamed, or is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          style={{
            padding: "12px 24px",
            background: "#543d98",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 500,
          }}
        >
          Go Home
        </Link>

        <Link
          to="/contact-us"
          style={{
            padding: "12px 24px",
            border: "1px solid #000",
            color: "#000",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 500,
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
