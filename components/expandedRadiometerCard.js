import React from "react";
import {Card, CardHeader, CardBody, Divider, Button} from "@nextui-org/react";

export default function ExpandedRadiometerCard({rad}) {
  return (
    <Card style={{width: '40rem'}} className="bg-slate-200 border-slate-500 border-2">
      <CardHeader className="justify-between">
        <div>
            <h1 className="text-large uppercase font-bold">{rad.name}</h1>
            <p className="text-default-500 text-tiny">ID: {rad.id}</p>
            <div>
                <p className="text-default-500 text-tiny">{rad.location}</p>
                <p className="text-default-500 text-tiny">{rad.coordinates}</p>
            </div>
        </div>
        <Button onPress={() => console.log("viewing data")} color="primary" radius="lg" size="lg">
            View Data
        </Button>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="font-bold">Most Recent Data Upload</p>
        <p>insert day of the week, date, timezone time, and UTC time</p>
        <h4>Most Recent System Reset</h4>
        <p>insert day of the week, date, timezone time, and UTC time</p>
        <h4>Board Errors</h4>
        <p>insert list of current board errors, or "none"</p>
        <h4>Board Logs</h4>
        <p>insert scrollable logs</p>
      </CardBody>
    </Card>
  );
}
