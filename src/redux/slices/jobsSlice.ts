import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Jobs  from "../../pages/Jobs"

interface JobsState {
  jobs: Jobs[]
  loading: boolean
  error: string | null
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null
}

// Async thunk for API call
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products")
      const data = await response.json()

      const formattedJobs: Jobs[] = data.products.map((item: any) => ({
        id: item.id,
        title: item.title,
        company: item.brand,
        location: "Remote",
        salary: item.price * 1000
      }))

      return formattedJobs
    } catch (error) {
      return rejectWithValue("Failed to fetch jobs")
    }
  }
)

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false
        state.jobs = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export default jobsSlice.reducer
