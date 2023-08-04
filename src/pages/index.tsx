import Head from "next/head";
import React, { FormEvent, useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { fetchData, serverURL } from "@/lib/api";
import SearchPanel, { WidthType } from "@/components/SearchPanel";
import RegionPanel from "@/components/RegionPanel";
import CitiesSelect from "@/components/CitySelect";
import useWindowSize from "@/lib/hooks/useWindowSize";
import { Bussiness } from "@/types/data";

const MetaData = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
    />
    <link rel="canonical" href="https://kishurit.vercel.app/" />
    <meta name="application-url" content="https://kishurit.vercel.app/" />

    <meta
      name="google-site-verification"
      content="INZ1lPlJ4uJihxsPJiYcnm62efEwDySXzWSfo5iZfIQ"
    />
    <meta name="robots" content="index, follow, noodp, noydir" />
    <meta name="googlebot" content="index, follow, noodp, noydir" />
    <meta name="bingbot" content="index, follow, noodp, noydir" />
    <meta name="generator" content="slidify" />
    <meta name="google" content="notranslate" />

    <meta name="title" content="קישורית" />
    <meta name="application-name" content="קישורית" />
    <meta name="image" content="/newjob.jpg" />
    <meta
      name="description"
      content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה"
    />
    <meta
      name="keywords"
      content="קישורית, גיוס, עובדים, תעסוקה, עבודה, דרושים, מקומות תעסוקה, מקומות עבודה"
    />
    <meta name="author" content="https://www.facebook.com/RonenBr60" />

    <link id="favicon" rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    {/* Google Search Engine Tags */}
    <meta itemProp="name" content="קישורית" />
    <meta
      itemProp="description"
      content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה"
    />
    <meta itemProp="image" content="/newjob.jpg" />

    {/* Facebook open graph */}
    <meta property="og:locale" content="he_IL" />
    <meta property="og:title" content="קישורית" />
    <meta property="og:site_name" content="קישורית" />
    <meta
      property="og:description"
      content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה"
    />
    <meta property="og:url" content="https://kishurit.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/newjob.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="fb:pages" content="110682567074630" />

    {/* Twitter open graph */}
    <meta name="twitter:title" content="קישורית" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ronenbr60" />
    <meta
      name="twitter:description"
      content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה"
    />
    <meta
      name="twitter:text:description"
      content="אינדקס אתרים של מקומות תעסוקה, חברות כוח אדם, לוחות דרושים ועמותות בתחום התעסוקה"
    />
    <meta name="twitter:image" content="/newjob.jpg" />
    <meta name="twitter:image:src" content="/newjob.jpg" />

    {/* manifest.json provides metadata used when your web app is installed */}
    <link rel="manifest" href="/manifest.json" />
    <title>קישורית</title>
  </Head>
);

export default function Home() {
  const [data, setData] = useState<Bussiness[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [searchData, setSearchData] = useState<Bussiness[]>([]);
  const [location, setLocation] = useState<string>("");
  //const [showModal, setShowModal] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  //const [name, setName] = useState<string>("");
  const elementColoumnWidth: WidthType =
    useWindowSize()?.width < 1200 ? { lg: 5, md: 5 } : { lg: 4, md: 4 };

  const searchText = useRef<HTMLInputElement>(null);

  const SearchInData = (e: FormEvent) => {
    e.preventDefault();
    if (searchText?.current?.value.trim() === "") {
      alert("הכנס ערך");
      return false;
    }

    const dataToserver = {
      searchText: searchText?.current?.value,
      location,
    };

    fetchData(serverURL("/search"), "POST", dataToserver)
      .then((dataFromServer) => {
        setSearchData(dataFromServer);
        setIndex(-1);
      })
      .catch((err: Error) => {
        setIndex(-1);
        setSearchData([]);
      });
  };

  useEffect(() => {
    if (index >= 0) {
      fetchData(serverURL(`/${index}`)).then((dataFromServer) =>
        setData(dataFromServer)
      );
    }
  }, [index]);

  return (
    <Container className="uicontainer" fluid={isMobile}>
      <MetaData />

      <h2 className="text-center title" style={{ textDecoration: "underline" }}>
        קישורית
      </h2>
      <br style={{ padding: "0", margin: "0" }} />
      <Form onSubmit={SearchInData} as={Col} lg={4} md={4}>
        {/* <SearchPanel searchText={searchText} {...elementColoumnWidth} /> */}
        <SearchPanel searchText={searchText} />
        <RegionPanel location={location} setLocation={setLocation} />
        {/* <DataCat {...elementColoumnWidth} index={index} setIndex={setIndex} /> */}
        <CitiesSelect
          setCity={setCity}
          col={elementColoumnWidth}
          className="mt-2"
        />
      </Form>
    </Container>
  );
}
