import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "g6l8l4jr",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-16"
})

export default client