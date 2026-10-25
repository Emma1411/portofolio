import { profile } from '../../content';

export default function Footer() {
  return (
    <footer className="border-t border-azure/15 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-night/60">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
        </p>
      </div>
    </footer>
  );
}