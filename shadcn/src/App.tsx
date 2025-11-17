// import MultiSelectCombobox from '@/components/MultiSelectCombobox'
import MultiSelectCombobox from '@/components/MyCombobox'

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]


function App () {
  return (
    <div className="container">
      <h1 className="mb-5">Showcase page...</h1>
      <div className="flex flex-col gap-10">
        {/* <MultiSelectCombobox /> */}
        <MultiSelectCombobox options={frameworks} />
      </div>
    </div>
  )
}

export default App;
