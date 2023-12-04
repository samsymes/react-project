import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");
  class Country {
    constructor(
      name,
      visaRequirements,
      vaccineRequirements,
      otherDocumentation
    ) {
      this.name = name;
      this.visaRequirements = visaRequirements;
      this.vaccineRequirements = vaccineRequirements;
      this.otherDocumentation = otherDocumentation;
    }

    getRequirementsForDestination(destination) {
      console.log(
        `Travel Requirements from ${this.name} to ${destination.name}:`
      );
      console.log(`Visa Requirements: ${destination.visaRequirements}`);
      console.log(`Vaccine Requirements: ${destination.vaccineRequirements}`);
      console.log(`Other Documentation: ${destination.otherDocumentation}`);
    }
  }

  const ca = new Country(
    "Canada",
    "Varies by destination",
    "COVID-19 vaccine recommended",
    "Travel insurance"
  );
  const us = new Country(
    "USA",
    "Varies by nationality",
    "COVID-19 vaccine required",
    "ESTA for some"
  );
  const de = new Country(
    "Germany",
    "No visa for short stays",
    "COVID-19 vaccine recommended",
    "Proof of funds"
  );
  const fr = new Country(
    "France",
    "Schengen visa for some",
    "COVID-19 vaccine recommended",
    "Proof of accommodation"
  );

  ca.getRequirementsForDestination(us);
  ca.getRequirementsForDestination(de);
  ca.getRequirementsForDestination(fr);

  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
      </div>
    </>
  );
}

export default Results;
