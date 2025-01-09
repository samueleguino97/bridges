import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$19", annually: "$15" },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    price: { monthly: "$49", annually: "$39" },
    description:
      "Everything in Basic, plus essential tools for growing your business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    price: { monthly: "$99", annually: "$79" },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

const features = [
  {
    name: "Push to deploy",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "SSL certificates",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Simple queues",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="bg-white px-6 pb-32  lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base/7 font-semibold text-primary">
            No mas excusas
          </p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Nuestros Servicios
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Paquete de Ingles
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-primary">Pricing</h2>
          </div>
          <div className="mt-12 flow-root">
            <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
              {tiers.map((tier) => (
                <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                  <h3
                    id={tier.id}
                    className="text-base/7 font-semibold text-gray-900"
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-semibold tracking-tight text-gray-900">
                      {tier.price.monthly}
                    </span>
                    <span className="text-sm/6 font-semibold text-gray-600">
                      /month
                    </span>
                  </p>
                  <p className="mt-3 text-sm/6 text-gray-500">
                    {tier.price.annually} per month if paid annually
                  </p>
                  <p className="mt-10 text-sm/6 font-semibold text-gray-900">
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-3 text-sm/6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircleIcon
                          aria-hidden="true"
                          className="h-6 w-5 flex-none text-primary"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contacto"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
