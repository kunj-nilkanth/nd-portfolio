export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-24 px-8 border-t border-white/10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
                <div>
                    <h2 className="text-[10vw] leading-none font-bold tracking-tighter uppercase text-white/20">
                        Contact
                    </h2>
                    <div className="mt-8 flex flex-col gap-2">
                        <a href="mailto:hello@octo.photo" className="text-2xl hover:text-orange-500 transition-colors" data-cursor="Mail">hello@octo.photo</a>
                        <p className="text-gray-500 max-w-sm">
                            Available for freelance projects, exhibitions, and coffee.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-500">
                    <a href="#" className="hover:text-white transition-colors" data-cursor="Social">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors" data-cursor="Social">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors" data-cursor="Social">Behance</a>
                </div>
            </div>
        </footer>
    );
}
