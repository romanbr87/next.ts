import { useEffect, useState } from "react";
import axios from "axios";
import { ClearButton, Typeahead } from "react-bootstrap-typeahead";
import { Col } from "react-bootstrap";

interface CitiesSelectProps {
  col?: any;
  className?: string;
  setCity: (city: string) => void;
}

const CitiesSelect: React.FC<CitiesSelectProps> = (props) => {
  const url = "https://data.gov.il/api/3/action/datastore_search";
  
  const [cities, setCities] = useState<{ id: number; label: string }[]>([]);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    console.clear();
    var citisParams = {
      params: {
        resource_id: "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba", // the resource id
        limit: 5000,
      },
    };

    axios.get(url, citisParams).then((response) => {
      const data = response?.data?.result?.records;
      console.log(data);

      if (data) {
        const addedCities = data
          .map((e: any) => String(e["שם_ישוב"]).trim())
          .sort((a: string, b: string) => a.localeCompare(b, "he"))
          .filter((e: string) => e !== "לא רשום")
          .map((e: string, index: number) => ({ id: index + 1, label: e }));
        setCities(addedCities);
      }
    });
  }, []);

  if (cities.length === 0) return <p>Loading...</p>;

  return (
    <Col {...props.col} className={props.className}>
      <Typeahead
        id="cities-select"
        size="sm"
        onChange={(selected: any[]) => {
          console.log(selected);

          const sel = selected.length > 0 ? selected[0].label : null;
          setCity(sel || "");
          if (sel) {
            props.setCity(sel);
            console.log(sel);
          }
        }}
        options={cities}
        selected={city ? [city] : []}
        align="justify"
        placeholder="לבחור יישוב"
      />
    </Col>
  );
};

export default CitiesSelect;
