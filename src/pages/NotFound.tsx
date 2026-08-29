import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full pt-24 bg-ivory min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-9xl font-serif text-champagne mb-4 block">404</span>
        <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
          This look isn't available.
        </h1>
        <p className="text-lg text-slate font-sans leading-relaxed mb-10">
          The page you're looking for seems to have stepped out for a little self-care.
        </p>
        <Link to="/">
          <Button size="lg">
            RETURN HOME
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
