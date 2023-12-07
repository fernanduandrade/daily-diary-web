import { useToast, type ToastProps } from 'vue-toast-notification'
const toast = useToast()

const customOptions: ToastProps = {
  position: 'top-right',
}

const toastAdapter = {
  success: (message: string, ) => toast.success(message, customOptions),
  warning: (message: string, ) => toast.warning(message, customOptions),
  error: (message: string, ) => toast.error(message, customOptions),
  information: (message: string) => toast.info(message, customOptions)
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: toastAdapter
    }
  }
})