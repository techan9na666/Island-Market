import Image from 'next/image';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  isModern?: boolean;
}

interface MobileTimelineProps {
  events: TimelineEvent[];
}

export default function MobileTimeline({ events }: MobileTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 h-full w-0.5 bg-[var(--primary-yellow)]"></div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative">
            {/* Year Marker */}
            <div className={`ml-12 mb-4 ${
              event.isModern ? 'bg-[var(--primary-yellow)]' : 'bg-[var(--primary-green)]'
            } text-white px-4 py-2 rounded-full font-bold inline-block`}>
              {event.year}
            </div>

            {/* Content Card */}
            <div className="ml-12 p-4 rounded-lg shadow-md bg-white/90">
              <h3 className="text-xl font-bold mb-2 text-[var(--text-dark)]">{event.title}</h3>
              <p className="text-[var(--text-light)] mb-4">{event.description}</p>
              
              {event.image && (
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    fill
                    className="object-cover"
                    quality={75}
                  />
                </div>
              )}
              
              {event.imageCaption && (
                <p className="text-sm text-[var(--text-light)] italic">{event.imageCaption}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 