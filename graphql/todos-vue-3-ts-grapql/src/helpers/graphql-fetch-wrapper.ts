function fetchWrapper <T = any> (query: string): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch('https://graphqlzero.almansi.me/api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({query})
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.errors) {
          reject(data)
        }
        resolve(data)        
      })
      .catch(reject)
  })
}

export default fetchWrapper