import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';
import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { profile } from '../../content';
import Section from '../ui/Section';
import lkdn from '../../../assets/lkdn.jpg';
import gmail from '../../../assets/gmail.jpg';
import git from '../../../assets/lucide-github.png'

type Status = 'idle' | 'sending' | 'success' | 'error';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const handleOf = (url: string) =>
  url.split('/').filter(Boolean).pop() ?? url;

const field =
  'mt-1.5 w-full rounded-xl border border-azure/25 bg-white/80 px-4 py-3 text-sm text-night outline-none transition placeholder:text-night/40 focus:border-azure focus:ring-2 focus:ring-azure/30';

export default function Contact() {
  const t = useLocalized();
  const [status, setStatus] = useState<Status>('idle');

  const channels = [
    {
      id: 'email',
      label: t(ui.contact.email),
      value: profile.links.email,
      href: `mailto:${profile.links.email}`,
      image: gmail,
      alt: 'Gmail',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: handleOf(profile.links.linkedin),
      href: profile.links.linkedin,
      image: lkdn,
      alt: 'LinkedIn',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: handleOf(profile.links.github),
      href: profile.links.github,
      image: git,
    },
  ];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Protection anti-spam
    if (data.get('_gotcha')) return;

    if (!ENDPOINT) {
      const subject = encodeURIComponent(
        `${t(ui.contact.subjectPrefix)} ${data.get('name')}`
      );

      const body = encodeURIComponent(
        `${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`
      );

      window.location.href =
        `mailto:${profile.links.email}?subject=${subject}&body=${body}`;

      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        throw new Error(String(res.status));
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      title={t(ui.contact.title)}
      lead={t(ui.contact.lead)}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Liens de contact */}
        <ul className="space-y-3 self-start">
          {channels.map(({ id, label, href, image, alt }) => (
            <li key={id}>
              <a
                href={href}
                target={id === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between gap-4 rounded-2xl p-4 shadow-soft transition hover:shadow-glow"
              >
                <span>
                  <span className="block font-mono text-xs text-cobalt">
                    {label}
                  </span>
                </span>

                {image ? (
                  <img
                    src={image}
                    alt={alt}
                    className="h-7 w-7 shrink-0 rounded object-contain transition group-hover:scale-110"
                  />
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-cobalt"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Formulaire de contact */}
        <form
          onSubmit={onSubmit}
          className="glass rounded-3xl p-6 shadow-soft sm:p-7"
        >
          <h3 className="font-display text-xl font-bold text-night">
            {t(ui.contact.formTitle)}
          </h3>

          {/* Champ piège anti-spam */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label
              htmlFor="contact-name"
              className="text-sm font-medium text-night"
            >
              {t(ui.contact.name)}

              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t(ui.contact.namePlaceholder)}
                className={field}
              />
            </label>

            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-night"
            >
              {t(ui.contact.email)}

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t(ui.contact.emailPlaceholder)}
                className={field}
              />
            </label>
          </div>

          <label
            htmlFor="contact-message"
            className="mt-4 block text-sm font-medium text-night"
          >
            {t(ui.contact.message)}

            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder={t(ui.contact.messagePlaceholder)}
              className={`${field} resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cobalt to-cyan-electric px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:brightness-110 disabled:opacity-60"
          >
            {status === 'sending'
              ? t(ui.contact.sending)
              : t(ui.contact.send)}

            <Send size={16} />
          </button>

          {/* État du formulaire */}
          <div
            role="status"
            aria-live="polite"
            className="mt-4 text-sm"
          >
            {status === 'success' && (
              <p className="flex items-center gap-2 font-medium text-cobalt">
                <Check size={16} />
                {t(ui.contact.success)}
              </p>
            )}

            {status === 'error' && (
              <p className="text-night/80">
                {t(ui.contact.error)}{' '}
                <a
                  href={`mailto:${profile.links.email}`}
                  className="font-medium text-cobalt underline"
                >
                  {profile.links.email}
                </a>
              </p>
            )}

            {!ENDPOINT && status === 'idle' && (
              <p className="font-mono text-xs text-night/50">
                {t(ui.contact.mailtoHint)}
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
