import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FeatureBlock = ({ children }: Props) => {
  return (
    <section className="hero feature-block">
      <div className="hero-body">
        <div className="container">
          <div className="columns">{children}</div>
        </div>
      </div>
    </section>
  );
};
