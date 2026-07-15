import { useEffect, useState } from 'react';
import './AdminRequests.scss';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const STORAGE_KEY = 'portfolio-admin-token';

type RequestItem = {
  id: number;
  name: string;
  email: string;
  project: string;
  package: string;
  addOns: string[];
  createdAt: string;
};

export default function AdminRequests() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(() => Boolean(localStorage.getItem(STORAGE_KEY)));
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    if (!authorized) {
      setLoading(false);
      return;
    }

    let isActive = true;

    const loadRequests = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/requests`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(STORAGE_KEY)}`,
          },
        });
        if (!response.ok) {
          const text = await response.text();
          let data: { error?: string } | null = null;
          try {
            data = text ? JSON.parse(text) : null;
          } catch {
            throw new Error('The server returned an unexpected response.');
          }
          throw new Error(data?.error || 'Unable to load requests');
        }

        const text = await response.text();
        let data: RequestItem[] = [];
        try {
          data = text ? JSON.parse(text) : [];
        } catch {
          throw new Error('The server returned an unexpected response.');
        }

        if (isActive) {
          setRequests(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : 'Failed to load requests');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadRequests();
    return () => {
      isActive = false;
    };
  }, [authorized]);

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const text = await response.text();
      let data: { error?: string; token?: string } | null = null;

      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        throw new Error('The server returned an unexpected response.');
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Invalid password');
      }

      const token = data?.token;
      if (!token) {
        throw new Error('Authentication response was invalid');
      }

      localStorage.setItem(STORAGE_KEY, token);
      setAuthorized(true);
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <main className="admin-requests">
      <div className="admin-requests__inner">
        <section className="admin-requests__hero">
          <span className="admin-requests__eyebrow">Admin panel</span>
          <h1 className="admin-requests__title">Collaboration requests</h1>
          <p className="admin-requests__text">
            Review incoming project requests, see their package and scope, and follow up quickly.
          </p>
        </section>

        {!authorized ? (
          <form className="admin-requests__auth" onSubmit={handleAuth}>
            <h2 className="admin-requests__auth-title">Access required</h2>
            <p className="admin-requests__auth-text">Enter the admin password to view collaboration requests.</p>
            <input
              className="admin-requests__input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Admin password"
              required
            />
            {error ? <p className="admin-requests__state admin-requests__state--error">{error}</p> : null}
            <button className="admin-requests__submit" type="submit" disabled={authLoading}>
              {authLoading ? 'Checking...' : 'Enter'}
            </button>
          </form>
        ) : loading ? (
          <div className="admin-requests__state">Loading requests...</div>
        ) : error ? (
          <div className="admin-requests__state admin-requests__state--error">{error}</div>
        ) : requests.length === 0 ? (
          <div className="admin-requests__empty">No requests yet.</div>
        ) : (
          <div className="admin-requests__grid">
            {requests.map((request) => (
              <article key={request.id} className="admin-requests__card">
                <div className="admin-requests__card-head">
                  <div>
                    <h2 className="admin-requests__card-name">{request.name}</h2>
                    <p className="admin-requests__card-email">{request.email}</p>
                  </div>
                  <span className="admin-requests__card-date">
                    {new Date(request.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="admin-requests__meta">
                  <span className="admin-requests__pill">{request.package}</span>
                  {request.addOns.length > 0 ? (
                    <span className="admin-requests__pill admin-requests__pill--muted">
                      {request.addOns.join(', ')}
                    </span>
                  ) : null}
                </div>

                <p className="admin-requests__project-label">Project idea</p>
                <p className="admin-requests__project">{request.project}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
