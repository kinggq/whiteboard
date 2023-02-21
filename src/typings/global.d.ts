interface Window {
    $notification?: import('naive-ui').NotificationProviderInst
    $dialog?: import('naive-ui').DialogProviderInst
}

declare namespace Common {
    type StrategyAction = [boolean, () => void]
}
