import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* JobJourney icon links to the homepage */}
                <Link href="/" className="text-xl font-bold">
                    JobJourney
                </Link>
                <div className="space-x-4">
                    
                <Link href="/setup" className="hover:underline">
                    Setup
                </Link>
                <Link href="/dashboard" className="hover:underline">
                    Dashboard
                </Link>
                <Link href="/inquire" className="hover:underline">
                    Inquire
                </Link>
                <Link href="/login" className="hover:underline">
                    Login
                </Link>
                </div>
            </div>
        </nav>
    );
}