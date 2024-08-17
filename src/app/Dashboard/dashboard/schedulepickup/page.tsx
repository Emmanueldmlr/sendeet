"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SchedulePickup from "@/app/components/schedulingForms/SchedulePickup";
import DescribePackage from "@/app/components/schedulingForms/DescribePackage";
import GetDeliveryPrices from "@/app/components/schedulingForms/GetDeliveryPrices";
import ProceedPayment from "@/app/components/schedulingForms/ProceedPayment";
import PickupOrginBusiness from "@/app/components/schedulingForms/PickupOrginBusiness";
import PickupOriginIndividual from "@/app/components/schedulingForms/PickupOriginIndividual";

const Schedulepage = () => {
  const [form, setForm] = useState(0);
  const activeForm = () => {
    if (form === 0) {
      return <SchedulePickup form={form} setForm={setForm} />;
    } else if (form === 1) {
      return <PickupOrginBusiness form={form} setForm={setForm} />;
    } else if (form === 2) {
      return <PickupOriginIndividual form={form} setForm={setForm} />;
    } else if (form === 3) {
      return <DescribePackage form={form} setForm={setForm} />;
    } else if (form === 4) {
      return <GetDeliveryPrices form={form} setForm={setForm} />;
    } else {
      return <ProceedPayment />;
    }
  };
  return <Box>{activeForm()}</Box>;
};

export default Schedulepage;
