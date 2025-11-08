import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FeatureHighlights from './components/FeatureHighlights';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ProblemSolution />
      <FeatureHighlights />
      <WaitlistForm />
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
    </div>
  );
}

export default App;
