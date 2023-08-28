import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

export default function RadiometerCard({rad, onCardClick}) {
  return (
    <Card isPressable onPress={onCardClick} style={{width: '12rem', cursor: 'pointer'}} className="bg-slate-50 border-slate-300 border-2">
      <CardHeader className="pb-0 pt-2 px-3 flex-col items-center">
        <h1 className="text-large font-bold">{rad.name}</h1>
        <p className="text-default-500 text-tiny">ID: {rad.id}</p>
      </CardHeader>
      {/* <Divider/> */}
      <CardBody className="overflow-visible py-2 px-3 items-center">
        <h4 className=" text-small">{rad.location}</h4>
        <h4 className=" text-small">{rad.coordinates}</h4>
      </CardBody>
    </Card>
  );
}
