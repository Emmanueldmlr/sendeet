"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SchedulePickup from "@/app/components/SchedulingForms/SchedulePickup";
import PickupOrgin from "@/app/components/SchedulingForms/PickupOrginBusiness";
import DescribePackage from "@/app/components/SchedulingForms/DescribePackage";
import GetDeliveryPrices from "@/app/components/SchedulingForms/GetDeliveryPrices";
import ProceedPayment from "@/app/components/SchedulingForms/ProceedPayment";
import PickupOrginBusiness from "@/app/components/SchedulingForms/PickupOrginBusiness";
import PickupOriginIndividual from "@/app/components/SchedulingForms/PickupOriginIndividual";

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
