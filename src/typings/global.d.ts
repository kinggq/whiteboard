interface Window {
    $notification?: import('naive-ui').NotificationProviderInst
    $dialog?: import('naive-ui').DialogProviderInst
    $loadingBar?: import('naive-ui').LoadingBarProviderInst
}

declare namespace Common {
    type StrategyAction = [boolean, () => void]
}
