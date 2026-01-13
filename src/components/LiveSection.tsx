import Script from "next/script";
export default function LiveSection() {
  return (
    <section id="live" className="min-h-screen w-full bg-black flex items-start justify-center relative overflow-hidden pt-[100px] md:pt-[120px] pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,#7E4AB820_50%,rgba(0,0,0,1)_100%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center min-h-[90vh] flex flex-col justify-start space-y-12 md:space-y-20">
        <div className="min-h-[40vh] flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-wide mb-4 md:mb-8">LIVE SHOWS</h2>
        <div className="space-y-4 md:space-y-6">
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border bg-[#7E4AB820] border-[#7E4AB830]">
            <Script src="https://widgetv3.bandsintown.com/main.min.js" strategy="lazyOnload" />
            <a
              className="bit-widget-initializer"
              data-artist-name="id_15620983"
              data-events-to-display=""
              data-background-color="rgba(0,0,0,1)"
              data-separator-color="rgba(221,221,221,0.3)"
              data-text-color="rgba(255,255,255,1)"
              data-font="Helvetica"
              data-auto-style="true"
              data-button-label-capitalization="capitalize"
              data-header-capitalization="uppercase"
              data-location-capitalization="capitalize"
              data-venue-capitalization="capitalize"
              data-display-local-dates="true"
              data-local-dates-position="tab"
              data-display-past-dates="true"
              data-display-details="false"
              data-display-lineup="false"
              data-display-start-time="true"
              data-social-share-icon="false"
              data-display-limit="all"
              data-date-format="DD/MM/YY"
              data-date-orientation="horizontal"
              data-date-border-color="#4A4A4A"
              data-date-border-width="1px"
              data-date-capitalization="capitalize"
              data-date-border-radius="10px"
              data-event-ticket-cta-size="medium"
              data-event-custom-ticket-text=""
              data-event-ticket-text="TICKETS"
              data-event-ticket-icon="true"
              data-event-ticket-cta-text-color="rgba(255,255,255,1)"
              data-event-ticket-cta-bg-color="rgba(126,74,184,1)"
              data-event-ticket-cta-border-color="rgba(126,74,184,1)"
              data-event-ticket-cta-border-width="0px"
              data-event-ticket-cta-border-radius="2px"
              data-sold-out-button-text-color="rgba(255,255,255,1)"
              data-sold-out-button-background-color="rgba(74,74,74,1)"
              data-sold-out-button-border-color="rgba(74,74,74,1)"
              data-sold-out-button-clickable="true"
              data-event-rsvp-position="hidden"
              data-event-rsvp-cta-size="small"
              data-event-rsvp-only-show-icon="false"
              data-event-rsvp-text="RSVP"
              data-event-rsvp-icon="false"
              data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
              data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
              data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
              data-event-rsvp-cta-border-width="1px"
              data-event-rsvp-cta-border-radius="2px"
              data-follow-section-position="top"
              data-follow-section-alignment="center"
              data-follow-section-header-text="Get updates on new shows, new music, and more"
              data-follow-section-cta-size="medium"
              data-follow-section-cta-text="FOLLOW"
              data-follow-section-cta-icon="true"
              data-follow-section-cta-text-color="rgba(255,255,255,1)"
              data-follow-section-cta-bg-color="rgba(126,74,184,1)"
              data-follow-section-cta-border-color="rgba(126,74,184,1)"
              data-follow-section-cta-border-width="0px"
              data-follow-section-cta-border-radius="2px"
              data-play-my-city-position="bottom"
              data-play-my-city-alignment="center"
              data-play-my-city-header-text="Don’t see a show near you?"
              data-play-my-city-cta-size="medium"
              data-play-my-city-cta-text="REQUEST A SHOW"
              data-play-my-city-cta-icon="false"
              data-play-my-city-cta-text-color="rgba(255,255,255,1)"
              data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
              data-play-my-city-cta-border-color="rgba(74,74,74,1)"
              data-play-my-city-cta-border-width="0px"
              data-play-my-city-cta-border-radius="2px"
              data-language="en"
              data-layout-breakpoint="900"
              data-app-id="d1e17d46e41386266c8e45680f3ad95c"
              data-affil-code=""
              data-bit-logo-position="hidden"
              data-bit-logo-color="rgba(255,255,255,1)"
            ></a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}