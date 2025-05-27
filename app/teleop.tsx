import React, { useState } from 'react';
import { Pressable, Text, View, ScrollView, ImageBackground, StyleSheet, Image, ImageBackgroundBase } from "react-native";
import { SuccessFailLevelCounter } from "./successFailLevelCounter";
import { CoralAlgaeState } from "./coralAlgaeState";
import SwipeCounter from "./swipeCounter";
import { SuccessFailText } from './successFailText';
import { CoralCounters } from './coralCounters';
import * as Haptics from 'expo-haptics';

interface TeleopProps {
    teleopState: CoralAlgaeState;
    isAuto: boolean;
    crossedLine?: boolean;
    setCrossedLine?: (v: boolean) => void;
}

interface AutoButtonsProps {
    flag: boolean;
    setFlag: (v: boolean) => void;
}

export function Teleop({ teleopState, isAuto, setCrossedLine, crossedLine }: TeleopProps) {
    const {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
        net, failNet,
        proccessor, reef,
    } = teleopState;
    const corals = {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
    }

    const [Net, setNet] = net;
    const [FailNet, setFailNet] = failNet;
    const [Reef, setReef] = reef;
    const [Proccessor, setProccessor] = proccessor;

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczNKSojT0ZPir8heLKsUUGWpCOnZGXWWF9JIIW3ME7uvYt_NobJ-VD8Xz0DCL38nqzaM82cFNk4RrBA4x3w2l_4T1_Y5tqpI6ZVw6U6QuZiAb55zOP-_VzTyQQvneeJ_DNTeWYTW0ptcnlRG8wcANiHlvHsstx1G41uiceAmreAjOV0vOTmRbBATVVhEMpfPfYGdgWKsfY54wlf2RNcfNDPWnAOo_TqAGm8j8L3sA_CkZ4T6AYQ16qSaoV6_ITSiwds0wcBW97c_J8-8bkZ4jRw2OaC1VvhymL2WVayuQXasATtPfpdz3tZUT7BsfK2MMzwjKwrQhQovr1idbqaPCwbxCgtYxZ1bX79xOqVKoe8bAmHbQtawIfCVZmkaBJ7BOTIxfC-8GnXoWWayDDabg05Gov2XKt4HqGFUPSkl02ELQGxc2BFDZCMbMs74NepO2PwQoqL083wWUnShABXZdvY4F6d_iMUK4rA9JaI46jx4aM2UfvV49OROTZHz-6XrDSFi4_tW05ScSVT5faB_YadtTM9_qZJDXsIeePEX5Sm8xcrhn3S_lyfyY5aIkv-ChRibbLtTWBPocz9Ge8Gg1BrsTIzfD1rvJdPC9W6inl7hSUI2zZK_2nQJxM6r8c7AAHePLqHN4Tijl1FFTzq9n-o6C36wpvEf4dpCSp-vXCnetQbYAd4dVEg_HBbSdBaROESNQJYBv118dt8UCcjyhTq7uuhJ-gIuTdw3HIRJBTsv56MhTY6981o1FZghcOLYuWraQiUj9GWvJJs2M4LMicl1UeUzNVAou1vg8yC8dZex7BdyM6_UGbQ8udRVdNI3CIkfQ0QZ2W2TZIs3tcZ7HDYevs_LlpV1TJBCoK8c4TmiLYNWF_U53A90dlMCaw0FsGIMLTh5b9J55M0tBqPuGfsYivPTKg=w1678-h1678-s-no?authuser=0' }}
                resizeMode="cover"
                blurRadius={12}

                style={{
                    ...StyleSheet.absoluteFillObject,
                    zIndex: -1,
                    opacity: 0.7,

                }}
            />
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >

                {/* Foreground Content */}
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 20,
                    gap: 0,
                    paddingTop: 60,
                    paddingBottom: 100,
                }}>
                    {/* Optional Auto Mode Toggle */}
                    {isAuto && crossedLine !== undefined && setCrossedLine && (
                        <AutoButtons flag={crossedLine} setFlag={setCrossedLine} />
                    )}

                    <CoralCounters coral={corals} />

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 80,
                            paddingBottom: 100,
                        }}>
                        <View style={{
                            paddingTop: 50,
                            alignItems: "center",
                            width: "100%",
                        }}>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 20 }}>
                                <Text style={{ fontSize: 50, }}>Algae</Text>
                            </View>
                            {/* Labels */}
                            <SuccessFailText />

                            <SuccessFailLevelCounter levelLabel="Net" successCount={Net} setSuccessCount={setNet} failCount={FailNet} setFailCount={setFailNet}
                                centerImage={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczN_UMSQL7VWbwtA4VqlnslHH8FyHw0_9hvjUw-GQizmKC2zCsRMt9wHSQ3jAejYmj1f5KOgP9O-q0XzqtU7q53-2xtxhAabk5KVtHg0p-O2xJ5DH0mQBsYKUFVbr9A9H4jUclafbKh7KAUDlSZWdJqmwrSHllBVXtUesVD1uHQZW7LfadGihRIxe4PISH8afP5wy_C20jVgyVVCSb32h7HZJb3G7fFrEbtGzUhzMQU0PySTWWkdlYZGpZt5_C2b4pS4GeiD5Tr4bCSrDqPn11rlCN82jHloZ7tOFTjKjIPD804ghNbI_2wtbNlO0OAxywoxhCXfPN4tYHnNXdCF9I1-w5nkG89BvYJsidnog6WhbJZTEQ-Fuj0z5BQvd-MBsxcMZLdO9ApRp4lvrL1mZHUBgIIoch0zC9WROs5FLN4o1ZyBHchZwy6ZKXtgEPIpYvFMRUc8yF42DOny8nQzx0imV70MQtF5nkhjAev1s93t95BifICNKAinA4FalilnnPXI011Nm9EG4JESKWQAx_FyCezPPzm42ewSyu_5iqhrn_vkjCswwym8cpUNLm0FtsqCeOgRYqUMZ63bZeiw4WVmp_9CbMeA17xYyduGR_xYXmJK65w1ZYLkuk0lLARzq_yd2IE2wysJSkGpKSPN41beCflKy0DSrzg7OtIQeF7--1sUW5xEejI-nC-unjep3SELHZ-CO_ejVAbXoujHWWGiulcT18y-Zm52Z-pV7h79iXynv3llZkCC5SSBWm8pi4VjCt7EeBypCR2LL8S3jK2PHc3tylZDCUKghOqJztk09Xi_ek0wq6rQruIY6GN16DXbSvqy3TZ1qeZxXmFOnOL0rgkewvS_NqoInj7A7OGNYWqYdRghQ_3lEggtZ4Sv_7kFqbpQtbVB8JF7xDRJrKED3w7r6A=w563-h675-s-no?authuser=0' }} />
                        </View>

                        {/* Swipe Counters */}
                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 135, gap: 20 }}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczM0UtcQ-soA0R2tFV6IcUllFR3oJZDkC3Q_6EwLNzHMmn_ptgOnFr0ckY0NNcbsD5wpE_bftQe8Srl8cH5vc4GQUVRnAL5AABlUVsOrHo-K4eosnc_EI6pZ6kR8LoBzMQTVZ9ZwhXci7XZ7ARCrauIs2I-U05Gf4FwD2VHHtCkhubuKx5VGrXz4h2CS_PI9Y89kNLRfXvs94WxibDXPfPJ5iiIYq26MSkEA6LzusdY0eI6BwmPfMDpkWvnfC4_jxVmMqDZRqQMXzfamrtAGpJMSnCyMxGZuWHDJH-G_1gpLuzH-MXhXaT_CfE4ifS1PtgRRIB0_AMcKMpyFhWINv6gMBSUAW4xP7uycrwbsR2zD0MRH5vQXz4hZL3uKaIYwnM8xmY0OU3i0YXVZmrer_PWknRWQJhVm4cd4vckhSfmoY-Xyjib4OmJ64Kc7TDvqgWC5_pSp8gSLFVSux2tKRaQuoe4bH2TtSotG3Qz6-7h-TqHwl-shEOr0AABwqflZk9GcpC-dL_sVJNDiVszHq86yxnOVG1HyTELuaZ45UHmuMMEhfMfDFr8pdHrSab9yUsggnHagU4P0PLx0DmOY3fa508mXXqrKPQD7IEDbhOmJTfUuv_wzFFw_D4BdxLrrKm6jYJPOdTTxFxrGv2RAQZU4OI_A0fJAdOJkiLOoyQ4moHFWQLtDde-sYSwkKCLZEYVk-cw0RQgVTWar6nBzT9-JXCJSu5-YY8ni0veEREqPqRT_U7UuseVM-n2qjQfHdDSW04q-O4J4j6Z5naQ1Xm8eLBNcIkzg0Uqj6O1ErA2vwn2ta4XcAquUsl2heLPLwhmNPyHw0xu7uKrZXM1mhKMcHgFFglyj6Z2Am87Q4SMfU86VQuSZ_tKGSrDRjvuMLfXhT52WFXuZoB5x6PgSTJspQpd_aQ=w527-h628-s-no?authuser=0' }}
                                style={{
                                    width: 80,
                                    height: 85,
                                }}
                                resizeMode="cover"
                            />
                            <SwipeCounter label="Outta reef" count={Reef} setCount={setReef} tintColor={"#d1ecf1"} />
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 150, gap: 20 }}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczOsFgO4e7CC7AxsDum3KcQt9Uil19K9PVBcSi4AD3vHBEcPxJf3FjkHYaAOdvLaVqsBHyDtk_0pwBYcerLDi0r7ZVS6qcB9AYxhsL1k7tSoFRVPJkt-iMUhuDOJdXTXp5WLrSkd5tz40l65sXsdM3qYq4JqmmmXcDQ6Kb9VikJpSOn_f4He_eYv3nyyMpFY153C4HqoLzopSVyOmGYJJZQBFfKMxIrDMg4O3l6WtJmiIpbROF4J4L2uhb_xZ_EBba_6GUaNy9T0Y3F4iVOKSggnnwk96mmLEzGtUBpq0--Cs2085Cve8XQj5DsATDyJ3St9fnG7wOP_TVo9mu_qU7yMQGf6N5ZGKhlvm418-wYjo97cdwQdFg6sV6lkJ_gb6W-Seo_sTlUxeWz99aDPJdfg8_W7Xnu3EzidSScx7nCj7iCaA-t3QdlNQUcoP5Y_d5DTD5W9dQy7MbIg9uSYepu2AGBAgicdKXTZjqkWuNFLqVPUpUaiE9H_np7cj-vl3Sblj0CgMTxB_HVWsvrKcz-EH1_JQrqTFU1T3XLqaL1ZO2B-TbMrZ-2mCJZcVe2Q3UrrRo6vj7XcbF87Bp_PU8s95MacrlWUbj_lMVtAk5OGuje-vztzY06kNEOQ8e_t5yU5vZpdDO-1WqfxmrWI_p_yB25YYJwUCSAbazkG7vSBbsXR4pPAQdPb1bK2ZQrNXnb92D2IIJS51TqYEVofEzJlM5rr6Ccza_Xs9nxtGWQSpLohRkWgMaSIoDLuikPtZC5sOQ0i-zcMxmb6SIt-d9rLJnQyq842aU5sGOwGI5UNfQrkqu0olESUTsaBXalziJVug5ekO09Kh6RH_QKyObXjwWqROU1Z9gvLvk_YEk9xp5qUU73JfYHtlWAV3ttktlgJsfNyHzRkpXAc20OJlHq4VQ0NJg=w354-h512-s-no?authuser=0' }}
                                style={{
                                    width: 60,
                                    height: 80,
                                }}
                                resizeMode="cover"
                            />
                            <SwipeCounter label="processor" count={Proccessor} setCount={setProccessor} tintColor={"#FFCC80"} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

function AutoButtons({ flag, setFlag }: AutoButtonsProps) {
    return (
        <View style={{ marginVertical: 20 }}>
            <Pressable
                onPress={() => {
                    setFlag(!flag)
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
                style={{
                    backgroundColor: flag ? 'green' : 'red',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 6,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                    {"crossed auto line - " + flag.toString()}
                </Text>
            </Pressable>
        </View>
    );
}
