import EVENT from '@/config/event';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="font-display font-semibold text-text text-base mb-2">
              {EVENT.name}
            </div>
            <p className="text-muted text-sm max-w-[45ch] mb-4">
              Organized by {EVENT.organizer.name}
            </p>
            <div className="text-sm text-muted space-y-1">
              <div>
                <span className="text-text">Email:</span>{' '}
                <a
                  href={`mailto:${EVENT.email}`}
                  className="footer-social-link hover:underline"
                >
                  {EVENT.email}
                </a>
              </div>
              <div>
                <span className="text-text">Phone:</span>{' '}
                <a
                  href={`tel:${EVENT.phone}`}
                  className="footer-social-link hover:underline"
                >
                  {EVENT.phone}
                </a>
              </div>
              <div>
                <span className="text-text">Venue:</span> {EVENT.address}
              </div>
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-text text-sm mb-3">
              Social Links
            </div>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm">
              <li>
                <a
                  href={EVENT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Visit IEEE CS PUSBC Facebook Page"
                >
                  Facebook ↗
                </a>
              </li>
              <li>
                <a
                  href={EVENT.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Visit IEEE CS PUSBC LinkedIn Profile"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={EVENT.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Visit IEEE CS PUSBC YouTube Channel"
                >
                  YouTube ↗
                </a>
              </li>
              <li>
                <a
                  href={EVENT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Visit IEEE CS PUSBC Instagram Profile"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <span>© 2026 {EVENT.organizer.name}. All rights reserved.</span>
          <span>{EVENT.address}</span>
        </div>
      </div>
    </footer>
  );
}
