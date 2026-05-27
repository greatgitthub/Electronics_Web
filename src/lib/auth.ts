export interface JwtPayload {
  exp?: number;
  id?: string;
  username?: string;
  [key: string]: unknown;
}

const TOKEN_KEY = "token";

const decodeBase64Url = (value: string) => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return atob(padded);
};

export const parseToken = (token: string): JwtPayload | null => {
  try {
    const [, payload] = token.split(".");
    if (!payload) {
      return null;
    }

    return JSON.parse(decodeBase64Url(payload)) as JwtPayload;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const payload = parseToken(token);
  if (!payload || typeof payload.exp !== "number") {
    return true;
  }

  return payload.exp * 1000 <= Date.now();
};

export const getTokenExpiryDelay = (token: string): number | null => {
  const payload = parseToken(token);
  if (!payload || typeof payload.exp !== "number") {
    return null;
  }

  return Math.max(payload.exp * 1000 - Date.now(), 0);
};

export const clearAuthSession = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getValidToken = (): string | null => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    return null;
  }

  if (isTokenExpired(token)) {
    clearAuthSession();
    return null;
  }

  return token;
};
