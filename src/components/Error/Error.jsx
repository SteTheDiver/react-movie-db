import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    //add a funny 404 image
    <section>
      <div>404</div>
      <h1>Page not found</h1>

      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default Error;
