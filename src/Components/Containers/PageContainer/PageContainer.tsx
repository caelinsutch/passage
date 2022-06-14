import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Router } from "next/router";

type PageContainerProps = {
  name?: string;
  description?: string;
  imageUrl?: string;
  children: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({
  name,
  description,
  imageUrl,
  children,
}) => {
  const [url, setUrl] = useState<string>("https://getpassage.co");

  useEffect(() => {
    Router.events.on("routeChangeComplete", (newUrl: string) => {
      setUrl(newUrl);
    });
  }, []);

  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>{name}</title>
        <meta name="title" content={name} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={name} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
        <link rel="canonical" href={url} />
      </Head>
      {children}
    </main>
  );
};

export default PageContainer;
