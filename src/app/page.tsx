import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

// Social media links
const socialLinks = {
    instagram: "https://instagram.com/nosjemanbigyouth",
    tiktok: "https://tiktok.com/@nosjemanbigyouth",
    facebook: "https://facebook.com/nosjeman.bigyouth",
    spotify: "https://open.spotify.com/artist/5pWOl8Mk1utpqJJ3ZL5O9H",
    youtube: "https://www.youtube.com/@nosjemanbigyouth",
};

function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    );
}

function SpotifyIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
    );
}

function PlaceholderImage({
    text,
    className,
    aspectRatio = "aspect-square",
}: {
    text: string;
    className?: string;
    aspectRatio?: string;
}) {
    return (
        <div className={`placeholder-image ${aspectRatio} ${className || ""}`}>
            <span className="text-xs md:text-sm text-center px-2">{text}</span>
        </div>
    );
}

export default function Home() {
    // RELEASES DATA
    const releases = [
        {
            image: "/img/album-cover.jpg",
            title: "Concrete Jungle",
            year: "2026",
            link: "https://open.spotify.com/album/6U3V60m3Bs7bo2vHsHQWjB",
        },
        {
            image: "/img/02.jpg",
            title: "Jah Army",
            year: "2025",
            link: "https://open.spotify.com/album/21u5DdOGTJSP5l9wsS0AZN",
        },
        {
            image: "/img/03.jpg",
            title: "Check Clean",
            year: "2025",
            link: "https://open.spotify.com/album/4ZCNBWFJeXvwHnB5RFEBZh",
        },
        {
            image: "/img/04.jpg",
            title: "Buss A Blank",
            year: "2023",
            link: "https://open.spotify.com/album/1Q4GHMpVDctmsYlDgHdua0",
        },
    ];

    return (
        <main className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a
                            href={socialLinks.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs md:text-sm font-semibold tracking-wider hover:text-red-500 transition-colors uppercase"
                        >
                            Stream Now
                        </a>
                    </div>

                    <a href="/" className="absolute left-1/2 -translate-x-1/2">
                        <Image
                            src="/img/logo.png"
                            alt="Nosjeman Bigyouth"
                            width={150}
                            height={60}
                            className="h-10 md:h-14 w-auto"
                            priority
                        />
                    </a>

                    <div className="flex items-center gap-3 md:gap-4">
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <TikTokIcon className="w-5 h-5" />
                        </a>
                        <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <SpotifyIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center grain-overlay">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/hero.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-black/40 to-black" />
                </div>

                <div className="relative z-10 text-center">
                    <Image
                        src="/img/logo.png"
                        alt="Nosjeman Bigyouth"
                        width={400}
                        height={150}
                        className="w-64 md:w-96 mx-auto mb-8"
                        priority
                    />
                    <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-8">
                        Reggae Artist
                    </p>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="relative py-16 md:py-24 grain-overlay">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d0d] to-[#0d0d0d]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative aspect-video bg-black rounded-sm overflow-hidden border border-white/10">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/KC2D-BHPYnU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Release Section */}
            <section className="relative py-16 md:py-24 grain-overlay overflow-hidden">
                <div className="absolute inset-0">
                    <div className="w-full h-full placeholder-image opacity-30">
                        <span className="text-sm">Concrete Jungle</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <p className="text-red-500 tracking-[0.4em] text-xs md:text-sm mb-2">LATEST RELEASE</p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-wider">NEW MUSIC</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <a
                            href="https://open.spotify.com/album/6U3V60m3Bs7bo2vHsHQWjB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-64 md:w-80 flex-shrink-0 block group"
                        >
                            <div className="relative aspect-square">
                                <img
                                    src="/img/album-cover.jpg"
                                    alt="Concrete Jungle"
                                    className="w-full h-full object-cover rounded-sm shadow-2xl shadow-red-500/20 transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 border border-white/10 rounded-sm group-hover:border-red-500/50 transition-all" />
                            </div>
                        </a>

                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            <a
                                href="https://open.spotify.com/album/6U3V60m3Bs7bo2vHsHQWjB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/50 px-6 py-4 transition-all group"
                            >
                                <SpotifyIcon className="w-8 h-8 text-green-500 group-hover:text-green-400" />
                                <span className="text-sm tracking-wider uppercase">Listen to Concrete Jungle</span>
                            </a>

                            <a
                                href={socialLinks.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/50 px-6 py-4 transition-all group"
                            >
                                <Youtube className="w-8 h-8 text-red-500 group-hover:text-red-400" />
                                <span className="text-sm tracking-wider uppercase">Watch on YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discography Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0d0d0d] via-red-950/20 to-[#0d0d0d] grain-overlay">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-red-500 tracking-[0.4em] text-xs md:text-sm mb-2">DISCOGRAPHY</p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-wider">RELEASES</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {releases.map((release, index) => (
                            <a
                                key={index}
                                href={release.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block cursor-pointer"
                            >
                                <div className="relative aspect-square mb-3 overflow-hidden">
                                    <img
                                        src={release.image}
                                        alt={release.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors" />
                                    <div className="absolute inset-0 border border-white/10 group-hover:border-red-500/50 transition-colors" />
                                </div>

                                <h3 className="text-sm md:text-base font-semibold tracking-wider">
                                    {release.title}
                                </h3>
                                <p className="text-xs text-white/50 mt-1">{release.year}</p>
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href={socialLinks.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-white/30 hover:border-red-500 hover:bg-red-600/10 px-8 py-3 text-sm tracking-wider uppercase transition-all"
                        >
                            View All Releases
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-16 md:py-24 grain-overlay">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-500 tracking-[0.4em] text-xs md:text-sm mb-2">BOOKINGS</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-8">GET IN TOUCH</h2>
                    <a
                        href="mailto:nosjeman@gmail.com"
                        className="inline-block text-xl md:text-2xl text-white hover:text-red-500 transition-colors tracking-wider"
                    >
                        NOSJEMAN@GMAIL.COM
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-12 border-t border-white/10 grain-overlay">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <Image src="/img/logo.png" alt="Nosjeman Bigyouth" width={120} height={50} className="h-8 w-auto" />

                        <div className="flex items-center gap-6">
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <TikTokIcon className="w-5 h-5" />
                            </a>
                            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <SpotifyIcon className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-xs text-white/50 tracking-wider">
                            &copy; {new Date().getFullYear()}. NOSJEMAN BIGYOUTH. IZHIA ARTS. JUICED UNICORN. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
