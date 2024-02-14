import styles from "./Cities.module.css";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import CityItem from "../CityItem/CityItem";
import Message from "../Cities/Message";
import { useCities } from "../Context/CitiesContext";

export default function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="You can Add cities by clicking on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
