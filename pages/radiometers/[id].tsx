import React from "react";
import Link from "next/link"
import { useRouter } from "next/router"
import {Tabs, Tab, Card, CardHeader, CardBody, Button, Divider, Input,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Select, SelectItem, RadioGroup, Radio} from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { months } from '../../components/datetimeDetails'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export default function Data(props) {

  // let tabs = [ "1D", "7D", "1M", "6M", "1Y", "5Y", "MAX"];

  let tabs = [
    {
      id: "1D",
      label: "1D",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "7D",
      label: "7D",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "1M",
      label: "1M",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "6M",
      label: "6M",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "1Y",
      label: "1Y",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "5Y",
      label: "5Y",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "MAX",
      label: "MAX",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  const days = arrayRange(1, 31, 1);
  const years = arrayRange(2020, 2023, 1);

  const router = useRouter()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // function to know what radio option is selected
  const [selected, setSelected] = React.useState("single");
  // functions for holding the start and end date selections
  const [startDate, setStartDate] = React.useState({ month: '', day: '', year: '' });
  const [endDate, setEndDate] = React.useState({ month: '', day: '', year: '' });
  return (
    <>
      <p>
        <Link href="/radiometers">
          <small>&laquo; back to all radiometers</small>
        </Link>
      </p>

      <Card  className="bg-slate-50 border-slate-300 border-2">
      <CardHeader className="justify-between bg-slate-200">
        <div>
            <h1 className="text-large font-bold">{props.radiometer.name}</h1>
            <p className="text-default-500 text-tiny">ID: {props.radiometer.id}</p>
            <div>
                <p className="text-default-500 text-tiny">{props.radiometer.location}</p>
                <p className="text-default-500 text-tiny">{props.radiometer.coordinates}</p>
            </div>
        </div>
        <Button onPress={onOpen} color="primary">Export</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center"  radius="lg" size="lg" className="px-9">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Export Data</ModalHeader>
                <ModalBody>
                  <p>Start date</p>
                  <div className="flex flex-rows">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Month" 
                        placeholder="Select a month" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedMonth = event.target.value;
                          setStartDate({ ...startDate, month: selectedMonth });
                        }}
                      >
                        {months.map((month) => (
                          <SelectItem key={month.short} value={month.short}>
                            {month.name}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Day" 
                        placeholder="Select a day" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedDay = event.target.value;
                          setStartDate({ ...startDate, day: selectedDay });
                        }}
                      >
                        {days.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day.toString()}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Year" 
                        placeholder="Select a year" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedYear = event.target.value;
                          setStartDate({ ...startDate, year: selectedYear });
                        }}
                      >
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year.toString()}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <p>End date</p>
                  <div className="flex flex-rows">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Month" 
                        placeholder="Select a month" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedMonth = event.target.value;
                          setEndDate({ ...endDate, month: selectedMonth });
                        }}
                      >
                        {months.map((month) => (
                          <SelectItem key={month.short} value={month.short}>
                            {month.name}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Day" 
                        placeholder="Select a day" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedDay = event.target.value;
                          setEndDate({ ...endDate, day: selectedDay });
                        }}
                      >
                        {days.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day.toString()}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select 
                        label="Year" 
                        placeholder="Select a year" 
                        className="max-w-xs"
                        onChange={(event) => {
                          const selectedYear = event.target.value;
                          setEndDate({ ...endDate, year: selectedYear });
                        }}
                      >
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year.toString()}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="flex py-2 px-1 justify-between">
                    <RadioGroup 
                      label="Export format" 
                      orientation="vertical" 
                      defaultValue="single"
                      value={selected}
                      onValueChange={setSelected}
                    >
                      <Radio value="single">Single combined CSV file</Radio>
                      <Radio value="multiple">Individual day CSV files (ZIP)</Radio>
                    </RadioGroup>
                    <p className="text-default-500 text-small">Selected: {selected}</p> 
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={() => handleExportData(startDate, endDate, onClose)}>
                    Export
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardHeader>
      <Divider/>
      <CardBody className="flex">
        <h1 className="text-large font-bold">Thermopile Sensor Data</h1>
        <div>
          <Tabs aria-label="Dynamic tabs" items={tabs} color="default" className="py-0.5 border-slate-300 border-1 rounded-xl">
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>
                    {item.content}
                  </CardBody>
                </Card>  
              </Tab>
            )}
          </Tabs>
        </div>
      </CardBody>
      <Divider/>
      <CardBody>
        <h1 className="text-large font-bold">Evironmental Sensor Data</h1>
        <p>{props.serialNum}</p>
        {/* <Line options={options} data={props.data} />; */}
      </CardBody>
    </Card>

    </>
  )
}

// get the paths to each radiometer's data page
export async function getStaticPaths() {
  const response = await fetch("http://52.204.169.92:3000/getRadiometerInfo")
  const data = await response.json()

  const thePaths = data.radiometers.map(pet => {
    return { params: { id: pet.id } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

// get the data and info for the radiometer
export async function getStaticProps(context) {
  // get the radiometer info
  const response1 = await fetch("http://52.204.169.92:3000/getRadiometerInfo")
  const info = await response1.json()
  const theRadiometer = info.radiometers.filter(radiometer => radiometer.id === context.params.id)[0]
  // get the radiometer data
  const response2 = await fetch("http://52.204.169.92:3000/getRadiometerData/" + theRadiometer.id)
  const data = await response2.json()

  return {
    props: {
      radiometer: theRadiometer,
      name: theRadiometer.name,
      serialNum: data.commsSerial
    }
  }
}

const handleExportData = async (startDate, endDate, onClose) => {
  console.log("Start")
  console.log(startDate.month);
  console.log(startDate.day);
  console.log(startDate.year);
  console.log("End")
  console.log(endDate.month);
  console.log(endDate.day);
  console.log(endDate.year);


  // request data with the selected start and end dates
  // const response = await fetch('/your-api-endpoint?startDate=${startDate.month}&endDate=${endDate.month}');
  // const data = await response.json();

  // process the retrieved data or trigger the export process
  // 

  // reset the start and end dates 
  startDate.month = ''
  startDate.day = ''
  startDate.year = ''
  endDate.month = ''
  endDate.day = ''
  endDate.year = ''
  
  // close the modal after exporting
  onClose();
};