// ReCAPTCHA functionality has been removed from the application
// This file is kept for potential future use but currently returns success by default

interface RecaptchaCheckResult {
  success: boolean;
  reason?: string;
  score?: number;
  action?: string;
  errorCodes?: string[];
}

export async function verifyRecaptchaToken(
  token: string,
  expectedAction: string
): Promise<RecaptchaCheckResult> {
  // ReCAPTCHA has been disabled - always return success
  return {
    success: true,
    score: 1.0,
  };
}