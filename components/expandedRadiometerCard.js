import React from "react";
import {Card, CardHeader, CardBody, Divider, Button} from "@nextui-org/react";
import { useRouter } from "next/router"

export default function ExpandedRadiometerCard({rad}) {

  const router = useRouter()

  return (
    <Card style={{width: '40rem'}} radius="lg" className="bg-slate-50 border-slate-300 border-2">
      <CardHeader radius="none" className="justify-between bg-slate-200">
        <div>
            <h1 className="text-large font-bold">{rad.name}</h1>
            <p className="text-default-500 text-tiny">ID: {rad.id}</p>
            <div>
                <p className="text-default-500 text-tiny">{rad.location}</p>
                <p className="text-default-500 text-tiny">{rad.coordinates}</p>
            </div>
        </div>
        <Button onPress={() => router.push("/radiometers/" + rad.id)} color="primary" radius="lg" size="lg">
            View Data
        </Button>
      </CardHeader>
      <Divider/>
      <CardBody>
        <h4 className="font-bold">Most Recent Data Upload</h4>
        <p>{rad.lastupload} UTC</p>
        <h4 className="font-bold">Most Recent System Reset</h4>
        <p>{rad.lastreset} UTC</p>
        <h4 className="font-bold">Board Errors</h4>
        {rad.errors.map((error, index) => (
            <p key={index} className="flex flex-col">{error}</p>
        ))}
        <h4 className="font-bold">Board Logs</h4>
        <p>insert scrollable logs</p>
      </CardBody>
    </Card>
  );
}
