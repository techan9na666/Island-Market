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

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--primary-yellow)]"></div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Year Marker */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              event.isModern ? 'bg-[var(--primary-yellow)]' : 'bg-[var(--primary-green)]'
            } text-white px-4 py-2 rounded-full font-bold`}>
              {event.year}
            </div>

            {/* Content */}
            <div className={`w-5/12 p-6 rounded-lg shadow-md bg-white/90 ${
              index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
            }`}>
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