interface Window {
    $notification?: import('naive-ui').NotificationProviderInst
}

declare namespace Common {
    type StrategyAction = [boolean, () => void]
}
