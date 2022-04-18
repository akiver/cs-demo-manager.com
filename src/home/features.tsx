import React from 'react';
import { FeatureBlock } from './feature-block';
import { FeatureDescription } from './feature-description';
import { FeatureImage } from './feature-image';

const features = [
  {
    markdownFilePath: 'home/demos',
    image: '/images/features/demos.png',
    imageAlt: 'home.feature.demosAltImage',
  },
  {
    markdownFilePath: 'home/watch',
    image: '/images/features/watch.png',
    imageAlt: 'home.feature.watchAltImage',
  },
  {
    markdownFilePath: 'home/stats',
    image: '/images/features/stats.png',
    imageAlt: 'home.feature.statsAltImage',
  },
  {
    markdownFilePath: 'home/export',
    image: '/images/features/export.png',
    imageAlt: 'home.feature.exportAltImage',
  },
  {
    markdownFilePath: 'home/downloads',
    image: '/images/features/downloads.png',
    imageAlt: 'home.feature.downloadsAltImage',
  },
  {
    markdownFilePath: 'home/suspects',
    image: '/images/features/suspects.png',
    imageAlt: 'home.feature.suspectsAltImage',
  },
  {
    markdownFilePath: 'home/integration',
    image: '/images/features/integration.png',
    imageAlt: 'home.feature.integrationAltImage',
  },
];

export const Features = () => {
  return (
    <>
      {features.map((feature, index) => {
        const description = <FeatureDescription markdownFilePath={feature.markdownFilePath} />;
        const image = <FeatureImage src={feature.image} altTranslationKey={feature.imageAlt} />;
        const isEven = ((index + 1) & 1) === 0;
        return (
          <FeatureBlock key={feature.markdownFilePath}>
            {isEven ? (
              <>
                {description}
                {image}
              </>
            ) : (
              <>
                {image}
                {description}
              </>
            )}
          </FeatureBlock>
        );
      })}
    </>
  );
};
