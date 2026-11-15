import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Logo from '@site/static/img/logo-home.svg';

type Showcase = {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  docLink: string;
};

const showcases: Showcase[] = [
  {
    title: 'In-game playback UI',
    description: 'Control CS2 demo playback with a UI drawn directly over the game.',
    bullets: [
      'Match and round timelines with kills, bomb plants and defuses, click anywhere to seek',
      'Jump between the kills, highlights and lowlights of any player',
      'See who is talking and mute players individually or per team',
      "Overlay of the spectated player's pressed keys and speed",
      'Create a video sequence of what you are watching in 2 clicks',
    ],
    imageSrc: '/img/blog/v3-21/playback-ui.jpg',
    imageWidth: 1920,
    imageHeight: 1080,
    docLink: '/docs/guides/cs2-demo-playback-ui',
  },
  {
    title: '2D viewer',
    description: 'Watch demos from above without launching the game.',
    bullets: [
      'Kills feed, death positions, shots and C4 blast zones on the radar',
      'Draw on the radar to explain a strategy',
      "Generate an audio file from the players' voice chat and listen to it in sync",
    ],
    imageSrc: '/img/documentation/guides/2d-viewer/2d-viewer.webp',
    imageWidth: 1920,
    imageHeight: 1032,
    docLink: '/docs/guides/2d-viewer',
  },
  {
    title: 'Stats',
    description: 'Analyze demos to extract statistics from your matches.',
    bullets: [
      'Valve Matchmaking, FACEIT, Perfect World, 5EPlay and more',
      'HLTV rating, KAST, ADR, multi-kills, utility, clutches…',
      'Tag players and filter matches across all your demos',
    ],
    imageSrc: '/img/stats.webp',
    imageWidth: 1626,
    imageHeight: 879,
    docLink: '/docs/guides/demos-analysis',
  },
  {
    title: 'Videos generation',
    description: 'Turn demos into videos without recording them manually.',
    bullets: [
      'Add sequences and merge them into one video or generate one video per sequence',
      'Focus on players and switch between fixed cameras during a sequence',
      'Queue multiple videos and let them generate',
    ],
    imageSrc: '/img/video.webp',
    imageWidth: 1920,
    imageHeight: 1032,
    docLink: '/docs/guides/video',
  },
];

type Feature = {
  title: string;
  description: string;
  imageSrc: string;
};

const features: Feature[] = [
  {
    title: 'Grenades finder',
    description: 'Quickly find smokes, flashbangs…',
    imageSrc: '/img/grenades-finder.webp',
  },
  {
    title: 'Heatmap',
    description: 'Generate and export heatmaps.',
    imageSrc: '/img/heatmap.webp',
  },
  {
    title: 'Search',
    description: 'Quickly find 5K, 4K, ninja defuse…',
    imageSrc: '/img/search.webp',
  },
  {
    title: 'Demos download',
    description: 'Download your last Valve/third-party demos.',
    imageSrc: '/img/downloads.webp',
  },
  {
    title: 'VAC tracker',
    description: 'Track VAC bans.',
    imageSrc: '/img/vac.webp',
  },
  {
    title: 'Export',
    description: 'Export data to XLSX/JSON files or query the database using SQL.',
    imageSrc: '/img/export.webp',
  },
];

function ShowcaseRow({ showcase, reversed }: { showcase: Showcase; reversed: boolean }) {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className={`w-full lg:w-3/5 ${reversed ? 'lg:order-2' : ''}`}>
        <img
          src={showcase.imageSrc}
          width={showcase.imageWidth}
          height={showcase.imageHeight}
          loading="lazy"
          alt={showcase.title}
          className="w-full h-auto rounded-lg border border-solid border-[#292929]"
        />
      </div>
      <div className="flex flex-col w-full lg:w-2/5">
        <h2 className="text-white text-2xl mb-2">{showcase.title}</h2>
        <p className="text-[#b8b8b8] mb-3">{showcase.description}</p>
        <ul className="text-[#b8b8b8] mb-4 pl-5">
          {showcase.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <Link to={showcase.docLink}>Learn more →</Link>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col h-full bg-[#141414] rounded-lg p-4 border border-solid border-[#292929]">
      <img
        src={feature.imageSrc}
        loading="lazy"
        alt={feature.title}
        className="aspect-video w-full object-cover object-top rounded mb-3"
      />
      <span className="text-lg font-semibold text-white">{feature.title}</span>
      <span className="text-[#b8b8b8]">{feature.description}</span>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="CS Demo Manager is a companion application for your Counter-Strike demos: stats, 2D viewer, in-game playback UI, videos generation and more.">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-16 md:justify-normal px-4 md:px-16 mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <Link
              to="/blog/v3-21"
              className="mb-4 rounded-full border border-solid border-[#292929] bg-[#141414] px-3 py-1 text-sm text-[#b8b8b8] hover:no-underline hover:border-[#4d4d4d] hover:text-white"
            >
              New in 3.21: in-game playback UI →
            </Link>
            <h1 className="text-white text-4xl">CS Demo Manager</h1>
            <p className="text-lg">Companion application for your Counter-Strike demos.</p>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-2">
              <Link className="button button--primary button--lg" to="/download">
                Download
              </Link>
              <Link className="button button--secondary button--lg" to="/docs">
                Documentation
              </Link>
            </div>
          </div>
          <div className="flex items-center order-1 md:order-2 relative my-16">
            <Logo className="size-44 text-white z-10" />
            <div className="absolute left-1/2 top-1/2 rounded-full size-44 -translate-x-1/2 -translate-y-1/2 bg-gradient-home blur-[82px]" />
          </div>
        </div>

        <div className="flex flex-col gap-20 mt-8 px-4 lg:px-32 mx-auto max-w-[1400px] w-full box-border">
          {showcases.map((showcase, index) => (
            <ShowcaseRow key={showcase.title} showcase={showcase} reversed={index % 2 === 1} />
          ))}
        </div>

        <div className="flex flex-col mt-24 mb-16 px-4 lg:px-32 mx-auto max-w-[1400px] w-full box-border">
          <h2 className="text-white text-2xl text-center mb-8">And more</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-24 px-4">
          <h2 className="text-white text-2xl mb-2">Get started</h2>
          <p className="text-[#b8b8b8] mb-6">Free and open source, available on Windows, macOS and Linux.</p>
          <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-2">
            <Link className="button button--primary button--lg" to="/download">
              Download
            </Link>
            <Link className="button button--secondary button--lg" to="/docs">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
