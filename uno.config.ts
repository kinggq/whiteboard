import { defineConfig } from '@unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify(),
        presetIcons(),
        presetUno(presetUno({ dark: 'class' }))
      ],
      theme: {
        brand: {
          
        },
        colors: {
            primary: 'var(--primary-color)',
            primary_hover: 'var(--primary-color-hover)',
            primary_pressed: 'var(--primary-color-pressed)',
            primary_active: 'var(--primary-color-active)',
            info: 'var(--info-color)',
            info_hover: 'var(--info-color-hover)',
            info_pressed: 'var(--info-color-pressed)',
            info_active: 'var(--info-color-active)',
            success: 'var(--success-color)',
            success_hover: 'var(--success-color-hover)',
            success_pressed: 'var(--success-color-pressed)',
            success_active: 'var(--success-color-active)',
            warning: 'var(--warning-color)',
            warning_hover: 'var(--warning-color-hover)',
            warning_pressed: 'var(--warning-color-pressed)',
            warning_active: 'var(--warning-color-active)',
            error: 'var(--error-color)',
            error_hover: 'var(--error-color-hover)',
            error_pressed: 'var(--error-color-pressed)',
            error_active: 'var(--error-color-active)',
            dark: '#18181c'
          }
      },
      shortcuts: {
        'flex-center': 'flex justify-center items-center',
        'flex-between': 'flex justify-between items-center',
        'flex-col-center': 'flex-center flex-col',
        'dark-bg': 'var(--n-color)',
        'absolute-lb': 'absolute left-0 bottom-0',
        'absolute-rt': 'absolute right-0 top-0',
        'bb-primary': 'border-b-1px border-b-[#efefef] dark:border-b-[#393939]' 
      }
})
