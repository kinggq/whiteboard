import { type ComputedRef, type Ref, ref, nextTick, effectScope, watch, onScopeDispose } from 'vue'
import * as echarts from 'echarts/core'
import { useThemeStore } from '@/store'
import { useElementSize } from '@vueuse/core'
import { CanvasRenderer } from 'echarts/renderers'

import {
    PieChart,
    LineChart,
    BarChart 
} from 'echarts/charts'

import type {
    PieSeriesOption,
    LineSeriesOption,
    BarSeriesOption
} from 'echarts/charts'

import {
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    GridComponent,
    MarkLineComponent
} from 'echarts/components'

export type ECOption = echarts.ComposeOption<
    PieSeriesOption |
    LineSeriesOption |
    BarSeriesOption
>

echarts.use([
    PieChart,
    LineChart,
    BarChart,
    CanvasRenderer,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    GridComponent,
    MarkLineComponent,
])

/**
 * echarts hooks
 * @param options 图表配置
 * @param renderFun 图表渲染函数
 * @returns dom ref
 */
export function useEcharts(
    options: Ref<ECOption> | ComputedRef<ECOption>,
    renderFun?: (chartInstance: echarts.ECharts) => void
) {
    const theme = useThemeStore()

    const domRef = ref<HTMLElement>()

    const initialSize = { width: 0, height: 0 }

    const { width, height } = useElementSize(domRef, initialSize)

    let chart: echarts.ECharts | null

    function canRender() {
        return initialSize.width > 0 && initialSize.height > 0
    }

    function isRendered() {
        return Boolean(domRef.value && chart)
    }

    function update(updateOptions: ECOption) {
        if (isRendered()) {
            chart?.clear()
            chart?.setOption({ ...updateOptions, backgroundColor: 'transparent' })
        }
    }

    async function render() {
        if (domRef.value) {
            const chartTheme = theme.isDark ? 'dark' : 'light'

            await nextTick()

            chart = echarts.init(domRef.value, chartTheme)
            if (renderFun) {
                renderFun(chart)
            }
            update(options.value)
        }
    }

    function resize() {
        chart?.resize()
    }

    function destroy() {
        chart?.dispose()
    }

    function updateTheme() {
        destroy()
        render()
    }

    const scope = effectScope()
    scope.run(() => {
        watch([width, height], ([newWidth, newHeight]) => {
            initialSize.width = newWidth
            initialSize.height = newHeight

            if (newWidth === 0 && newHeight === 0) {
                chart = null
            }

            if (canRender()) {
                if (!isRendered()) {
                    render()
                } else {
                    resize()
                }
            }
        })

        watch(options, newOptions => {
            update(newOptions)
        }, { deep: true })

        watch(
            () => theme.isDark,
            () => {
                updateTheme()
            }
        )
    })

    onScopeDispose(() => {
        destroy()
        scope.stop()
    })

    return {
        domRef
    }
}
