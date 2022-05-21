import { CountriesToShow } from "./CountriesToShow";
import { OnlyOneCountry } from "./OnlyOneCountry";

export const ListOfCountries = ({ countries, filteredCountries, newFilter }) => {




    const conditionalList = (filteredCountries) => {
        
        if (filteredCountries.length > 10) {
            return "Too many countries to show"
        } else if (filteredCountries.length === 1) {
            return (
                <OnlyOneCountry filteredCountries={filteredCountries} />
            )
        } else {
            return (
            (filteredCountries.map(countrie => {
                return(
                  <CountriesToShow key={Math.random()} countrie={countrie} />
            )})))
        }
      }

  return (
    <ul>
        {conditionalList(filteredCountries)}
    </ul>
  );
}