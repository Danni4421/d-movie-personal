import Authenticated from "../Auth/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <Head>
                <title>Subscriptions</title>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMonth={3}
                        features={["Features 1", "Features 2", "Features 3"]}
                    />

                    {/* For Greatest */}
                    <SubscriptionCard
                        name="For Greatest"
                        price={800000}
                        durationInMonth={3}
                        features={[
                            "Features 1",
                            "Features 2",
                            "Features 3",
                            "Features 4",
                        ]}
                        isPremium
                    />
                </div>
                {/* Pricing Card */}
            </div>
        </Authenticated>
    );
}
