export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-xl font-bold tracking-tighter uppercase">
                Octo.Photo
            </div>
            <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
                <a href="#" className="hover:text-gray-400 transition-colors" data-cursor="Click">Work</a>
                <a href="#" className="hover:text-gray-400 transition-colors" data-cursor="Click">About</a>
                <a href="#" className="hover:text-gray-400 transition-colors" data-cursor="Click">Contact</a>
            </div>
        </nav>
    );
}
