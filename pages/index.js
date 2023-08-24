export default function Home(props) {
    return (
      <div className="flex flex-col">
        <h2 className="text-large">Welcome to our homepage.</h2>
        <p className="py-2">
          NASA regularly launches a satellite system known as Landsat. The Landsat system is responsible for acquiring satellite imagery of the Earth. The current satellite, Landsat 9, captures up to 11 spectral bands. Bands 10 and 11 capture thermal data about the Earth–what can essentially be considered surface temperature. The radiometer project seeks to create a cheap, reproducible, and reliable system to validate bands 10 and 11.
        </p>
        <p className="py-2">
        The current approach to this is a system of three PCBs that make up a radiometer: a sensor board to capture thermal data on the ground, an environmental board that captures weather data such as pressure, humidity, and wind, and a communications board that compiles the data from the other two boards, stores the data in an SD card and transmits it to a remote server. 
        </p>
        <p className="py-2">
          The purpose of this site is to provide the data we acquire for anyone who may want it.
        </p>
      </div>
    )
  }