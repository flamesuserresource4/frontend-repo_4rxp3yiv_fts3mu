export default function PageFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-gray-500">
          A project by Your Name · Built for creators. Follow along on{' '}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-600 hover:underline"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
