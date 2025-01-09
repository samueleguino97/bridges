import Hero from "@/sections/hero";
import Team from "@/sections/team";
import Feature from "@/sections/feature";
import Footer from "@/sections/footer";
import { getPayload } from "payload";
import config from "@payload-config";

const payload = await getPayload({ config });

export default async function Home() {
  const landing = await payload.findByID({
    collection: "pages",
    id: "1",
    draft: true,
  });
  return (
    <>
      <Hero data={landing} />
      <Feature data={landing} />
      <Team data={landing} />
      <Footer data={landing} />
    </>
  );
}
