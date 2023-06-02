const Footer = () => {
    // tailwind footer
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                            Blog
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                            Jobs
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default Footer