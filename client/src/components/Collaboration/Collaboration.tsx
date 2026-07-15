import { useMemo, useState } from 'react';
import './Collaboration.scss';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

type PackageKey = 'landing' | 'business' | 'mvp';

type PackageOption = {
  key: PackageKey;
  title: string;
  price: string;
  description: string;
  features: string[];
};

const packages: PackageOption[] = [
  {
    key: 'landing',
    title: 'Landing Page',
    price: 'from $1.5k',
    description: 'Fast, polished one-page experience for your product or service.',
    features: ['Modern one-page layout', 'Responsive UI', 'Contact / CTA section', 'SEO basics'],
  },
  {
    key: 'business',
    title: 'Business Website',
    price: 'from $3k',
    description: 'A multi-section website tailored for a brand, startup, or service business.',
    features: ['Up to 6 content sections', 'CMS-ready structure', 'Animation polish', 'Performance optimization'],
  },
  {
    key: 'mvp',
    title: 'MVP / Web App',
    price: 'from $6k',
    description: 'A scalable product with frontend, backend, and database foundations.',
    features: ['React frontend', 'Node / API layer', 'Database integration', 'Admin panel basics'],
  },
];

const addOns = [
  'UI/UX refinement',
  'Analytics setup',
  'CMS integration',
  'Deployment & hosting',
  'SEO optimization',
  'Maintenance support',
];

export default function Collaboration() {
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('business');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['Analytics setup']);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const activePackage = useMemo(
    () => packages.find((item) => item.key === selectedPackage) ?? packages[1],
    [selectedPackage]
  );

  const toggleAddon = (value: string) => {
    setSelectedAddons((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('loading');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          package: activePackage.title,
          addOns: selectedAddons,
        }),
      });

      const text = await response.text();
      let data: { error?: string } | null = null;

      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        throw new Error('The server returned an unexpected response.');
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong');
      }

      setFormState('success');
      setMessage('Thanks! Your request has been received and saved.');
      setFormData({ name: '', email: '', project: '' });
      setSelectedAddons(['Analytics setup']);
    } catch (error) {
      setFormState('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed');
    }
  };

  return (
    <main className="collaboration">
      <div className="collaboration__inner">
        <section className="collaboration__hero">
          <span className="collaboration__eyebrow">Collaboration request</span>
          <h1 className="collaboration__title">Let’s build something useful together.</h1>
          <p className="collaboration__text">
            Tell me about your idea, choose a package, and add any extra services you need. I’ll review the request and get back to you shortly.
          </p>
        </section>

        <section className="collaboration__content">
          <div className="collaboration__cards">
            {packages.map((item) => {
              const active = item.key === selectedPackage;
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`collaboration__card ${active ? 'collaboration__card--active' : ''}`}
                  onClick={() => setSelectedPackage(item.key)}
                >
                  <div className="collaboration__card-header">
                    <h2 className="collaboration__card-title">{item.title}</h2>
                    <span className="collaboration__card-price">{item.price}</span>
                  </div>
                  <p className="collaboration__text">{item.description}</p>
                  <ul className="collaboration__card-list">
                    {item.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          <aside className="collaboration__summary">
            <h2 className="collaboration__summary-title">Your request</h2>

            <div className="collaboration__summary-box">
              <span className="collaboration__summary-label">Selected package</span>
              <span className="collaboration__summary-value">{activePackage.title}</span>
            </div>

            <div className="collaboration__summary-box">
              <span className="collaboration__summary-label">Add-ons</span>
              <span className="collaboration__summary-value">
                {selectedAddons.length ? selectedAddons.join(', ') : 'No extras selected'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="collaboration__form">
              <input type="hidden" name="package" value={activePackage.title} />
              <input type="hidden" name="addOns" value={selectedAddons.join(', ')} />

              <div className="collaboration__field">
                <label className="collaboration__label" htmlFor="name">Name</label>
                <input
                  className="collaboration__input"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                />
              </div>

              <div className="collaboration__field">
                <label className="collaboration__label" htmlFor="email">Email</label>
                <input
                  className="collaboration__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                />
              </div>

              <div className="collaboration__field">
                <label className="collaboration__label" htmlFor="project">Project idea</label>
                <textarea
                  className="collaboration__textarea"
                  id="project"
                  name="project"
                  placeholder="Describe your project or business goal"
                  required
                  value={formData.project}
                  onChange={(event) => setFormData((prev) => ({ ...prev, project: event.target.value }))}
                />
              </div>

              <div className="collaboration__field">
                <label className="collaboration__label">Optional add-ons</label>
                <div className="collaboration__options">
                  {addOns.map((option) => (
                    <label className="collaboration__option" key={option}>
                      <input
                        type="checkbox"
                        checked={selectedAddons.includes(option)}
                        onChange={() => toggleAddon(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {message ? (
                <p className={`collaboration__message ${formState === 'success' ? 'collaboration__message--success' : 'collaboration__message--error'}`}>
                  {message}
                </p>
              ) : null}

              <button className="collaboration__submit" type="submit" disabled={formState === 'loading'}>
                {formState === 'loading' ? 'Sending...' : 'Send request'}
              </button>
            </form>
          </aside>
        </section>
      </div>
    </main>
  );
}
