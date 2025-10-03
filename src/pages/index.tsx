import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Logo from '@site/static/img/logo-home.svg';

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

function Card({ title, description, imageSrc }: CardProps) {
  return (
    <div className="flex flex-col w-full lg:w-[calc(100%/2)] p-2">
      <div className="flex flex-col bg-[#141414] rounded-lg p-4 border-solid border border-[#292929] h-full">
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-[#b8b8b8]">{description}</span>
        <img src={imageSrc} className="aspect-video w-full h-full" alt={title} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="CS Demo Manager is an application to manage your replays from the game Counter-Strike.">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-16 md:justify-normal px-4 md:px-16 mx-auto">
          <div className="flex flex-col text-center md:text-left order-2 md:order-1">
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
        <div className="flex flex-wrap mt-4 mb-16 px-4 lg:px-32 mx-auto">
          <Card title="Stats" description="Extract statistics from demos." imageSrc="./img/stats.png" />
          <Card
            title="Grenades finder"
            description="Quickly find smokes, flashbangs..."
            imageSrc="./img/grenades-finder.png"
          />
          <Card title="Heatmap" description="Generate and export heatmaps." imageSrc="./img/heatmap.png" />
          <Card title="VAC tracker" description="Track VAC bans." imageSrc="./img/vac.png" />
          <Card title="Videos generation" description="Generate videos from demos." imageSrc="./img/video.png" />
          <Card
            title="Demos download"
            description="Download your last Valve/third-party demos."
            imageSrc="./img/downloads.png"
          />
          <Card title="Search" description="Quickly find 5K, 4K, ninja defuse..." imageSrc="./img/search.png" />
          <Card
            title="Export"
            description="Export data to XLSX/JSON files or directly from the database using SQL."
            imageSrc="./img/database.png"
          />
          <div className="p-2 w-full">
            <div className="bg-[#141414] rounded-lg p-4 border-solid border border-[#292929]">
              <span>And many more…</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
