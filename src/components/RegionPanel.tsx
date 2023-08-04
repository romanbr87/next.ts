import React from "react";
import { Form } from "react-bootstrap";

interface RegionPanelProps {
  location: string;
  setLocation: (location: string) => void;
}

const RegionEng: string[] = ["", "north", "south", "center", "yosh", "website"];
const RegionHeb: string[] = ["הכל", "צפון", "דרום", "מרכז", 'יו"ש', 'אתר'];

export default function RegionPanel({ location, setLocation }: RegionPanelProps) {
  return (
    <React.Fragment>
      <Form.Group className="mb-2" style={{ marginRight: "-1em" }} 
       controlId="location">
        {RegionEng.map((region: string, i: number) => (
          <Form.Check
            key={region}
            inline
            value={region}
            label={RegionHeb[i]}
            name="inlineRadio"
            type="radio"
            checked={location === region}
            onChange={() => setLocation(region)}
          />
        ))}
      </Form.Group>
    </React.Fragment>
  );
}
