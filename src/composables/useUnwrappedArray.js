import { computed, isRef } from 'vue'


export function useUnwrappedArray(maybeArray) {
  return computed(() => {
    if (Array.isArray(maybeArray)) {
      return maybeArray
    }
    if (isRef(maybeArray) && Array.isArray(maybeArray.value)) {    
      return maybeArray.value
    }
    
    return []
  })
}
