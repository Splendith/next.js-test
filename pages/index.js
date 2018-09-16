import Link from "next/link";
import '../styles/index.css';

export default () => (
  <div>
    <Link href="/test">
      <a>Test Page</a>
    </Link>
    <div className="index">HelloIndexPage</div>
  </div>
);
