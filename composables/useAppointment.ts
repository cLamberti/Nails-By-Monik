// useState de Nuxt comparte estado entre componentes sin Pinia
export const useAppointment = () => {
  const selectedDate = useState<Date | null>('appointment:date', () => null)
  const selectedTime = useState<string>('appointment:time', () => '')

  const formattedDate = computed(() => {
    if (!selectedDate.value) return ''
    return selectedDate.value.toLocaleDateString('es-CR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
  })

  const reset = () => {
    selectedDate.value = null
    selectedTime.value = ''
  }

  return { selectedDate, selectedTime, formattedDate, reset }
}