import React from 'react';

export default function Banner() {
  return (
    <div
      className="bg-dark fixed-top d-flex flex-column flex-md-row justify-content-center align-items-center text-center"
      style={{ width: '100%', minHeight: '4em' }}
    >
      <span className="text-light me-3 h4">Black Lives Matter.</span>
      <a
        className="h4 banner-link"
        target="_blank"
        rel="noreferrer"
        href="https://support.eji.org/give/153413/#!/donation/checkout"
      >
        Support the Equal Justice Initiative.
      </a>
    </div>
  );
}
