import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

export default function RadiometerCard() {
  return (
    <Card style={{width: '12rem', cursor: 'pointer'}} className="bg-success border-slate-500 border-2">
      <CardHeader className="pb-0 pt-2 px-3 flex-col items-center">
        <h1 className="text-large uppercase font-bold">Radiometer 1</h1>
        <p className="text-default-500 text-tiny">ID: 0X1E1BFEE6</p>
      </CardHeader>
      {/* <Divider/> */}
      <CardBody className="overflow-visible py-2 px-3 items-center">
        <h4 className="font-bold text-small">West Henrietta, NY</h4>
        <h4 className="font-bold text-small">43.074812, -77.682454</h4>
      </CardBody>
    </Card>
  );
}
