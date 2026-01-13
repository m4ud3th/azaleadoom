export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#7E4AB830] pt-6 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:azaleadoom@gmail.com"
            aria-label="Email"
            className="text-white focus:outline-none focus:ring-2 focus:ring-azalea-purple rounded-full p-2 transition"
          >
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.4-.75a.75.75 0 0 0-.75.75v.3l8.1 5.4 8.1-5.4v-.3a.75.75 0 0 0-.75-.75h-14.7Zm15.45 3.21-7.65 5.1a.75.75 0 0 1-.81 0l-7.65-5.1v9.39c0 .414.336.75.75.75h14.7c.414 0 .75-.336.75-.75V9.21Z" />
              <line x1="3.6" y1="19.5" x2="20.4" y2="19.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/azaleadoom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white focus:outline-none focus:ring-2 focus:ring-azalea-purple rounded-full p-2 transition"
          >
            <span className="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.25 2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@azaleadoom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white focus:outline-none focus:ring-2 focus:ring-azalea-purple rounded-full p-2 transition"
          >
            <span className="sr-only">YouTube</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M23 7.5a4 4 0 0 0-2.82-2.83C18.4 4 12 4 12 4s-6.4 0-8.18.67A4 4 0 0 0 1 7.5C1 9.3 1 12 1 12s0 2.7.82 4.5A4 4 0 0 0 4.64 19.33C6.4 20 12 20 12 20s6.4 0 8.18-.67A4 4 0 0 0 23 16.5c.82-1.8.82-4.5.82-4.5s0-2.7-.82-4.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/0kKaTsmBnzw7orHhPOg2nT?si=ZdeMnJc4QNOAHL3pSiLvuw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="text-white focus:outline-none focus:ring-2 focus:ring-azalea-purple rounded-full p-2 transition"
          >
            <span className="sr-only">Spotify</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M6.2 10 C 9.8 8.8 14.2 9.2 17.8 10.8" />
              <path d="M6.2 12 C 9.8 11.1 14.2 11.6 17.8 13" />
              <path d="M6.2 14 C 9.6 13.5 12.8 14.2 16 15" />
            </svg>
          </a>
        </div>

        <p className="mt-4 text-center text-azalea-purple text-xs">© {new Date().getFullYear()} Azalea</p>
      </div>
    </footer>
  );
}