import Link from "next/link";
import '../styles/test.css';

export default () => (
  <div>
    <Link href="/">
      <a>Index Page</a>
    </Link>
    <div className="test">HelloTestPage</div>
  </div>
);
