import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  isLoggedIn: "gymai_isLoggedIn",
  user: "gymai_user",
};

// Sensible demo defaults so the Dashboard/Profile don't look empty
// the moment someone signs up — every field is still editable.
const defaultFitnessProfile = {
  age: 24,
  gender: "Prefer not to say",
  height: 170, // cm
  weight: 70, // kg
  goal: "Build Muscle",
  level: "Beginner",
};

const deriveNameFromEmail = (email) => {
  const local = email.split("@")[0] || "Athlete";
  return local
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);

  // Hydrate from localStorage on first load
  useEffect(() => {
    try {
      const storedLoggedIn = localStorage.getItem(STORAGE_KEYS.isLoggedIn) === "true";
      const storedUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || "null");
      setIsLoggedIn(storedLoggedIn);
      setUser(storedUser);
    } catch {
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);

  const persist = (nextUser, nextLoggedIn) => {
    localStorage.setItem(STORAGE_KEYS.isLoggedIn, String(nextLoggedIn));
    if (nextUser) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(nextUser));
  };

  // Demo-only: accepts any email/password combination.
  const login = (email) => {
    let existing = null;
    try {
      existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || "null");
    } catch {
      existing = null;
    }

    const nextUser =
      existing && existing.email?.toLowerCase() === email.toLowerCase()
        ? existing
        : {
            fullName: deriveNameFromEmail(email),
            email,
            ...defaultFitnessProfile,
          };

    setUser(nextUser);
    setIsLoggedIn(true);
    persist(nextUser, true);
    return nextUser;
  };

  const signup = (fullName, email) => {
    const nextUser = {
      fullName,
      email,
      ...defaultFitnessProfile,
    };
    setUser(nextUser);
    setIsLoggedIn(true);
    persist(nextUser, true);
    return nextUser;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.isLoggedIn);
    localStorage.removeItem(STORAGE_KEYS.user);
    setUser(null);
    setIsLoggedIn(false);
  };

  const updateProfile = (updates) => {
    setUser((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, ready, login, signup, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
