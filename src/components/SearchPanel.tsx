import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import React, { RefObject } from "react"; // Import React and RefObject

export interface WidthType {
  lg?: number;
  md?: number;
}

interface SearchPanelProps extends WidthType {
  searchText: RefObject<HTMLInputElement>; // Use RefObject to correctly type the ref
}

export default function SearchPanel({ searchText }: SearchPanelProps) {
  return (
    <Row className="mb-2">
      <Col lg={12} md={12}>
        <InputGroup size="sm" style={{ direction: "ltr" }}>
          <Button type="submit" variant="outline-secondary">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </Button>
          <FormControl
            type="text"
            size="sm"
            placeholder="חיפוש"
            ref={searchText}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}
