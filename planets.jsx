'use strict';

/** @jsx m */

let planets;
let planetFilter = planet => true;

class PlanetApp {
  view() {
    return (
      <section>
        <PlanetFilters />
        <PlanetTable planets={planets} />
      </section>
    );
  }
}

class PlanetTable {
  view() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Composition</th>
          <th>Moons</th>
        </tr>
            {planets.filter(planetFilter).map(planet => <PlanetRow planet={planet} />)}
      </table>
    );
  }
}
