interface RecaptchaVerifyResult {
  success: boolean;
  score?: number;
  action?: string;
  errorCodes?: string[];
}

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
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return { success: false, reason: 'reCAPTCHA secret key is not configured' };
  }
  if (!token) {
    return { success: false, reason: 'reCAPTCHA token is missing' };
  }

  try {
    const params = new URLSearchParams();
    params.set('secret', process.env.RECAPTCHA_SECRET_KEY);
    params.set('response', token);

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = (await response.json()) as RecaptchaVerifyResult & {
      'error-codes'?: string[];
    };

    const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? '0.5');
    const scoreOk = typeof data.score === 'number' ? data.score >= minScore : false;
    const actionOk = data.action === expectedAction;

    if (!data.success) {
      return {
        success: false,
        reason: 'reCAPTCHA verification failed',
        score: data.score,
        action: data.action,
        errorCodes: data['error-codes'],
      };
    }

    if (!actionOk) {
      return {
        success: false,
        reason: 'reCAPTCHA action mismatch',
        score: data.score,
        action: data.action,
      };
    }

    if (!scoreOk) {
      return {
        success: false,
        reason: 'reCAPTCHA score too low',
        score: data.score,
        action: data.action,
      };
    }

    return {
      success: true,
      score: data.score,
      action: data.action,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, reason: 'reCAPTCHA verification error' };
  }
}
