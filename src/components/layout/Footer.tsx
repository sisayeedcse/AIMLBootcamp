import EVENT_CONFIG from '@/config/event';

export default function Footer() {
  return (
    <footer className="border-t border-[#2b2b2b] py-8 text-[#a8a8a8] text-sm">
      <div className="wrap flex justify-between gap-4 flex-wrap items-center">
        <span>{EVENT_CONFIG.organizer.copyright}</span>
        <span>
          <a
            href={`mailto:${EVENT_CONFIG.organizer.email}`}
            className="hover:text-white underline-offset-4 hover:underline"
          >
            {EVENT_CONFIG.organizer.email}
          </a>{' '}
          · {EVENT_CONFIG.organizer.address}
        </span>
      </div>
    </footer>
  );
}
