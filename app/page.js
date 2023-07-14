import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* The Section Below the Banner Image. */}
      <div className="grid lg:grid-cols-2 mt-14 ">
        {/* Left Side of the Grid */}
        <div className="text-primary-800">
          <h1 className="flex justify-center font-semibold text-primary-800 text-4xl ">
            K R R U N C H
          </h1>
          <p className=" text-center max-w-[37ch] mx-auto mt-10 lg:text-lg  opacity-80 ">
            We wanted to make the original cookies - the cookies as they should
            be. And so we got to work. We surveyed people - asking everyone what
            were the key aspects of making a cookie. What should we focus on?
          </p>
          <p className=" text-center max-w-[37ch] mt-5 mx-auto lg:text-lg  opacity-80 ">
            Krrunch is a cookie company. All our cookies are made from scratch,
            packed beautifully and shipped all across the world.
          </p>
          <p className=" text-center max-w-[37ch] mt-5 mx-auto lg:text-lg  opacity-80 ">
            Specializing in cookies, the brand has slowly expanded its range of
            products Pioneering the ‘cookie cult’ - the brand now has a global
            presence.
          </p>
          <div className="flex justify-center">
            <Link
              href="/cookies"
              className=" p-6 lg:px-36  mt-[5rem] rounded-lg  text-white text-lg font-semibold bg-secondary-800 opacity-80 hover:opacity-100">
              Get Your Cookie
            </Link>
          </div>
        </div>
        {/*------------------------------------------------ Right Side of the Grid=------------------------------- */}
        <div className="hidden lg:flex lg:justify-center lg:mt-5 ">
          <p>
            <Image
              src="/CookieBox.jpg"
              width={600}
              height={500}
              alt="Image of Cookie Box for right side of the div"
            />
          </p>
        </div>
      </div>
      {/* --------------------------------------------------Next Section--------------------------------------------- */}
      {/* --------------------------------------------------The Section Beneath the colum---------------------------------------- */}
      <div className="grid lg:grid-cols-2 mt-32 ">
        <div className="flex justify-center">
          <Image
            src={"/BakedCookie.jpg"}
            width={600}
            height={500}
            alt="Image of Cookie Box"
          />
        </div>
        <div>
          <h1 className="flex justify-start text-center lg:text-left font-semibold  text-primary-800 text-4xl mt-[9rem]">
            Freshly Baked & Eggless From Skilled Bakers
          </h1>
          <p className="max-w-[70ch] mt-9 text-center lg:text-left text-primary-800 opacity-80">
            Indulge in the delectable goodness of freshly baked, eggless cookies
            from Krrunch. Our expert bakers have crafted a mouthwatering
            assortment of treats that will delight your taste buds without
            compromising on taste or texture. Made with the finest ingredients,
            these cookies are a perfect combination of crispy on the outside and
            soft on the inside.
          </p>
          <p className="mt-3 text-primary-800 opacity-80">
            Whether you`re a chocolate lover, a fan of classic oatmeal, or crave
            the delightful crunch of almond, we have a cookie flavor that will
            leave you craving for more.
          </p>
        </div>
      </div>
      {/* --------------------------------Next Section----------------------------- */}
      {/* The Section Beneath the colum */}
      <div className="grid lg:grid-cols-2">
        <div className="">
          <h1 className="flex justify-end font-semibold text-center lg:text-left text-primary-800 text-4xl mt-[16rem]">
            Mouthwatering Cookie Creations to Tempt Your Taste Buds
          </h1>
          <p className="flex  mt-12 max-w-[70ch] text-center lg:text-left text-primary-800 opacity-80">
            From the classic chocolate chip to the delicate buttery shortbread,
            cookies come in an endless array of flavors, shapes, and textures.
            Crispy on the outside, chewy on the inside, they offer a satisfying
            combination of textures that tantalize the taste buds. Whether it`s
            a simple afternoon snack, a heartfelt gift, or a centerpiece of
            celebration, cookies are a beloved treat that can brighten any
            moment and create lasting memories.
          </p>
        </div>
        <div className="flex justify-end mt-36">
          <Image
            src={"/BoxOfCookies.jpg"}
            width={600}
            height={500}
            alt="Image of Cookie Box"
          />
        </div>
      </div>
      <section class="text-gray-600 body-font mt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary-800">
                2.7K
              </h2>
              <p className="leading-relaxed">Happy Customer</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary-800">
                800
              </h2>
              <p className="leading-relaxed">Daily Orders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary-800">
                35
              </h2>
              <p className="leading-relaxed">Chef</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary-800">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
