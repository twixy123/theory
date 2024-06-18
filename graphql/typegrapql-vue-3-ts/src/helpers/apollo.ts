import { apolloClient } from '@/config/apollo-instance'
import { ref, computed } from 'vue'
import type { DocumentNode } from 'graphql'
import type ApolloResults from '@/interfaces/apollo-results'

export function createApolloInstance () {
  const loading = ref(false)
  const error = ref(null)

  const apollo = computed(() => {
    return {
      loading: loading.value,
      error: error.value
    }
  })

  async function query<T> (options: { query: DocumentNode, variables?: any }): Promise<ApolloResults<T>> {
    try {
      loading.value = true
      error.value = null
      const result = await apolloClient.query<T>(options)

      return {
        loading: loading.value,
        error: error.value,
        data: result.data
      }
    } catch (e) {
      error.value = e as any

      return {
        loading: loading.value,
        error: error.value,
        data: undefined
      }
    } finally {
      loading.value = false
    }
  }

  async function mutate<T> (options: { mutation: DocumentNode, variables?: any }): Promise<ApolloResults<T>> {
    try {
      loading.value = true
      error.value = null
      const result = await apolloClient.mutate<T>(options)

      return {
        loading: loading.value,
        error: error.value,
        data: result.data
      }
    } catch (e) {
      error.value = e as any
      
      return {
        loading: loading.value,
        error: error.value,
        data: undefined
      }
    } finally {
      loading.value = false
    }
  }

  return {
    apollo,
    query,
    mutate
  }
}

export const useApollo = createApolloInstance()