interface ApolloResults<T> {
  loading: boolean
  error: any
  data: T | undefined | null
}

export default ApolloResults