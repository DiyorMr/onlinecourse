import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Free Plan",
        price: 0,
        features: [
            "Access to selected free courses.",
            "Limited course materials and resources.",
            "Basic community support.",
            "No certification upon completion.",
            "Ad-supported platform.",
        ],
    },
    {
        title: "Pro Plan",
        price: 79,
        features: [
            "Unlimited access to all courses.",
            "Unlimited course materials and resources.",
            "Priority support from instructors.",
            "Course completion certificates.",
            "Ad-free experience.",
        ],
    },
];

const extraFeatures = [
    "Access to exclusive Pro Plan community forums.",
    "Early access to new courses and updates.",
];

const PricingPlans = () => {
    const [billing, setBilling] = useState("monthly");

    return (
        <section className="p-6 bg-gray-50">
            <div className="max-w-6xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">Our Pricing</h2>
                        <p className="text-gray-600 max-w-2xl mt-2">
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </p>
                    </div>


                    {/* Billing toggle */}
                    <div className="flex justify-center mt-4 space-x-2">
                        <button
                            onClick={() => setBilling("monthly")}
                            className={`px-4 py-2 rounded ${billing === "monthly"
                                ? "bg-[#FF9500] text-white"
                                : "bg-white text-gray-700 border"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling("yearly")}
                            className={`px-4 py-2 rounded ${billing === "yearly"
                                ? "bg-[#FF9500] text-white"
                                : "bg-white text-gray-700 border"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-6">
                            <h3 className="w-full bg-[#FFEACC] text-[#262626] text-center py-2 font-semibold">{plan.title}</h3>
                            <div className="text-3xl font-bold my-8 text-center ">
                                ${billing === "yearly" ? plan.price * 10 : plan.price}
                                <span className="text-base font-medium text-gray-600">/month</span>
                            </div>
                            <h4 className="text-sm text-gray-600 mb-3">Available Features</h4>
                            <ul className="text-sm text-gray-700 space-y-2 mb-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                {extraFeatures.map((feature, i) => (
                                    <li key={`extra-${i}`} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-[#FF9500] text-white py-2 rounded hover:bg-[#FF9500] transition">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
