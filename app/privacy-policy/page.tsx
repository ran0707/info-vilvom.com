"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div style={{ 
      fontFamily: "var(--font-geist-sans, sans-serif)",
      backgroundColor: "#ffffff",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#3B4FB8",
        color: "#ffffff",
        padding: "2rem 1rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", margin: 0 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem", opacity: 0.9 }}>
          VILVOM LLP
        </p>
      </header>

      {/* Content */}
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem"
      }}>
        {/* Dates */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
          fontSize: "0.9rem",
          color: "#666"
        }}>
          <p><strong>Effective Date:</strong> 25 May 2026</p>
          <p><strong>Last Updated:</strong> 26 May 2026</p>
        </div>

        {/* Section 1 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            1. Introduction
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            Welcome to VILVOM LLP ("we," "our," or "us"). VILVOM is a technology-driven agricultural services platform developed to empower farmers both large-scale and smallholder with intelligent pest infestation assessment and professional drone-assisted crop management services.
          </p>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            This Privacy Policy describes how VILVOM collects, uses, stores, discloses, and protects the personal information of users ("you" or "User" or "your") who access our services through:
          </p>
          <ul style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Our official website: www.vilvom.com</li>
            <li>Our mobile application: VILVOM (available on Google Play Store)</li>
            <li>Any related services, features, or communications offered by VILVOM</li>
          </ul>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            By downloading, registering, or using the VILVOM application or website, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. This Privacy Policy is prepared in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and the Digital Personal Data Protection Rules, 2025. If you do not agree, please discontinue use of our services.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            2. Personal Data We Collect and Process
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            We provide this itemized description of personal data we collect and the specific purposes for which each category is processed:
          </p>

          <h3 style={{ 
            fontSize: "1.4rem", 
            fontWeight: "600", 
            color: "#2e7d32",
            marginBottom: "1rem"
          }}>
            2.1 Information You Provide Directly
          </h3>
          
          <div style={{ 
            overflowX: "auto",
            marginBottom: "2rem",
            border: "1px solid #e0e0e0",
            borderRadius: "8px"
          }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              fontSize: "0.9rem"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5" }}>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Personal Data</th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Specific Purpose for Processing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Full name</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Account identification, personalised communication, and service delivery coordination</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Mobile phone number</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>OTP-based authentication for secure login and sending service updates via SMS</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Email address</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Account recovery, sending notifications, assessment reports, and responding to support requests</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Farm address / physical location (GPS coordinates)</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Service delivery, drone scheduling, operator navigation, and field assessment</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Photographic images of crops</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>AI-powered pest infestation analysis and generating assessment reports</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Service feedback and ratings</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Improving service quality and training our support systems</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}>Drone service booking details (date, time, service type)</td>
                  <td style={{ padding: "1rem" }}>Scheduling and dispatching drone operators to your farm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ 
            fontSize: "1.4rem", 
            fontWeight: "600", 
            color: "#2e7d32",
            marginBottom: "1rem",
            marginTop: "2rem"
          }}>
            2.2 Information Collected Automatically
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            When you use the VILVOM application, the following data may be collected automatically:
          </p>

          <div style={{ 
            overflowX: "auto",
            marginBottom: "2rem",
            border: "1px solid #e0e0e0",
            borderRadius: "8px"
          }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              fontSize: "0.9rem"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5" }}>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Automatic Data</th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Specific Purpose for Processing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Device information (model, OS version, unique device identifiers)</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Technical support, debugging, optimizing app performance, and fraud prevention</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>GPS and location data</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Recording precise farm coordinates during drone booking and providing localized recommendations (only collected with your explicit permission)</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>App usage data (screens visited, features used, session duration)</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Understanding user behavior to improve app functionality and user experience</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Network information (IP address, mobile network type)</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Security monitoring, detecting unauthorized access, and service optimization</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Push notification tokens</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Delivering OTP codes, service alerts, and booking confirmations to your device</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}>Camera and media access data</td>
                  <td style={{ padding: "1rem" }}>Enabling you to capture and upload images for pest infestation analysis</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ 
            fontSize: "1.4rem", 
            fontWeight: "600", 
            color: "#2e7d32",
            marginBottom: "1rem",
            marginTop: "2rem"
          }}>
            2.3 Information from Third Parties
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We may receive supplementary data from:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Agricultural databases and pest outbreak registries (for improving recommendation accuracy)</li>
            <li>Payment processors for processing drone service transactions</li>
            <li>Mapping and satellite services to enhance farm location accuracy</li>
          </ol>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            3. How We Use Your Information
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            We use the collected information solely for the following legitimate purposes:
          </p>

          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            3.1 Service Delivery
          </h3>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>Authenticating your identity via OTP verification</li>
            <li>Processing pest detection requests and generating AI-based assessment reports</li>
            <li>Scheduling, mobilizing, and organizing drone service operations to your farm location</li>
            <li>Delivering treatment and recommendation reports</li>
          </ol>

          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            3.2 Communication
          </h3>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>Sending One-Time Passwords (OTPs) for secure login</li>
            <li>Issuing booking confirmations, service updates, and drone deployment notifications</li>
            <li>Responding to your feedback, complaints, and support requests</li>
          </ol>

          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            3.3 Platform Improvement
          </h3>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>Analyzing aggregated usage patterns to improve app functionality and user experience</li>
            <li>Identifying and resolving technical issues</li>
          </ol>

          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            3.4 Legal and Safety Compliance
          </h3>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Complying with applicable laws, regulations, and legal proceedings</li>
            <li>Detecting and preventing fraudulent, unauthorized, or illegal activity</li>
            <li>Enforcing our Terms of Service</li>
          </ol>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            4. Specific Data Collection Contexts
          </h2>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            4.1 Location Data
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            The VILVOM application requests access to your device's GPS location for the following specific purposes:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Drone service booking: To accurately record the GPS coordinates of your farm for operator navigation and service delivery</li>
            <li>Nearby recommendations: To provide localized pest management recommendations relevant to your geographic area</li>
            <li>Field mapping: To assist drone operators in planning flight paths over your land</li>
          </ol>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            You retain full control over location access. Location data is only collected when you actively initiate a drone booking or pest assessment. You may revoke location permission at any time through your device settings. We do not track your location continuously or in the background. Disabling location access may limit certain features of the application.
          </p>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            4.2 Camera and Image Data
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            The VILVOM application requests camera access to enable you to photograph crops and submit images for pest infestation analysis. Please note:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>Images you submit are processed by our AI pest infestation assessment framework</li>
            <li>Submitted images are stored on our secure servers to generate and retrieve your assessment history</li>
            <li>Images are never sold to third parties or used for purposes unrelated to our specified services</li>
            <li>You may request deletion of your submitted images at any time (see Section 10)</li>
          </ol>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            4.3 Push Notifications
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            VILVOM uses push notifications to:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Deliver OTP codes for login authentication</li>
            <li>Notify you of drone-based services, booking confirmations, scheduling updates, and operator dispatches</li>
            <li>Alert you to important service updates or pest outbreak advisories in your region</li>
          </ol>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            You may manage or disable push notifications through your device's notification settings. Disabling notifications will not affect your ability to use the app, but you may miss time-sensitive service alerts.
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            5. Data Storage, Security and Retention
          </h2>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            5.1 Storage Location
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            Your personal data is stored on secure servers hosted on VILVOM's backend infrastructure. We take reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            5.2 Security Safeguards
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We implement the following reasonable security safeguards to prevent personal data breach:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li><strong>Encryption:</strong> All communication between you and our website services uses HTTPS/TLS encryption.</li>
            <li><strong>Authentication:</strong> OTP-based two-factor authentication is required for all account logins</li>
            <li><strong>Access controls:</strong> Only authorized VILVOM personnel have access to personal data on a strict need-to-know basis, enforced through role-based access controls (RBAC) and multi-factor authentication</li>
            <li><strong>Logging and monitoring:</strong> We maintain comprehensive logs of data access and processing activities with appropriate monitoring and review to detect unauthorized access. Access logs enable investigation and remediation to prevent recurrence of security incidents</li>
            <li><strong>Data backup:</strong> We maintain reasonable measures for continued processing in the event of data compromise, including regular encrypted backups</li>
            <li><strong>Log retention:</strong> Access logs and processing records are retained for a minimum period of one year unless longer retention is required by applicable law</li>
            <li><strong>Data processor agreements:</strong> Our contracts with third-party service providers include appropriate provisions requiring them to take reasonable security safeguards</li>
          </ol>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            5.3 Data Retention Period
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We retain your personal data in accordance with its relevance and appropriateness with the VILVOM's services.
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li><strong>Active accounts:</strong> Personal data is retained to maintain your active account and service history</li>
            <li><strong>Inactive accounts:</strong> If you do not access your VILVOM account or use our services for a period of 3 years, we will send you a notification at least 48 hours before automatically erasing your personal data, unless you log in or contact us to continue service</li>
            <li><strong>Account deletion:</strong> Upon your request to delete your account, your identifiable personal data is purged within 30 days, except where retention is required by law</li>
            <li><strong>Minimum log retention:</strong> Personal data, associated traffic data, and processing logs are retained for a minimum of one year from the date of processing for audit, security investigation, and compliance purposes, after which they are erased unless further retention is required by law</li>
            <li><strong>Legal obligations:</strong> Data may be retained longer to comply with applicable legal or regulatory obligations, resolve disputes, or enforce our agreements</li>
          </ol>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            6. Data Sharing and Disclosure
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            We do not sell, rent, or trade your personal information to any third party. We may share limited information only in the following circumstances:
          </p>

          <div style={{ 
            overflowX: "auto",
            marginBottom: "1.5rem",
            border: "1px solid #e0e0e0",
            borderRadius: "8px"
          }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              fontSize: "0.9rem"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5" }}>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Recipient</th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Information Shared</th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #3B4FB8" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Drone service operators</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Farm name, GPS coordinates, booking details</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Service dispatch and field operations</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Cloud/server infrastructure providers</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Encrypted application data</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Hosting and processing services</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Legal authorities</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>As required by law</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #e0e0e0" }}>Compliance with court orders or regulatory requirements under applicable law</td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}>Fraud prevention services</td>
                  <td style={{ padding: "1rem" }}>Usage anomalies and security logs</td>
                  <td style={{ padding: "1rem" }}>Detecting and preventing suspicious activity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            Any third-party service providers we engage are bound by confidentiality obligations and are prohibited from using your data for any purpose other than the service they are contracted to provide.
          </p>
        </section>

        {/* Section 7 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            color: "#3B4FB8",
            marginBottom: "1rem"
          }}>
            7. Data Breach Response and Notification
          </h2>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            7.1 Notification to Users
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We will notify affected users without delay through your registered email address, mobile number (SMS), or in-app notification. The notification will include:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>A description of the breach, including its nature, extent, and timing</li>
            <li>The consequences relevant to you that are likely to arise from the breach</li>
            <li>The measures we have implemented or are implementing to mitigate the risk</li>
            <li>Safety measures you can take to protect your interests</li>
            <li>Contact information (see Section 9) for queries about the breach</li>
          </ol>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            7.2 Notification to Data Protection Board (DPBI)
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We will report the breach to the DPBI:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li><strong>Without delay:</strong> Initial description including nature, extent, timing, location, and likely impact</li>
            <li><strong>Within 72 hours:</strong> Detailed information on events, circumstances, mitigation measures, findings regarding breach causation, remedial actions, and report of user notifications</li>
          </ol>
        </section>

        {/* Sections 8-10 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            8. Cross-Border Data Transfer
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            While storing your personal data outside India to service providers (such as cloud infrastructure providers), we ensure such transfers comply with DPDP Rules 2025 and any requirements specified by the Central Government of India. We do not make personal data available to foreign states or entities under their control without complying with applicable legal requirements.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            9. Contact Information for Data Protection
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We have designated the following contact person who can answer your questions about the processing of your personal data:
          </p>
          <div style={{ 
            backgroundColor: "#f5f5f5", 
            padding: "1.5rem", 
            borderRadius: "8px",
            borderLeft: "4px solid #3B4FB8",
            marginBottom: "1rem"
          }}>
            <p style={{ lineHeight: "1.8", color: "#333", margin: 0 }}>
              <strong>Data Protection Contact Person</strong><br />
              Name: G Saravana Kumar, VILVOM LLP<br />
              Email Contact: info@vilvom.com
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            10. Your Rights and How to Exercise Them
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            As a VILVOM user, you have the following rights under the DPDPA regarding your personal data:
          </p>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            10.1 Your Rights
          </h3>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Right to Correction:</strong> Correct inaccurate or incomplete information in your profile</li>
            <li><strong>Right to Deletion:</strong> Request deletion of your account and associated personal data</li>
            <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format</li>
            <li><strong>Right to Withdraw Consent:</strong> Revoke consent for optional data uses (such as using anonymized images for AI model training) at any time</li>
            <li><strong>Right to Nominate:</strong> Nominate one or more individuals to exercise your rights on your behalf</li>
          </ol>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            10.2 How to Exercise Your Rights
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            To exercise any of these rights, you may:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>Email us at: info@vilvom.com</li>
            <li>Contact Support through the VILVOM mobile application</li>
          </ol>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            10.3 Consent Withdrawal Mechanism
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            To withdraw your consent with ease you may:
          </p>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem", marginLeft: "2rem" }}>
            Email with subject "Consent Withdrawal" to: info@vilvom.com
          </p>

          <h3 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#2e7d32", marginBottom: "0.8rem" }}>
            10.4 Response Timeline
          </h3>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We will acknowledge all requests within 7 business days and provide a substantive response within 90 days of receipt of your verified request.
          </p>
        </section>

        {/* Sections 11-14 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            11. Grievance Redressal Mechanism
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            If you have any grievances regarding the processing of your personal data, you may contact us at:
          </p>
          <div style={{ 
            backgroundColor: "#f5f5f5", 
            padding: "1.5rem", 
            borderRadius: "8px",
            borderLeft: "4px solid #2e7d32",
            marginBottom: "1rem"
          }}>
            <p style={{ lineHeight: "1.8", color: "#333", margin: 0 }}>
              Email: info@vilvom.com<br />
              Subject line: "Grievance - [Your Name]"
            </p>
          </div>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We will acknowledge your grievance within 7 business days and provide resolution within 90 days from the date of receipt. If you are not satisfied with our resolution, you may file a complaint with the Data Protection Board of India as per the procedures outlined on their official website.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            12. Children's Privacy (Rule 10 Compliance)
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            The VILVOM application is intended for use by adults and professional agricultural users. We do not knowingly collect personal information from individuals under the age of 18 years. If you believe a minor has provided us with personal information, please contact us immediately at info@vilvom.com and we will take prompt action to remove such data.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            13. Third-Party Links and Services
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            The VILVOM app or website may contain links to partner service pages, third-party websites, or government agricultural portals. This Privacy Policy applies exclusively to VILVOM's own services. We are not responsible for the privacy practices of third-party platforms and encourage you to review their privacy policies independently.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            14. Cookies and Web Tracking (Website)
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            Our website www.vilvom.com may use cookies and relevant tools to:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and user behavior (via analytics tools)</li>
            <li>Improve website performance and content relevance</li>
          </ol>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            You may configure your browser to Select/Reject cookies or alert you when cookies are being sent. Please note that some features of the website may not function correctly if cookies are disabled.
          </p>
        </section>

        {/* Sections 15-17 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            15. Changes to this Privacy Policy
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our services, legal obligations, or data practices. When we make material changes, we will:
          </p>
          <ol style={{ lineHeight: "1.8", color: "#333", marginLeft: "2rem", marginBottom: "1rem" }}>
            <li>Update the "Last Updated" date at the top of this document</li>
            <li>Display a prominent notice within the VILVOM application</li>
            <li>Send a notification to your registered email or mobile number, where applicable</li>
          </ol>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            Your continued use of VILVOM services after such changes constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy periodically.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            16. Governing Law and Jurisdiction
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Digital Personal Data Protection Rules, 2025. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu, India.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3B4FB8", marginBottom: "1rem" }}>
            17. Contact Us
          </h2>
          <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1rem" }}>
            For any questions, concerns, or requests relating to this Privacy Policy or your personal data, please reach out to us:
          </p>
          <div style={{ 
            backgroundColor: "#f5f5f5", 
            padding: "1.5rem", 
            borderRadius: "8px",
            borderLeft: "4px solid #3B4FB8",
            marginBottom: "1rem"
          }}>
            <p style={{ lineHeight: "1.8", color: "#333", margin: 0 }}>
              <strong>VILVOM LLP</strong><br />
              G Saravana Kumar<br />
              Email Contact: info@vilvom.com<br />
              Website: www.vilvom.com
            </p>
          </div>
          <p style={{ lineHeight: "1.8", color: "#333", fontStyle: "italic", marginBottom: "1rem" }}>
            This Privacy Policy has been prepared in compliance with the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025.
          </p>
        </section>

        {/* Back to Home Button */}
        <div style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "2px solid #e0e0e0" }}>
          <Link 
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#3B4FB8",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "background-color 0.3s ease"
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
