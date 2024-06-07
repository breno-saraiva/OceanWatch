const Footer = () => {
    return (
      <footer className="mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8 bg-[#3586FF]">
        <div className="border-t border-slate-900/5 py-3 flex flex-col items-center">
          <h1 className="text-[1.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#05cbf3fd] to-[#fefefffb]">
            <b>OceanWatch.</b>
          </h1>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Ícone do Twitter SVG */}
                <path
                  d="M23 4.913a9.57 9.57 0 01-2.757.758 4.814 4.814 0 002.106-2.662 9.671 9.671 0 01-3.05 1.164 4.814 4.814 0 00-8.211 4.398A13.693 13.693 0 011.633 3.94a4.81 4.81 0 001.49 6.417 4.767 4.767 0 01-2.18-.602v.06a4.812 4.812 0 003.857 4.715 4.809 4.809 0 01-2.173.082 4.813 4.813 0 004.493 3.336 9.671 9.671 0 01-5.993 2.068c-.39 0-.777-.022-1.16-.065a13.635 13.635 0 007.35 2.154c8.85 0 13.693-7.335 13.693-13.693 0-.209-.005-.418-.015-.627a9.78 9.78 0 002.394-2.476l.001-.001z"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Ícone do Facebook SVG */}
                <path
                  fillRule="evenodd"
                  d="M18.44 2H5.56C4.33 2 3.33 3 3.33 4.22v13.56c0 1.23 1 2.22 2.22 2.22h5.08v-6.98H8.19V10.5h2.44V8.33c0-2.42 1.48-3.74 3.63-3.74 1.02 0 1.9.08 2.16.12v2.52h-1.48c-1.16 0-1.38.55-1.38 1.36v1.78h2.77l-.36 2.78h-2.41V22h4.7c1.23 0 2.22-1 2.22-2.22V4.22C20.66 3 19.67 2 18.44 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-3 text-center text-sm leading-6 text-white">
            © 2024 <b>OceanWatch.</b> All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export { Footer };
  