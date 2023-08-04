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
      <Head>{/* Place all the necessary head tags here */}</Head>

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
