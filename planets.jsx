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
