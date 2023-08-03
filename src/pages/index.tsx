import Head from "next/head";
import React, { FormEvent, useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { fetchData, serverURL } from "@/lib/api";
import SearchPanel from "@/components/SearchPanel";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [location, setLocation] = useState<string>("");
  //const [showModal, setShowModal] = useState<boolean>(false);
  //const [city, setCity] = useState<string>("");
  //const [name, setName] = useState<string>("");
  const [elementColoumnWidth, setElementColoumnWidth] = useState<{
    lg: number;
    md: number;
  }>({ lg: 5, md: 5 });
  const searchText = useRef<any>("");

  const SearchInData = (e: FormEvent) => {
    e.preventDefault();
    if (searchText.current.value.trim() === "") {
      alert("הכנס ערך");
    }
    const dataToserver = {
      searchText: searchText.current.value,
      location: location,
    };
    fetchData(serverURL("/search"), "POST", dataToserver)
      .then((dataFromServer) => {
        setSearchData(dataFromServer);
        setIndex(-1);
      })
      .catch((err) => {
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
      <Form onSubmit={SearchInData}>
        <SearchPanel searchText={searchText} {...elementColoumnWidth} />
        {/* <RegionPanel location={location} setLocation={setLocation} />
          <DataCat {...elementColoumnWidth} index={index} setIndex={setIndex} />
          <CitiesSelect
            setCity={setCity}
            col={elementColoumnWidth}
            className="mt-2"
          /> */}
      </Form>
    </Container>
  );
}
