import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
  return (
    <section className="bg-secondary py-5">
      <main className="container" style={{ marginTop: '70px', maxWidth: '100%' }}>
        <p className="display-6 text-white text-center">Simple Blog Site</p>
        <section className="row d-flex justify-content-center">
          {[...Array(6)].map((_, index) => (
            <article key={index} className="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center my-3">
              <div className="card shadow-sm">
                <img className="img-fluid rounded-top" src="https://picsum.photos/300/200" alt={`Post ${index + 1}`} />
                <div className="card-body">
                  <div>
                    <h5 className="card-title">Post Title {index + 1}</h5>
                    <p className="card-text text-muted">By Author Name - Jan 2025</p>
                    <p className="card-text">This is a brief excerpt of the post that gives the reader a glimpse of the content. Continue reading for more...</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </section>
  );
}

export default Content;
