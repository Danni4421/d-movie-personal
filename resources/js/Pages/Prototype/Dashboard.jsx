import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Pages/Auth/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import { feature, browse } from "/public/data/listFilm";
import Card from "@/Components/Card";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {feature.map((res) => {
                        return (
                            <FeaturedMovie
                                key={res.key}
                                slug={res.slug}
                                name={res.name}
                                category={res.category}
                                thumbnail={`/images/featured-${res.imageKey}.png`}
                                rating={res.rating}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div className="mt-10">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {browse.map((i) => {
                        return (
                            <Card
                                key={i.key}
                                slug={i.slug}
                                name={i.name}
                                description={i.desc}
                                thumbnail={i.img}
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
