/**
 * Job/Position information
 */
export interface Job {
  title: string;
  company: string;
  website: string;
}

/**
 * User profile information with SEO optimization
 */
export interface User {
  // Core Identity
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender?: string;
  pronouns?: string;

  // Professional Information
  bio: string;
  flipSentences?: string[];
  jobTitle: string;
  jobs: Job[];
  about: string;

  // Contact Information
  address: string;
  phoneNumber?: string; // E.164 format, base64 encoded
  email: string; // base64 encoded
  website: string;

  // Media Assets
  avatar: string;
  ogImage: string;
  namePronunciationUrl?: string;

  // SEO & Metadata
  timeZone: string;
  keywords: string[];
  dateCreated: string; // YYYY-MM-DD format
}
