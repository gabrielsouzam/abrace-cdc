export function AppFooter() {
  return (
    <footer className="mt-20 border-t-1 border-zinc-200 bg-zinc-50 px-32 py-8 text-green-700">
      <div className="flex justify-between">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold">Logo</h2>
          <p className="mt-4 max-w-xs">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Content
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Create
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Services
              </a>
            </li>
          </ul>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Community</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Suggestions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsletters
              </a>
            </li>
          </ul>
        </div>

        {/* Partner Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Partner</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Our Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become a Partner
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media Icons */}
      <div className="mt-8 flex items-center justify-between border-t-2 border-zinc-400 pt-4">
        <p className="text-green-700s text-xs">
          &copy; 2024 Casa da Caridade. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
