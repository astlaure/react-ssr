# React SSR Setup

This first version uses a local data fetching model.

The state is wipped on page change so we can't cache the query result between page changes.

The AbortController gives us the possibility to cancel the call on unmount

To cache the data we can use a ReactContext for the query (like react-query)
