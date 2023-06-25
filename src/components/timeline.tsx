import React from "react";

export const Timeline = () => {
  return (
    <div className="bg-gray-200 container mx-auto h-full w-full">
      <div className="wrap relative h-full overflow-hidden p-10">
        <div className="border-2-2 absolute h-full border border-silver border-opacity-20"></div>
        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="bg-gray-800 z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
          </div>
          <div className="bg-gray-400 order-1 w-5/12 rounded-lg px-6 py-4 shadow-xl">
            <h3 className="text-gray-800 mb-3 text-xl font-bold text-light-nugget">
              Flavorful Coating:
            </h3>
            <p className="text-gray-900 text-sm leading-snug tracking-wide text-silver text-opacity-100">
              Chicken nuggets are typically coated in a seasoned breading or
              batter that adds a crispy and flavorful outer layer. The
              combination of herbs, spices, and the golden-brown texture
              enhances the taste and provides a satisfying crunch.
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="bg-gray-800 z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
          </div>
          <div className="bg-red-400 order-1 w-5/12 rounded-lg px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-light-nugget">
              Moist and Tender Chicken:
            </h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Good quality chicken nuggets are made from tender, juicy chicken
              meat. The meat is often finely ground, mixed with other
              ingredients, and shaped into bite-sized pieces. This results in a
              moist and succulent texture that is enjoyable to eat.
            </p>
          </div>
        </div>

        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="bg-gray-800 z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
          </div>
          <div className="bg-gray-400 order-1 w-5/12 rounded-lg px-6 py-4 shadow-xl">
            <h3 className="text-gray-800 mb-3 text-xl font-bold text-light-nugget">
              Versatility:
            </h3>
            <p className="text-gray-900 text-sm leading-snug tracking-wide text-silver text-opacity-100">
              Chicken nuggets can be paired with various sauces, making them
              highly versatile. Whether it&apos;s ketchup, barbecue sauce, honey
              mustard, or even a spicy dip, the condiments enhance the flavor
              profile and offer different taste experiences.
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="bg-gray-800 z-20 order-1 flex h-8 w-8 items-center rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
          </div>
          <div className="bg-red-400 order-1 w-5/12 rounded-lg px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-light-nugget ">
              Familiarity and Nostalgia:
            </h3>
            <p className="text-sm leading-snug tracking-wide text-silver text-opacity-100">
              Chicken nuggets have been a popular food choice, especially among
              children, for many years. The familiarity and nostalgia associated
              with this comfort food can contribute to the perception of them
              being enjoyable. Childhood memories and positive associations can
              enhance the overall experience of eating chicken nuggets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
