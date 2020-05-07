import React from 'react';
import { FeatureBlock } from './feature-block';
import { FeatureDescription } from './feature-description';
import { FeatureImage } from './feature-image';
import demosImage from '../images/features/demos.png';
import watchImage from '../images/features/watch.png';
import statsImage from '../images/features/stats.png';
import exportImage from '../images/features/export.png';
import downloadsImage from '../images/features/downloads.png';
import suspectsImage from '../images/features/suspects.png';
import integrationImage from '../images/features/integration.png';

const features = [
  {
    markdownFilePath: 'home/demos',
    image: demosImage,
    imageAlt: 'home.feature.demosAltImage',
  },
  {
    markdownFilePath: 'home/watch',
    image: watchImage,
    imageAlt: 'home.feature.watchAltImage',
  },
  {
    markdownFilePath: 'home/stats',
    image: statsImage,
    imageAlt: 'home.feature.statsAltImage',
  },
  {
    markdownFilePath: 'home/export',
    image: exportImage,
    imageAlt: 'home.feature.exportAltImage',
  },
  {
    markdownFilePath: 'home/downloads',
    image: downloadsImage,
    imageAlt: 'home.feature.downloadsAltImage',
  },
  {
    markdownFilePath: 'home/suspects',
    image: suspectsImage,
    imageAlt: 'home.feature.suspectsAltImage',
  },
  {
    markdownFilePath: 'home/integration',
    image: integrationImage,
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
