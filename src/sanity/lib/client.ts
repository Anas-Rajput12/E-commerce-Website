import { createClient } from 'next-sanity'

// Ensure you either use the imported constants or environment variables
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use imported value or environment variable
  dataset: dataset || process.env.NEXT_PUBLIC_SANITY_DATASET, // Use imported value or environment variable
  apiVersion: apiVersion || '2025-01-20',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Use the environment variable for the API token
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
