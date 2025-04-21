import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
import { ScrollView } from "react-native";
import SwipeCounter from "./swipeCounter"
import { PageSwitcher } from "./pageSwitcher";

type StatePair = [number, React.Dispatch<React.SetStateAction<number>>];

type TeleopState = {
  l4: StatePair;
  faill4: StatePair;
  l3: StatePair;
  faill3: StatePair;
  l2: StatePair;
  faill2: StatePair;
  l1: StatePair;
  faill1: StatePair;
  net: StatePair;
  failNet: StatePair;
  proccessor: StatePair;
  reef: StatePair;
};

export default function App() {
  const [count, setCount] = useState(0);

  const teleopState: TeleopState = {
    l4: useState(0),
    faill4: useState(0),
    l3: useState(0),
    faill3: useState(0),
    l2: useState(0),
    faill2: useState(0),
    l1: useState(0),
    faill1: useState(0),
    net: useState(0),
    failNet: useState(0),
    proccessor: useState(0),
    reef: useState(0),
  };


  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      position: "relative"
    }}>
      {page(count, teleopState)}
      <Text>{count}</Text>
      <PageSwitcher count={count} setCount={setCount} />
    </View>
  )
}

function page(pageNum: number, teleopState: any) {
  switch (pageNum) {
    case 1:
      return <Teleop teleopState={teleopState} />
    case 2:
      return <Auto />
    default:
      return <Text>ijewijw</Text>
  }
}

function Auto() {
  return <Text>Auto</Text>
}

function Teleop({ teleopState }: {teleopState: TeleopState}) {
  const {
    l4, faill4,
    l3, faill3,
    l2, faill2,
    l1, faill1,
    net, failNet,
    proccessor, reef,
  } = teleopState;
  const [L4, setL4] = l4;
  const [failL4, setFailL4] = faill4;

  const [L3, setL3] = l3;
  const [failL3, setFailL3] = faill3;

  const [L2, setL2] = l2;
  const [failL2, setFailL2] = faill2;

  const [L1, setL1] = l1;
  const [failL1, setFailL1] = faill1;

  const [Net, setNet] = net;
  const [FailNet, setFailNet] = failNet;

  const [Reef, setReef] = reef;
  const [Proccessor, setProccessor] = proccessor;
  return (
    <View style={{
      flex: 1,
      alignContent: "center"
    }}>
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>Teleop</Text>
      <ScrollView
        style={{ flex: 1 }}

        contentContainerStyle={{
          flexDirection: "column",
          padding: 20,
          paddingBlockEnd: 100,
          gap: 80,
          alignContent: "center",
          alignItems: "center"
        }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          gap: 165,
          left: 10,
          top: 60,
        }}>
          <Text style={{ fontSize: 30 }}>Fail</Text>
          <Text style={{ fontSize: 30 }}>Success</Text>

        </View>
        <SuccessFailLevelCounter
          levelLabel="L4" successCount={L4} setSuccessCount={setL4} failCount={failL4} setFailCount={setFailL4} />
        <SuccessFailLevelCounter
          levelLabel="L3" successCount={L3} setSuccessCount={setL3} failCount={failL3} setFailCount={setFailL3} />
        <SuccessFailLevelCounter
          levelLabel="L2" successCount={L2} setSuccessCount={setL2} failCount={failL2} setFailCount={setFailL2} />
        <SuccessFailLevelCounter
          levelLabel="L1" successCount={L1} setSuccessCount={setL1} failCount={failL1} setFailCount={setFailL1} />
        <SuccessFailLevelCounter
          levelLabel="Net" successCount={Net} setSuccessCount={setNet} failCount={FailNet} setFailCount={setFailNet} />

        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
          <SwipeCounter label="Outta reef" count={Reef} setCount={setReef} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
          <SwipeCounter label="processor" count={Proccessor} setCount={setProccessor} />
        </View>
      </ScrollView>
    </View>
  )
}