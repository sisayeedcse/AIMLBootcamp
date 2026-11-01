import EVENT_CONFIG from '@/config/event';

export { EVENT_CONFIG };

export const EVENT = {
  name: EVENT_CONFIG.name,
  shortName: EVENT_CONFIG.shortName,
  year: EVENT_CONFIG.year,
  organizer: EVENT_CONFIG.organizer,
  application: EVENT_CONFIG.application,
  dates: EVENT_CONFIG.dates,
  fees: EVENT_CONFIG.fees,
  seats: EVENT_CONFIG.seats,
};

export default EVENT;
