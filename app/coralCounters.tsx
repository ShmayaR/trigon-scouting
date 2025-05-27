import { View, Text, ImageBackground } from "react-native";
import { SuccessFailText } from './successFailText';
import { SuccessFailLevelCounter } from "./successFailLevelCounter";
import { CoralState } from "./coralAlgaeState";

interface coralsProps {
    coral: CoralState;
}

export function CoralCounters({ coral }: coralsProps) {
    const {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
    } = coral;
    const [L4, setL4] = l4;
    const [failL4, setFailL4] = faill4;
    const [L3, setL3] = l3;
    const [failL3, setFailL3] = faill3;
    const [L2, setL2] = l2;
    const [failL2, setFailL2] = faill2;
    const [L1, setL1] = l1;
    const [failL1, setFailL1] = faill1;
    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczOegdESMJ3AVyPokCjYYpjBY-o56rPbNAo1LPtZKYTTAY_IpvRakEK7XzdcLNm7JJmnYBHLVM7aOKYBXdvOm69A0dsrRpsYumR-AdDhoUYBbRSijTb_UPF7mpG8yg20lbsk82-bQQ-y-ZGTljn7YZj2h94PUNQ1eKCRaCyVelXDuJVzz930oTX7gIMMLLiEmkH5u4Yp5AA_3XL4LfxTJax_1pZvS_EZ7-im_td8K_6TC8xh9_CmL2VZQNFdYGG-JeXduLsKzL4iuZ392p-b0F-LB745EThBz3VEe2ov4gEgnWo-ZRBNhQMMoXPSIq_1dn9voZonUG7Bee6RjLPI2e1B9cctZTciCSoD5wroUiEB9gTIbuUE3TeNHjgTVQIqtASnnAtJhIB39rpjw_NA857BeKJ8VxhNwUkcDbaPtqzpO0BU7EMT1L0I9UEVT-MSfY03M-thftfernPTsk6Qq45Hf8o6lmnvlkfj0TDYVnxjObyKqojuWTnmrXl_sFGlw_MKK6mecGWbBoW03UpHZDIegC6bqAQPdwE_UVJEXbSyjZKYAjZpUbnzN6uSjkBVyLJpsuccYWw0_Ex-FZKj58f5fE0iGWc_tG2taiChuAJjuaJonfH4-fB0KQI2LW4UTgLN2uO4IDtlAFRkzK33pJ2zQ0hyZ4TPnRAbSO_Lj4cYmu00clTVHOtjWfxokqh0iVHM6ZneW9usl3umV59rM-_-E83uLtZDcwfWzP6h3cdp11if2jMQMFNZ1KE_NhHzghu7vENcePVyYAm-yQmJKmL_UtsqinvruNpSLnCypXPZA5B4h2hJHYwTvjgqc1_GViBwiqkaICLo21ttJzVorqW1bvnF5HZY4o8gvUCALpzBMp1cqQzk-7k7HX2n6sdktnJdqTIg7JlraXe53H2C38ijTV7_XQ=w178-h727-s-no?authuser=0' }}
                style={{
                    zIndex: -1,
                    width: 160,
                    height: 660,
                    left: 120,
                    top: 150,
                    position: "absolute"
                }}
            />
            {/* Title */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 20 }}>
                <Text style={{ fontSize: 50 }}>Coral</Text>
            </View>

            <SuccessFailText />

            {/* Counters */}
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 80,
                    paddingBottom: 100,
                }}
            >
                <SuccessFailLevelCounter
                    levelLabel="L4"
                    successCount={L4}
                    setSuccessCount={setL4}
                    failCount={failL4}
                    setFailCount={setFailL4}
                />
                <SuccessFailLevelCounter
                    levelLabel="L3"
                    successCount={L3}
                    setSuccessCount={setL3}
                    failCount={failL3}
                    setFailCount={setFailL3}
                />
                <SuccessFailLevelCounter
                    levelLabel="L2"
                    successCount={L2}
                    setSuccessCount={setL2}
                    failCount={failL2}
                    setFailCount={setFailL2}
                />
                <SuccessFailLevelCounter
                    levelLabel="L1"
                    successCount={L1}
                    setSuccessCount={setL1}
                    failCount={failL1}
                    setFailCount={setFailL1}
                />
            </View>
        </View>
    );
}
