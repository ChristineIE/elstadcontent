import { useCallback, useEffect, useRef, useState } from "react";
import { clients } from "../data/clients.js";

// A quiet, horizontal carousel. The browser handles the scrolling and snapping
// (see the .clients rules in pages.css); this component only keeps track of
// which "page" is showing so the arrows and markers stay in sync.
export default function ClientsCarousel() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // Work out how many pages there are and which one we are on
  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.clientWidth;
    const maxScroll = track.scrollWidth - width;
    const count = Math.max(1, Math.ceil(track.scrollWidth / width - 0.05));

    setPageCount(count);
    if (maxScroll <= 0) setPage(0);
    else if (track.scrollLeft >= maxScroll - 2) setPage(count - 1);
    else setPage(Math.round(track.scrollLeft / width));
  }, []);

  // Recalculate when the window (and so the track) changes size
  useEffect(() => {
    update();
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [update]);

  function goTo(index) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="clients container" aria-roledescription="carousel" aria-label="Selected clients and partners">
      <h2 className="eyebrow clients__title">Selected Clients &amp; Partners</h2>

      <div className="clients__stage">
        <button
          type="button"
          className="clients__arrow"
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          aria-label="Previous clients"
        >
          ←
        </button>

        <ul className="clients__track" ref={trackRef} onScroll={update} tabIndex={0}>
          {clients.map((client, index) => (
            <li className="clients__item" key={`${client.name}-${index}`}>
              {client.logo ? (
                <img className="clients__logo" src={client.logo} alt={client.name} />
              ) : (
                <span className="clients__name">{client.name}</span>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="clients__arrow"
          onClick={() => goTo(page + 1)}
          disabled={page >= pageCount - 1}
          aria-label="Next clients"
        >
          →
        </button>
      </div>

      {pageCount > 1 && (
        <div className="clients__dots">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === page ? "clients__dot clients__dot--active" : "clients__dot"}
              onClick={() => goTo(i)}
              aria-label={`Show clients, page ${i + 1} of ${pageCount}`}
              aria-current={i === page ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
