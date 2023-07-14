import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-20">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Krrunch</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Next —
          <a
            href="https://instagram.com/Ayush.404_"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank">
            @Ayush
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          Developed Using Next/React Framework
        </span>
      </div>
    </footer>
  );
}
