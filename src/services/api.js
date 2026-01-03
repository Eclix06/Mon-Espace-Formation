async function apiFetch(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json", ...(options?.headers || {}) },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${res.statusText} - ${text}`);
  }

  const ct = res.headers.get("content-type") || "";
  return ct.includes("application/json") ? res.json() : res.text();
}

export const api = {
  sessions: () => apiFetch("/sessions"),
  inscriptionsByUser: (userId) => apiFetch(`/inscriptions/user/${userId}`),
  dashboardByEmail: (email) => apiFetch(`/dashboard/${encodeURIComponent(email)}`),
  health: () => apiFetch("/health"),
};
