import * as Haptics from 'expo-haptics';

// optional config object:
const hapticOptions = {
    enableVibrateFallback: true,   // fallback to vibration on Android
    ignoreAndroidSystemSettings: false,
};

export const addIncrementTap = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
    )
    //ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
};

export const addDecrementTap = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
    )    //ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
};
