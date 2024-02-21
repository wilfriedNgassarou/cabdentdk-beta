import Banner from "@/app/ui/banner/Index"
import About from "@/app/ui/about/Index"
import Approach from "@/app/ui/approach/Index"
import Service from "@/app/ui/service/Index"
import Avice from "@/app/ui/avice/Index"
import Appointment from "@/app/ui/appointment/Index"
import Testimony from "@/app/ui/testimony/Index"

export default function Home() {
  return (
    <>
    {/* <Toaster /> */}
      <Banner />
      <main>
        <About />
        <Approach />
        <Service />
        <Avice />
        <Appointment />
        <Testimony />
      </main>
    </>
  )
}
